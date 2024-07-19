import { useFormik } from "formik";
import logo from "../../assets/img/logo-life-h2.png";
import { Input } from "../../components/Input/Input";
import { MaskedInput } from "../../components/InputMask/InputMask";
import { DateInput } from "../../components/Input/DateInput";
import { SelectGender } from "../../components/Select/Select.Gender";
import { Button } from "../../components/Button/Button";
import { Steps } from "../../components/Steps/Steps";
import { TabPanel } from "../../components/Steps/TapPanel";
import { useContext, useEffect, useState } from "react";
import { AddressForm } from "../../components/Forms/Address.Form";
import { CardPaymentForm } from "../../components/Forms/Card.Form";
import { IAddress } from "../../interfaces/address.interface";
import { ClientService } from "../../services/client.service";
import { ToastContext } from "../../context/ToastContext";
import { api } from "../../config/axios.base";
import { SelectPlans } from "../../components/Select/Select.Plans.Promo";
import { useNavigate } from "react-router-dom";
import { ICardInfo, OrderWayEnum } from "../../interfaces/payment.interface";
import Swal from "sweetalert2";
import { DetailOrderPlan } from "../../components/Checkout/detail.order";
import { IPlan } from "../../interfaces/plan.interface";

interface IClient {
    nome?: string;
    cpf?: string;
    email: string;
    dataNascimento: string;
    sexo: string;
    celular: string;
    codigoIndicacao: string;
    planoId: number;
}

export const CheckoutView = () => {

    const clientService = new ClientService()

    const [value, setValue] = useState(0);
    const [payload, setPayload] = useState({});
    const [codigoIndicacao, setCodigoIndicacao] = useState('');

    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState<IAddress>({});
    const [userId, setUserId] = useState("");
    const [card, setCard] = useState({});

    const [plan, setPlan] = useState<IPlan>({ code: 0, createdAt: '', id: 0, name: "", price: 0, benefits: [] })

    const { showToast, setType } = useContext(ToastContext)
    const formik = useFormik<IClient>({
        initialValues: {
            nome: '',
            cpf: '',
            email: '',
            dataNascimento: '',
            celular: '',
            sexo: '',
            codigoIndicacao: '',
            planoId: 0
        },
        async onSubmit(values) {
            setLoading(true)
            try {
                const userSignupInfoResponse = await api().post(
                    "/auth/signup",
                    values
                );

                setUserId(userSignupInfoResponse.data.user.id)
                await api().post(
                    `/address/${userSignupInfoResponse.data.user.id}/me`,
                    address
                );
                setValue(old => (old + 1));
            } catch (error: any) {
                Swal.fire({
                    title: "Alguma coisa deu errado :(",
                    text: `Erro: ${error.response.data.message}`,
                    icon: "error",
                    confirmButtonText: "OK",
                });
            } finally {
                setLoading(false)
            }

        },
    })

    useEffect(() => {
        api().get(`/plans/${formik.values.planoId}`)
            .then((res) => {
                setPlan(res.data)
            })
    }, [formik.values.planoId])

    const navigate = useNavigate();

    const pay = async (card: ICardInfo) => {
        setLoading(true)
        try {
            const data = {
                clientId: userId,
                orderWay: OrderWayEnum.CC,
                card
            };


            const response = await api().post(
                "/payments/plan/pf",
                data
            );

            navigate("/obrigado", { replace: true });
        } catch (err: any) {
            Swal.fire({
                title: "Alguma coisa deu errado :(",
                text: `Erro: ${err.response.data.message}`,
                icon: "error",
                confirmButtonText: "OK",
            });
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="mt-10 min-h-screen" >
            <div className="flex justify-center mb-10">
                <img src={logo} className="w-[100px]" />
            </div>

            <div className="flex space-x-4 justify-center flex-col md:flex-row">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <Steps stepIndex={value} />

                    <TabPanel index={0} value={value} >
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid gap-6 mb-6 md:grid-cols-1">
                                <Input
                                    name="email"
                                    placeholder="Email"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    focusPlaceholder="Email"
                                />
                            </div>

                            <div className="grid gap-6 mb-6 md:grid-cols-3">
                                <div className="col-span-2">
                                    <Input
                                        name="nome"
                                        placeholder="Nome completo"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.nome}
                                        focusPlaceholder="Nome"
                                    />
                                </div>

                                <div>
                                    <MaskedInput
                                        name="cpf"
                                        error={false}
                                        mask="999.999.999-99"
                                        placeholder="Documento"
                                        onChange={formik.handleChange}
                                        type="text"
                                        value={formik.values.cpf}
                                        focusPlaceholder="CPF"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 mb-6 md:grid-cols-3">
                                <div>
                                    <DateInput
                                        name="dataNascimento"
                                        defaultValue={formik.values.dataNascimento}
                                        onChange={(value: any) => {
                                            console.log('value', value);
                                            formik.setFieldValue('dataNascimento', value);
                                        }} />
                                </div>
                                <div>
                                    <MaskedInput
                                        name="celular"
                                        error={false}
                                        mask="(99)9 9999-9999"
                                        placeholder="Documento"
                                        onChange={formik.handleChange}
                                        type="text"
                                        value={formik.values.celular}
                                        focusPlaceholder="Celular"
                                    />
                                </div>
                                <div>
                                    <SelectGender value={formik.values.sexo} onChange={(g: string) => formik.setFieldValue("sexo", g)} />
                                </div>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-1">
                                <div>
                                    <SelectPlans onChange={(event: any) => {
                                        formik.setFieldValue('planoId', event.target.value)
                                    }} value={formik.values.planoId} />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className="w-[100px]">
                                    <Button text="AVANÇAR" type="submit" hasIcon={false} onClick={() => {
                                        setValue(old => (old + 1));
                                        if (value == 2) {
                                            formik.handleSubmit()
                                        }
                                    }} />
                                </div>
                            </div>
                        </form>
                    </TabPanel>

                    <TabPanel index={1} value={value} >
                        <Input
                            name="codigoIndicacao"
                            placeholder="Código indicação"
                            type="text"
                            onChange={(evt) => {
                                formik.setFieldValue('codigoIndicacao', evt.target.value)
                            }}
                            value={formik.values.codigoIndicacao}
                            focusPlaceholder="Código indicação"
                        />

                        {/* refatora botão */}
                        <div className="flex justify-between">
                            <div className="w-[100px]">
                                <Button loading={loading} text="VOLTAR" type="submit" hasIcon={false} onClick={() => {
                                    setValue(value - 1)
                                }} />
                            </div>

                            <div className="w-[100px]">
                                <Button loading={loading} text="AVANÇAR" type="submit" hasIcon={false} onClick={() => {
                                    setValue(value + 1)
                                }} />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel index={2} value={value} >
                        <AddressForm initiValues={{}} errors={[]} onChange={(data: IAddress) => {
                            setAddress(old => ({ ...old, ...data }));

                            // formik.setFieldValue('cep', data.cep)
                            // formik.setFieldValue('bairro', data.bairro)
                            // formik.setFieldValue('cidade', data.cidade)
                            // formik.setFieldValue('codeIBGE', data.codeIBGE)
                            // formik.setFieldValue('complemento', data.complemento)
                            // formik.setFieldValue('estado', data.estado)
                            // formik.setFieldValue('logradouro', data.logradouro)
                            // formik.setFieldValue('numero', data.numero)
                        }} setErrors={() => { }} />

                        {/* refatora botão */}
                        <div className="flex justify-between">
                            <div className="w-[100px]">
                                <Button loading={loading} text="VOLTAR" type="submit" hasIcon={false} onClick={() => {
                                    setValue(value - 1)
                                }} />
                            </div>

                            <div className="w-[100px]">
                                <Button disabled={(address.cep == "")} loading={loading} text="AVANÇAR" type="submit" hasIcon={false} onClick={() => {
                                    formik.handleSubmit()
                                }} />
                            </div>
                        </div>

                    </TabPanel>

                    <TabPanel index={3} value={value} >
                        <CardPaymentForm onChange={(data) => {
                            setCard(data)
                        }} />

                        {/* refatora botão */}
                        <div className="flex justify-between">
                            <div className="w-[100px]">
                                <Button loading={loading} text="VOLTAR" type="submit" hasIcon={false} onClick={() => {
                                    setValue(value - 1)
                                }} />
                            </div>

                            <div className="w-[100px]">
                                <Button loading={loading} text="AVANÇAR" type="submit" hasIcon={false} onClick={() => {
                                    pay(card)
                                }} />
                            </div>
                        </div>
                    </TabPanel>
                </div>


                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <DetailOrderPlan plan={plan} />
                </div>
            </div>
        </div>
    )
}
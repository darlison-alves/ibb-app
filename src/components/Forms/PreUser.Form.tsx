import { FormEvent, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdEmail, MdPassword, MdPersonOutline } from "react-icons/md";
import { WarningAlert } from "../Alerts/warning.alert"
import { Button } from "../Button/Button";
import { Input } from "../Input/Input"
import { Title } from "../StepsTitle/StepsTitle";
import { MaskedInput } from "../InputMask/InputMask";
import { ClientService } from "../../services/client.service";
import { getResponseError } from "../../utils/tratamento.response-error";

export const PreUserForm = ({ onAfterSuccessSubmit = () => {} }: any) => {
    const clientService = new ClientService()
    
    const [errors, setErrors] = useState<(string | number)[]>([]);
    const [responseError, setResponseError] = useState("")
    const [payload, setPayload] = useState({ email: "", password: "", cpf: "" });
    const [loading, setLoading] = useState(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        clientService.createPreUser({
            email: payload.email,
            cpf: payload.cpf,
            senha: payload.password
        }).then(res => {
            onAfterSuccessSubmit(res.data)
        }).catch(err => {
            setResponseError(getResponseError(err))
        })
        .finally(() => {
            setLoading(true);
        })
    }

    const checkForErrors = (error: string) => {
        return errors.find((err) => err === error) ? true : false;
    };

    return (
        <div className='mt-10'>
            <form name='login' onSubmit={onSubmit} className="bg-white shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md" >
                <section>
                    <Title step="1" title="Informações para compra" />

                    <p className="text-base font-light my-3">
                        Digite seus dados, será utilizado como pré cadastro, e poderá realizar login efetuar suas compras!!
                    </p>
                    {responseError && <WarningAlert text="Usuário ou senha inválido" />}
                    <Input
                        hasIcon={true}
                        error={errors.find((err) => err === "email") ? true : false}
                        icon={
                            <MdEmail
                                className="absolute top-[14px] left-[12px]"
                                color="#92979A"
                                size={20}
                            />
                        }
                        name="email"
                        value={payload.email}
                        placeholder="Seu e-mail"
                        type="text"
                        onChange={(e) => setPayload(old => ({ ...old, email: e.target.value }))}
                        focusPlaceholder="E-mail"
                    />
                    {/* </div> */}
                </section>
                <section className='my-3'>
                    <MaskedInput
                        hasIcon={true}
                        icon={
                            <MdPersonOutline
                                className="absolute top-[14px] left-[12px]"
                                color="#92979A"
                                size={20}
                            />
                        }
                        error={checkForErrors("cpf")}
                        mask="999.999.999-99"
                        placeholder="CPF"
                        onChange={(e) => setPayload(old => ({ ...old, cpf: e.target.value }))}
                        type="text"
                        value={payload.cpf}
                        focusPlaceholder="CPF"
                    />
                </section>
                <section className='my-3'>
                    <Input
                        hasIcon={true}
                        error={errors.find((err) => err === "password") ? true : false}
                        icon={
                            <MdPassword
                                className="absolute top-[14px] left-[12px]"
                                color="#92979A"
                                size={20}
                            />
                        }
                        name="password"
                        value={payload.password}
                        placeholder="Sua senha"
                        type="password"
                        onChange={(e) => setPayload(old => ({ ...old, password: e.target.value }))}
                        focusPlaceholder="Senha"
                    />

                </section>
                <section>

                    {loading ? (<button
                        type="button"
                        className="bg-[#f3c2a0] text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md disabled:opacity-50"
                        disabled={loading}
                    >
                        Processando...
                        <AiOutlineLoading3Quarters className="animate-spin" />
                    </button>) : <Button type="submit" text="Cadastrar" hasIcon={false} />}

                </section>
            </form>
        </div>
    )
}
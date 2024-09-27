import { BtnPrimary, ButtonSecudary } from "../../components/Button/Button"

import profileImage from '../../assets/img/blank-profile.png'
import { ClientService } from "../../services/client.service";
import { useContext, useEffect, useState } from "react";
import { IClientUser } from "../../interfaces/clientUser.iterface";
import { ModalContext } from "../../context/ModalContext";
import { BankDataForm } from "../Forms/BankData.Form";
import { BindWithInsurance } from "../Insurance/BindWIthInsurance";
import { ToastContext } from "../../context/ToastContext";
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum";
import { getResponseError } from "../../utils/tratamento.response-error";
import { ProfileMenu } from "../Menu/profile.menu";
import { BankFormModal } from "./subcomponent/bank.form.modal";

interface IProfileClient {
    userId?: any;
    onEdit: any
}

const clientService = new ClientService();

export const ProfileClient = ({ userId, onEdit = () => { } }: IProfileClient) => {
    const [client, setClient] = useState<IClientUser>({})
    const [openPopup, setOpenPopup] = useState(false);
    // const { setTitle, setOpen, open, setComponet } = useContext(ModalContext);
    const { showToast, setType } = useContext(ToastContext);


    // const openModal = () => {
    //     setTitle("Dados Bancários")
    //     setOpen(!open)
    //     setComponet(<BankDataForm
    //         cb_err={(message: string) => {
    //             showToast(message)
    //             setType(TypeMessageEnum.error)
    //         }}
    //         cb={() => {
    //             showToast("dados salvo com sucesso!")
    //             setType(TypeMessageEnum.success)
    //         }}
    //         initialValues={client?.user?.contaBancaria || { digitoAgencia: "0", digitoConta: "0" }}
    //         userId={userId}
    //         username={client?.user?.username || ""} />)
    // }
    
    useEffect(() => {
        clientService.findByUserID(userId)
            .then(res => {
                setClient(res.data)
            }).catch(err => {
                const message = getResponseError(err)
                showToast(message)
                setType(TypeMessageEnum.error)
            })
    }, [])

    return (
        <div className="container mx-auto my-40">
            <div>
                <div className="bg-white relative shadow rounded-lg w-5/5 md:w-4/5  lg:w-3/6 xl:w-3/6 mx-auto">
                    <div className="flex justify-center">
                        <img src={profileImage} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div className="flex justify-end">
                        <ProfileMenu planId={client?.plan?.id} userId={client?.user?.id}  />
                    </div>
                    <div className="mt-16">
                        <h1 className="font-bold text-center text-3xl text-gray-900">{client?.user?.name}</h1>
                        <p className="text-center text-sm text-gray-400 font-medium">{client?.user?.email}</p>


                        <div className="w-full">
                            <h3 className="font-medium text-gray-900 text-left px-6">Dados Usuário</h3>
                            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    CPF:
                                    <span className="text-gray-500 text-xs"> {client.cpf}</span>
                                </div>
                                <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    Telefone:
                                    <span className="text-gray-500 text-xs"> {client.telefone} </span>
                                </div>

                                <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    Código Indicação:
                                    <span className="text-gray-500 text-xs"> {client?.user?.indicationCode} </span>
                                </div>

                                <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    Plano:
                                    <span className="text-gray-500 text-xs"> {client?.plan?.name} </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center my-5 px-6 pb-3 space-x-3">
                            <BtnPrimary hasIcon={false} text="DADOS BANCÁRIOS" type="button" onClick={() => setOpenPopup(true)} />
                            <BtnPrimary hasIcon={false} onClick={() => onEdit(client)} text="EDITAR DADOS" type="button" />
                            <BindWithInsurance userId={userId} />
                        </div>
                    </div>
                </div>

                <BankFormModal open={openPopup} setOpen={setOpenPopup} />
            </div>
        </div>
    )
}
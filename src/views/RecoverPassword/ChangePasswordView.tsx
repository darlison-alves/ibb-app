import { useState } from "react"
import { RecoverPasswordForm } from "../../components/Forms/RecoverPasswordForm"
import { ClientService } from "../../services/client.service"
import { getResponseError } from "../../utils/tratamento.response-error"
import { randomHash } from "../../utils/validateMaskedInput"

export const ChangePasswordView = () => {
    const clientService = new ClientService()

    const [loading, setLoanding] = useState(false)
    const [responseError, setResponseError] = useState("")
    const [responseSuccess, setResponseSuccess] = useState("")

    const onSubmit = (payload: any) => {
        setLoanding(true)
        setResponseError("")
        setResponseSuccess("");
        clientService.changePassword({ ...payload, hash: randomHash() })
            .then(res => {
                setResponseSuccess("senha alterada com sucesso!")
            }).catch(err => {
                if (err?.response?.status == 401) {
                    setResponseError("senha atual invalida!");
                } else {
                    setResponseError(getResponseError(err));
                }
            }).finally(() => {
                setLoanding(false)
            })
    }

    return (
        <RecoverPasswordForm
            title="Alterar Senha"
            description="redefinição de senha!"
            responseSuccess={responseSuccess}
            hasCurrentPassword={true}
            onSubmit={onSubmit}
            loading={loading}
            responseError={responseError} />
    )
}
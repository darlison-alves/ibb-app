import { useState } from "react"
import { useParams } from "react-router-dom"
import { RecoverPasswordForm } from "../../components/Forms/RecoverPasswordForm"
import { ClientService } from "../../services/client.service"

export const RecoverPasswordView = () => {
    const clientService = new ClientService()

    const { hash } = useParams()

    const [loading, setLoanding] = useState(false)
    const [responseError, setResponseError] = useState("")
    const [responseSuccess, setResponseSuccess] = useState("")

    const onSubmit = (payload: any) => {
        setLoanding(true)
        setResponseError("")
        setResponseSuccess("")
        clientService.recoverPassword({ ...payload, hash })
            .then(res => {
                setResponseSuccess("senha alterada com sucesso!")
            }).catch(err => {
                setResponseError(err?.response?.data?.message || err?.message)
            }).finally(() => {
                setLoanding(false)
            })
    }

    return (
        <RecoverPasswordForm
            title="Recuperar Senha"
            description="Redefinição de senha!"
            responseSuccess={responseSuccess}
            hasCurrentPassword={false}
            onSubmit={onSubmit}
            loading={loading}
            responseError={responseError} />
    )
}
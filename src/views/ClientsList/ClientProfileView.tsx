import { useNavigate, useParams } from "react-router-dom"
import { ProfileClient } from "../../components/Profile/Profile.Client"
import { IClientUser } from "../../interfaces/clientUser.iterface"


export const ClientProfileView = () => {
    const { user_id } = useParams()
    const navigate = useNavigate()
    return (
        <ProfileClient userId={user_id} onEdit={(client: IClientUser) => {
            navigate('/clients/new', { state: client })
        }} />
    )
}
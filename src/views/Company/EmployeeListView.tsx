import { useContext, useEffect, useState } from "react";
import { EmployeeTable } from "../../components/Employee/EmployeeTable"
import { EmployeeForm } from "../../components/Forms/Employee.Form";
import { ModalContext } from "../../context/ModalContext";
import { useGetInfoUser } from "../../hooks/useGetInfoUser";
import { ClientService } from "../../services/client.service";
import { CompanyService } from "../../services/company.service"
import { useNavigate } from "react-router-dom";

export const EmployeeListView = () => {

    const companyService = new CompanyService();
    const clientService = new ClientService()

    const [loading, setLoading] = useState(false);
    const [employees, setEmployees] = useState([])
    const { setOpen, setTitle, setComponet } = useContext(ModalContext)

    const { user } = useGetInfoUser()
    const navigate = useNavigate();

    const onEdit = (employee: any) => {
        navigate('/clients/new', { state: employee })
    }


    useEffect(() => {
        setLoading(true)
        const { companyId } = user
        if (companyId) {
            companyService.findEmployeeByCompanyId(companyId)
                .then(res => {
                    setEmployees(res.data)
                }).finally(() => {
                    setLoading(false)
                })
        }
    }, [user])

    return (
        <EmployeeTable employees={employees} onEdit={onEdit} />
    )
}
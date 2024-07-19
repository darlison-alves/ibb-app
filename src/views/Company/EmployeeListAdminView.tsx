import { useContext, useEffect, useState } from "react";
import { EmployeeTable } from "../../components/Employee/EmployeeTable"
import { EmployeeForm } from "../../components/Forms/Employee.Form";
import { ModalContext } from "../../context/ModalContext";
import { ClientService } from "../../services/client.service";
import { CompanyService } from "../../services/company.service"
import { useNavigate, useParams } from "react-router-dom";

export const EmployeeListAdminView = () => {

    const companyService = new CompanyService();
    const clientService = new ClientService()

    const [loading, setLoading] = useState(false);
    const [employees, setEmployees] = useState([])
    const { setOpen, setTitle, setComponet } = useContext(ModalContext)

    const { company_id = "" } = useParams();
    const navigate = useNavigate();

    const onEdit = (employee: any) => {
        navigate('/clients/new', { state: employee })
    }

    useEffect(() => {
        setLoading(true)
        if (company_id) {
            companyService.findEmployeeByCompanyId(company_id)
                .then(res => {
                    setEmployees(res.data)
                }).finally(() => {
                    setLoading(false)
                })
        }
    }, [])

    return (
        <EmployeeTable employees={employees} onEdit={onEdit} />
    )
}
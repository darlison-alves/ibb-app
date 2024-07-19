import { useContext, useEffect, useState } from "react"
import { CompanyClientForm } from "../../components/Forms/CompanyClient.Form"
import { api } from "../../config/axios.base"
import { ToastContext } from "../../context/ToastContext"
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum"
import { CompanyService } from "../../services/company.service"
import { initialDataCompanyClient } from "../../utils/payloads.utils"
import { getResponseError } from "../../utils/tratamento.response-error"
import { ICategory } from "./interface"
import { useNavigate } from "react-router-dom"

export const CompanyClientFormView = () => {
  const companyService = new CompanyService();
  const [categories, setCategories] = useState<Array<ICategory>>([])
  const [employees, setEmployees] = useState<any>([])
  const { showToastMessange } = useContext(ToastContext);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate()

  useEffect(() => {
    api().get('/empresa/categorias')
      .then(res => {
        setCategories(res.data)
      }).catch(err => {
        console.log('err category', err)
      })
  }, [])


  const addEmployee = (data: any) => {
    setEmployees([...employees, data])
  }

  const onSubmit = (data: any) => {
    setLoading(true)
    companyService.createWithEmployee({ ...data, employees })
      .then((res) => {
        console.log('res', res.data)
        showToastMessange("empresa cadastrada com sucesso", TypeMessageEnum.success)

        navigate(`${res.data.id}`)

      }).catch(err => {
        const message = getResponseError(err)
        showToastMessange(message, TypeMessageEnum.error)
      }).finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="sm:flex">
      <CompanyClientForm
        onSubmit={onSubmit}
        initialValues={initialDataCompanyClient}
        categories={categories}
        addEmployee={addEmployee}
        employees={employees}
        isSubmited={loading}
      />

    </div>
  )
}
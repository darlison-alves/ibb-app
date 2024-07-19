import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { EmployeeOperationTypeEnum } from "../../common/enums/employee.operation.type.enum"
import { ButtonCustom } from "../../components/Button/Button"
import { EmployeeTable } from "../../components/Employee/EmployeeTable"
import { CompanyClientForm } from "../../components/Forms/CompanyClient.Form"
import { EmployeeForm } from "../../components/Forms/Employee.Form"
import { api } from "../../config/axios.base"
import { ModalContext } from "../../context/ModalContext"
import { ToastContext } from "../../context/ToastContext"
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum"
import { CompanyService } from "../../services/company.service"
import { initialDataCompanyClient } from "../../utils/payloads.utils"
import { getResponseError } from "../../utils/tratamento.response-error"
import { ICategory } from "./interface"

export const CompanyClientFormEditView = () => {
  const companyService = new CompanyService();

  const [categories, setCategories] = useState<Array<ICategory>>([])
  const [employees, setEmployees] = useState<any>([])
  const [newEmployees, setNewEmployees] = useState<Array<any>>([])
  const { showToastMessange } = useContext(ToastContext)
  const [company, setCompany] = useState<any>(initialDataCompanyClient);
  const { setTitle, setOpen, setComponet, open } = useContext(ModalContext);

  const [loading_employee, setLoadingEmployee] = useState(false);
  const [viewListEmployee, setViewListEmployee] = useState(false);
  const [loading, setLoading] = useState(false);

  const [employeesDTO, setEmployeeDTO] = useState<Map<any, object>>(new Map())

  const { company_id = "" } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    getPayload()
  }, [])

  const onLoadCompany = () => {
    companyService.findById(company_id).then(res => {
      setCompany((old: any) => ({ ...old, ...res.data }))
    })
  }

  const getPayload = async () => {
    setLoading(true)
    setNewEmployees([])
    const [categories, company, p_employees] = await Promise.all([
      api().get('/empresa/categorias'),
      companyService.findById(company_id),
      companyService.findEmployeeByCompanyId(company_id)
    ])
    setCategories(categories.data)
    setCompany((old: any) => ({ ...old, ...company.data }))
    setEmployees(p_employees.data)
    setLoading(false)
  }

  const addEmployee = (data: any) => {
    setEmployees([...employees, data])
  }

  const onSubmit = (data: any) => {
    setLoading(true)
    companyService.update({ ...data, employees })
      .then(() => {
        showToastMessange("empresa salva com sucesso", TypeMessageEnum.success);
        setViewListEmployee(true);
      }).catch(err => {
        const message = getResponseError(err)
        showToastMessange(message, TypeMessageEnum.error)
      }).finally(() => {
        setLoading(false);
      })
  }

  const addEmployeeModal = (employee: any) => {
    setOpen(true)
    setTitle('Adiciona Funcionário')
    setComponet(<EmployeeForm initiValues={employee} onSubmit={(data: any) => {
      const payload = {
        ...data,
        operationType: EmployeeOperationTypeEnum.ADD,
        user: {
          name: data.nome,
          email: data.email,
        }
      }
      setNewEmployees([...newEmployees, payload])

      employeesDTO.set(payload.id, { ...payload, operationType: EmployeeOperationTypeEnum.ADD })
      setOpen(false)
    }} />)
  }

  const onEdit = (employee: any) => {
    navigate('/clients/new', { state: employee })
}

  const onSave = () => {
    setLoadingEmployee(true);
    const arr = Array.from(employeesDTO.values());
    companyService.createEmployees(arr, company_id)
      .then(res => {
        showToastMessange(res.data.message, TypeMessageEnum.success)
        getPayload()
      }).catch(err => {
        const message = getResponseError(err)
        showToastMessange(message, TypeMessageEnum.error)
      }).finally(() => {
        setLoadingEmployee(false)
      })
  }

  const onRemove = (employee: any, operationType: EmployeeOperationTypeEnum) => {
    if(operationType == EmployeeOperationTypeEnum.CANCEL_REMOVE) {
      cancelRemoveEmployee(employee)
    } else {
      removeEmployee(employee)
    }
  }


  const cancelRemoveEmployee = (payload: any) => {
    employees.forEach((emplo: any) => {
      if (payload.id === emplo.id)
        emplo.operationType = EmployeeOperationTypeEnum.CANCEL_REMOVE
    });

    setEmployees(() => ([...employees]));

    employeesDTO.delete(payload.id);
  }

  const removeEmployee = (payload: any) => {
    employees.forEach((emplo: any) => {
      if (payload.id === emplo.id)
        emplo.operationType = "REMOVE"
    });

    setEmployees(() => ([...employees]));

    employeesDTO.set(payload.id, { ...payload, operationType: "REMOVE" });

    // setRemoveEmployees((old: any) => ([...old, { ...payload, operationType: "REMOVE" }]));
  }

  return (
    <div className="sm:flex">
      {
        !viewListEmployee && (
          <CompanyClientForm
            textButton="SALVAR E IR PARA FUNCIONARIOS"
            onSubmit={onSubmit}
            initialValues={company}
            categories={categories}
            addEmployee={addEmployee}
            employees={employees}
            isEdit={true}
            isSubmited={loading}
          />
        )
      }

      {
        viewListEmployee && (
          <div className="max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md mt-5" >
            <ButtonCustom
              onClick={() => {
                setViewListEmployee(false);
                onLoadCompany();
              }}
              text="Voltar"
              type="button" className="mr-2 mb-2 p-2 bg-primary text-sm " />
            <EmployeeTable
              loading={loading}
              employees={employees.concat(newEmployees)}
              saveAll={true}
              onEdit={(employee) => onEdit(employee)}
              onAdd={(employee) => addEmployeeModal(employee)}
              onRemove={(employee, operationType) => onRemove(employee, operationType)}
              loadingSave={loading_employee}
              enableOnsave={!employeesDTO.size}
              onSave={() => {
                onSave()
              }}
            />
          </div>
        )
      }

    </div>
  )
}
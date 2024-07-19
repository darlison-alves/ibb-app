import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button, ButtonPrimary } from "../Button/Button";
import { StepsTitle } from "../StepsTitle/StepsTitle"
import { CompanyBaseForm, ICompanyForm } from "./Company.Form"
import { ICategory } from "../../views/Company/interface";
import { Input } from "../Input/Input";
import { MaskedInput } from "../InputMask/InputMask";
import { SelectActivateUser } from "../Select/Select.Activate";
import { SelectPlans } from "../Select/Select.Plans";
import { AddressForm } from "./Address.Form";
import { AnswerableForm, IAnswerable } from "./Answerable.Form";
import { PasswordForm } from "./Password.Form";
import { CheckBox } from "../CheckBox/checkbox.form";
import { IAddress } from "../../interfaces/address.interface";
import { initialDataCompanyClient } from "../../utils/payloads.utils";
import { ModalContext } from "../../context/ModalContext";
import { EmployeeForm } from "./Employee.Form";

import { EmployeeItem } from "../Employee/EmployeeItem";
import { PlanForm } from "./Plan.Form";

import plusAdd from "../../assets/svgs/circled-plus.svg";
import { Tooltip } from "../Tooltip/ToolTip";

interface ICompanyClient extends ICompanyForm {
  planId: number;
  telefone?: string;
  celular?: string;
  endereco?: IAddress;
  comissao?: number | null;
  retencao?: number | null;
  politicaPrivacidade: boolean;
  aceiteTermos: boolean;
  aceiteContratoAdesao: boolean
  responsavel?: IAnswerable;
  repassword: string;
  password: string;
  username: string;
}


interface ICompanyClientFormProps {
  categories: Array<ICategory>;
  initialValues: ICompanyClient;
  addEmployee: Function;
  onSubmit: Function;
  employees: Array<any>;
  isEdit?: boolean;
  textButton?: string;
  isSubmited?: boolean;
}

export const CompanyClientForm = ({
  onSubmit,
  categories = [],
  initialValues = initialDataCompanyClient,
  addEmployee = () => { },
  employees = [],
  isEdit = false,
  textButton = "SALVAR E IR PARA FUNCIONARIOS",
  isSubmited = false
}: ICompanyClientFormProps) => {

  const [loadingPlans, setLoadingPlans] = useState(false)
  const { setTitle, setOpen, setComponet, open } = useContext(ModalContext)

  useEffect(() => {
    setLoadingPlans(open);
  }, [open])

  const formik = useFormik<ICompanyClient>({
    initialValues: {
      ...initialValues,
    },
    onSubmit: (values) => {
      onSubmit(values)
    }
  })

  useEffect(() => {
    formik.setValues({
      ...initialValues,
    })
  }, [initialValues])

  const addPlan = () => {
    setOpen(true)
    setTitle('')
    setComponet(<PlanForm onAfterCreate={() => {
      setOpen(false);
    }} />)
  }

  const addEmployeeModal = () => {
    setOpen(true)
    setTitle('Adiciona Funcionário')
    setComponet(<EmployeeForm initiValues={{}} onSubmit={(data: any) => {
      addEmployee(data)
      setOpen(false)
    }} />)
  }


  const listEmployeeModal = () => {
    setOpen(true)
    setTitle('Lista Funcionário')
    setComponet(
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 mt-5 sm:w-[50%] mr-5">
        {employees.map((employee: any) => <EmployeeItem employee={employee} />)}
      </ul>
    )
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 rounded-md mt-5"
    >
      <section>
        <div className="flex justify-between" >
          <StepsTitle step="1" title="Dados Empresa" />

          {/* <div className="relative">
            <img
              onClick={() => { addEmployeeModal() }}
              src={personAdd} width={40} className="cursor-pointer rounded-full w-10 h-10 p-1 ring-2 ring-primary-v1 dark:ring-primary-500s">
            </img>
            <div onClick={() => listEmployeeModal()} className=" cursor-pointer absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{employees.length}</div>
          </div> */}
        </div>

        <p className="text-base font-light my-3">
          Digite os dados da empresa abaixo.
        </p>

        <CompanyBaseForm
          categories={categories}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          values={formik.values} />

      </section>

      <section>
        <StepsTitle step="2" title="Dados Configuração" />
        <div className="grid md:grid-cols-3 grid-cols-1 my-4 gap-4">
          <Input
            required={false}
            name="retencao"
            placeholder="Retenção indicação dos funcionários"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.retencao}
            focusPlaceholder="Retenção em % das indicações"
          />

          <MaskedInput
            name="telefone"
            error={false}
            mask="(99)9 9999-9999"
            placeholder="Telefone"
            onChange={formik.handleChange}
            value={formik.values.telefone}
            type="text"
            focusPlaceholder="telefone"
          />

          <MaskedInput
            name="celular"
            error={false}
            mask="(99)9 9999-9999"
            placeholder="Celular"
            onChange={formik.handleChange}
            value={formik.values.celular}
            type="text"
            focusPlaceholder="celular"
          />
        </div>
      </section>
      <section>
        <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
          <Input
            name="user.email"
            placeholder="Insira um email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.user.email}
            focusPlaceholder="email"
          />
          <SelectActivateUser value={formik.values?.user?.active} onChange={(value: boolean) => { formik.setFieldValue('user.active', value) }} />
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">

          {
            !loadingPlans &&
                <SelectPlans id={"select-plan"} disabled={isEdit} value={formik.values.planId} onChange={(evt: any) => {
                  formik.setFieldValue('planId', evt.target.value)
                }} />              
          }

          <Tooltip id={"create-plan"} message="Criar Novo Plano" >
            <img
              id="create-plan"
              onClick={() => {
                addPlan()
              }}
              src={plusAdd} width={40} className="cursor-pointer w-10 h-10 p-1">
            </img>
          </Tooltip>
        </div>
      </section>
      <section>
        <StepsTitle step="3" title="Dados Endereço" />
        <div className="my-4">
          <AddressForm errors={[]} setErrors={() => { }} initiValues={initialValues?.endereco || {}} onChange={(add: any) => formik.setFieldValue("endereco", add)} />
        </div>
      </section>

      <section>
        <StepsTitle step="4" title="Dados Responsável" />
        <div className="my-4">
          <AnswerableForm initialValues={initialValues.responsavel} onChange={(answearable: any) => formik.setFieldValue("responsavel", answearable)} />
        </div>
      </section>

      <section>
        <StepsTitle step="5" title="Definir Senha" />
        <PasswordForm handleChange={formik.handleChange} password={formik.values.password} repassword={formik.values.repassword} />
      </section>

      <section>
        <div className="flex my-4 justify-between">
          <CheckBox
            name="politicaPrivacidade"
            htmlFor="politicaPrivacidade"
            onChange={formik.handleChange}
            description="Politica de Privacidade"
            checked={formik.values.politicaPrivacidade}
          />
          <CheckBox name="aceiteTermos" htmlFor="aceiteTermos" onChange={formik.handleChange} description="Termos de uso" checked={formik.values.aceiteTermos} />
          <CheckBox name="aceiteContratoAdesao" htmlFor="aceiteContratoAdesao" onChange={formik.handleChange} description="Contrato de adesão" checked={formik.values.aceiteContratoAdesao} />
        </div>
      </section>

      <section className='my-3' >

        {isSubmited ? (<button
          type="button"
          className="bg-[#f3c2a0] text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md disabled:opacity-50"
          disabled={isSubmited}
        >
          Processando...
          <AiOutlineLoading3Quarters className="animate-spin" />
        </button>) : <Button type="submit" text={textButton} hasIcon={false} />}

      </section>
    </form>
  )
}
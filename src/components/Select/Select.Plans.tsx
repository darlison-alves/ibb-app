import { useEffect } from "react"
import { useState } from "react"
import { IPlan } from "../../interfaces/plan.interface"
import { PlanService } from "../../services/plan.service"
import { Loading } from "../Loading/loading.full.compoment"

interface ISelectBanksProps {
  id?: string;
  value?: any,
  onChange: any,
  loadingState?: boolean;
  disabled?: boolean
}

const planService = new PlanService()


export const SelectPlans = ({ value, onChange, disabled = false, id }: ISelectBanksProps) => {

  const [plans, setPlans] = useState<Array<IPlan>>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    planService.findAll("excludeField=principal")
      .then(res => {
        setPlans(res.data)
      }).catch(err => {
        const { response = {} } = err;
        const { data = {} } = response;
        const { message = 'error inesperado aconteceu!' } = data;
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      {loading && (
        <div className="flex justify-center align-center">
          <Loading size={4} />
        </div>
      )}
      {!loading && (
        <select
          id={id}
          disabled={disabled}
          name="planoId"
          aria-placeholder="Selecione um plano"
          onChange={onChange}
          value={value}
          className={`isFocus px-3 py-3 text-base font-semibold text-secondary border rounded-[4px] w-full placeholder:text-secondary placeholder:text-base focus:outline-none border-[#CED4DA]  transition-colors`}
        >
          <option value={''}>Selecione Plano</option>
          {
            plans.map(plan => (<option key={plan.id} value={plan.id}>R${plan.price} - {plan.name}</option>))
          }
        </select>
      )}
    </>

  )
}
import { useEffect, useState } from "react"
import { IBenefit } from "../../interfaces/plan.interface"
import { PlanService } from "../../services/plan.service"

interface ISelectBenefitsPlan {
  value?: string,
  onChange: any
}

const planService = new PlanService()

export const SelectBenefitsPlan = ({ value, onChange }: ISelectBenefitsPlan) => {

  const [benefits, setBenefits] = useState<Array<IBenefit>>([])

  useEffect(() => {
    planService.getBenefits()
      .then(res => {
        setBenefits(res.data)
      })
  }, [])

  return (
    <select
      name="benefit_id"
      onChange={onChange}
      // placeholder="Selecione Beneficio"
      value={value}
      className={`px-3 py-3 text-base font-semibold text-secondary border rounded-[4px] w-full placeholder:text-secondary transition-colors placeholder:text-base focus:outline-none focus:ring-2`}
    >
      <option value={''}>Selecione um beneficio</option>
      {
        benefits.map(benefit => <option key={benefit.id} value={benefit.id}>{benefit.name}</option>)
      }
    </select>
  )
}
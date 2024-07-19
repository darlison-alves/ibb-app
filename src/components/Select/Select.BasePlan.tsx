import { BasePlan } from "../../interfaces/plan.interface"

interface ISelectBasePlan {
  value?: BasePlan,
  onChange: any
}

export const SelectBasePlan = ({ value, onChange }: ISelectBasePlan) => {

  return (
    <select
      name="tag"
      onChange={onChange}
      // aria-placeholder="Selecione tipo conta"
      value={value}
      className={`px-3 py-3 text-base font-semibold text-secondary border rounded-[4px] w-full placeholder:text-secondary transition-colors placeholder:text-base focus:outline-none focus:ring-2`}
    > 
      <option value={''}>Selecione um plano base</option>
      <option value={BasePlan.PROTECAO_COMPACTA}>PROTECAO COMPACTA</option>
      <option value={BasePlan.PROTECAO_ESPECIAL}>PROTECAO ESPECIAL</option>
      <option value={BasePlan.PROTECAO_ESSENCIAL}>PROTECAO ESSENCIAL</option>
      <option value={BasePlan.PROTECAO_FAMILIAR_GOLD}>PROTECAO FAMILIAR GOLD</option>
      <option value={BasePlan.PROTECAO_FAMILIAR_PREMIUM}>PROTECAO FAMILIAR PREMIUM</option>
    </select>
  )
}
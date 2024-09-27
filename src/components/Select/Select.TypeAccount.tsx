import { Select } from "antd"
import { BankAccountType } from "../../interfaces/bank.interface"

interface ISelectAccountType {
  value?: BankAccountType,
  onChange: any
}

export const SelectAccountType = ({ value, onChange }: ISelectAccountType) => {

  return (
    <Select
        placeholder="Selecione tipo conta"
        style={{ flex: 1 }}
        options={[
          { value: BankAccountType.CONTA_CORRENTE, label: 'Conta Corrente' },
          { value: BankAccountType.CONTA_POUPANCA, label: 'Conta Poupança' },
        ]}
      />
    
    // <select
    //   name="tipo"
    //   onChange={onChange}
    //   arai-placeholder="Selecione tipo conta"
    //   value={value}
    //   className={`px-3 py-3 text-base font-semibold text-secondary border rounded-[4px] w-full placeholder:text-secondary transition-colors placeholder:text-base focus:outline-none focus:ring-2`}
    // > 
    //   <option value={''}>Selecione tipo conta</option>
    //   <option value={BankAccountType.CONTA_CORRENTE}>Conta Corrente</option>
    //   <option value={BankAccountType.CONTA_POUPANCA}>Conta Poupança</option>
    // </select>
  )
}
import { useEffect } from "react"
import { useState } from "react"
import { api } from "../../config/axios.base"
import { IBank } from "../../interfaces/bank.interface"
import { Select } from "antd"

interface ISelectBanksProps {
  bank?: any,
  onChange: any
}

export const SelectBanks = ({ bank, onChange }: ISelectBanksProps) => {

  const [banks, setBanks] = useState<Array<IBank>>([])

  useEffect(() => {
    api().get('/banking-institution')
      .then(res => {
        setBanks( res.data.map((b: any) => ({ value: b.codigo, label: b.nome })) )
      }).catch(err => {
        const { response = {} } = err;
        const { data = {} } = response;
        const { message = 'error inesperado aconteceu!' } = data;
        console.log('message', message)
      })
  }, [])

  return (
    <Select
      showSearch
      value={bank.codigo}
      defaultValue={bank}
      style={{ width: 200 }}
      placeholder="Selecione seu banco"
      optionFilterProp="label"
      onChange={(_, option) => { onChange(option) }}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={banks}
    />
  );
}
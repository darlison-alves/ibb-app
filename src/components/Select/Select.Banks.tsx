import { useEffect } from "react"
import { useState } from "react"
import { api } from "../../config/axios.base"
import { IBank } from "../../interfaces/bank.interface"
import { SelectSearch } from "./Select.search"

interface ISelectBanksProps {
  bank?: any,
  onChange: any
}

export const SelectBanks = ({ bank, onChange }: ISelectBanksProps) => {

  const [banks, setBanks] = useState<Array<IBank>>([])

  useEffect(() => {
    api().get('/banking-institution')
      .then(res => {
        setBanks(res.data)
      }).catch(err => {
        const { response = {} } = err;
        const { data = {} } = response;
        const { message = 'error inesperado aconteceu!' } = data;
        console.log('message', message)
      })
  }, [])

  return (
    <SelectSearch options={banks} onChange={onChange} objectValue={bank} />
  )
}
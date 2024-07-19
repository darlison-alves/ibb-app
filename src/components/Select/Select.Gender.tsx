interface ISelectGender {
  value: any,
  onChange: any
}

export const SelectGender = ({ value, onChange }: ISelectGender) => {

  const onChangeHandle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <select
      onChange={onChangeHandle}
      value={value}
      className={`px-3 py-3 text-base font-semibold text-secondary border rounded-[4px] w-full placeholder:text-secondary transition-colors placeholder:text-base focus:outline-none focus:ring-2`}
    >
      <option value="">Selecione Sexo</option>
      <option value="M">Masculino</option>
      <option value="F">Feminio</option>
      <option value="O">Outros</option>
    </select>
  )
}
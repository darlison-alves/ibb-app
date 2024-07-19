import { useEffect } from "react"
import smask from "smask";

interface IInputCurrencyProps {
  setValue: Function,
  focusPlaceholder: string
}

export const InputCurrency = ({ setValue = () => { }, focusPlaceholder }: IInputCurrencyProps) => {

  useEffect(() => {
    const element: any = document.getElementById("currency")

    if (element) {
      element.addEventListener("keyup", (event: any) => {
        if(event.target.value && event.target.value.includes('R')) {
          setValue(smask.currencyUnformat(event.target.value, 'pt-BR', 'BRL'))
        } else {
          setValue(smask.currencyUnformat(event.target.value, 'en-US', 'USD'))
        }
      })
      
      smask.input(element, ["currency"]);
      smask.prepareMaskInputs();
    }
  }, [])

  return (
    <div className="relative w-full">
      <input
        id="currency"
        name="currency"
        type="tel"
        className="isFocus pr-3 pl-10 py-3 text-base font-semibold text-secondary border rounded-[4px] w-full placeholder:text-secondary placeholder:text-base focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
        inputMode="numeric"
      />
      <span className="text-primary text-xs absolute top-[-10px] px-2 bg-white transition left-5">{focusPlaceholder}</span>
    </div>

  )
}
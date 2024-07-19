import React from "react"
import { OrderWayEnum } from "../../interfaces/payment.interface"
import { descriptionPaymentMethod } from "../../utils/descriptionPaymentMethod";

export const ChoosePaymentMethod = ({ onChange = (orderWay: OrderWayEnum) => {  } }) => {  

  const [isChecked, setIsChecked] = React.useState(false);
  const [methodPayment, setMethodPayment] = React.useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.id as OrderWayEnum)
    setMethodPayment(evt.target.id)
    setIsChecked(!isChecked)
  }

  if(isChecked) {
    return (
      <div className="flex">
        <p className="mb-5 text-sm font-medium text-gray-900 dark:text-white">Forma de Pagamento:</p>
        <p onClick={() => {
          setIsChecked(false)
          onChange(OrderWayEnum.NOT)
        }} style={{ cursor: 'pointer' }} className="ml-1 mb-5 text-sm font-medium text-blue-900 dark:text-white font-bold">
            {descriptionPaymentMethod[methodPayment]}
        </p>
      </div>
    )
  }

  return (
    <>
      <h3 className="mb-5 text-xs font-medium text-gray-900 dark:text-white">Qual Forma de Pagamento?</h3>
      <ul className="grid gap-6 w-full md:grid-cols-2">
        <li>
          <input onChange={handleChange} type="radio" id={OrderWayEnum.CC} name="orderWay" value="hosting-small" className="hidden peer" />
            <label htmlFor={OrderWayEnum.CC} className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-sm font-semibold">Cartão Crédito</div>
                <div className="w-full text-xs">Forma de pagamento Cartão de crédito</div>
              </div>
              <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </label>
        </li>
        <li>
          <input onChange={handleChange} type="radio" id={OrderWayEnum.CD} name="orderWay" value="hosting-small" className="hidden peer" />
            <label htmlFor={OrderWayEnum.CD} className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-sm font-semibold">Cartão Débito</div>
                <div className="w-full text-xs">Forma de pagamento Cartão de Débito</div>
              </div>
              <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </label>
        </li>
        <li>
          <input onChange={handleChange} type="radio" id={OrderWayEnum.BOL} name="orderWay" value="hosting-big" className="hidden peer" />
            <label htmlFor={OrderWayEnum.BOL} className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-sm font-semibold">Boleto Bancário</div>
                <div className="w-full text-xs">Forma de pagamento boleto bancário</div>
              </div>
              <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </label>
        </li>
        <li>
          <input onChange={handleChange} type="radio" id={OrderWayEnum.PIX} name="orderWay" value="hosting-big" className="hidden peer" />
            <label htmlFor={OrderWayEnum.PIX} className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-sm font-semibold">PIX</div>
                <div className="w-full text-xs">Forma de pagamento pix</div>
              </div>
              <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </label>
        </li>
        <li>
          <input onChange={handleChange} type="radio" id={OrderWayEnum.IBB} name="orderWay" value="hosting-big" className="hidden peer" />
            <label htmlFor={OrderWayEnum.IBB} className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block">
                <div className="w-full text-sm font-semibold">IBB</div>
                <div className="w-full text-xs">Forma de pagamento IBB</div>
              </div>
              <svg aria-hidden="true" className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </label>
        </li>
      </ul>

    </>
  )
}
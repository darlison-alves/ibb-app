import { EPaymentMethod, translatePaymentEnum } from "../../common/enums/payment.method.enum"
import { useState } from "react"

interface CheckBoxBorderProps {
    paymentMethod: EPaymentMethod,
    onChange: (paymentMethod: EPaymentMethod, action: string) => void,
}

export const CheckBoxBorder = ({ paymentMethod, onChange = (paymentMethod: EPaymentMethod, action: string) => {} }: CheckBoxBorderProps) => {
    
    const [checked, setChecked] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(paymentMethod, event.target.checked ? "add" : "remove");
        setChecked(event.target.checked);
    }
    
    return (
        <div style={{minWidth: '200px'}} className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input onChange={(event) => handleOnChange(event)} checked={checked} id={`bordered-checkbox-${paymentMethod}`} type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor={`bordered-checkbox-${paymentMethod}`} className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">{translatePaymentEnum[paymentMethod]}</label>
        </div>
    )
}
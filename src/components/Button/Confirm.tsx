import { useState } from "react"
import { Button, ButtonSecudary } from "./Button"

export const ConfirmBtn = ({
    onConfirm = (cb: Function) => { },
    onCancel = () => { },
}) => {

    const [loading, setLoading] = useState(false);

    return (
        <div className="flex items-center p-8 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 w-50">
            <Button loading={loading} text="Sim" type="button" onClick={() => {
                setLoading(true)
                onConfirm(() => {
                    setLoading(false)
                })
            }} hasIcon={false}  />
            <ButtonSecudary text="Não" hasIcon={false} onClick={() => onCancel()} type="button" />
        </div>
    )
}
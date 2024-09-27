import { useState } from "react"

export const ConfirmBtn = ({
    onConfirm = (cb: Function) => { },
    onCancel = () => { },
}) => {

    const [loading, setLoading] = useState(false);

    return (

        <div className="grid grid-cols-2 gap-2">
            <div>
                <button 
                    onClick={() => {
                        setLoading(true);
                        onConfirm(() => setLoading(false))
                    }}
                    className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                    sim
                </button>
            </div>
            <div>
                <button onClick={() => onCancel()} className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                    cancelar
                </button> 
            </div>
        </div>

        // <div className="flex items-center p-8 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 w-50">
        //     <Button loading={loading} text="Sim" type="button" onClick={() => {
        //         setLoading(true)
        //         onConfirm(() => {
        //             setLoading(false)
        //         })
        //     }} hasIcon={false}  />
        //     <ButtonSecudary text="Não" hasIcon={false} onClick={() => onCancel()} type="button" />
        // </div>
    )
}
export const Steps = ({ stepIndex = 0 }: { stepIndex: number }) => {
    const position = stepIndex;
    const step = (index: number, title: string, active: boolean = false, isLastItem = false) => {
        const borderActive = active ? "border-blue-600 dark:border-blue-500" : "border-gray-500 dark:border-gray-400"
        const textActive = active ? "text-blue-600 dark:text-blue-500" : "border-gray-500 dark:text-gray-400"

        if (isLastItem)
            return (
                <li className={`flex items-center ${textActive}`}>
                    <span className={`flex ${borderActive} items-center justify-center w-5 h-5 me-2 text-xs border  rounded-full shrink-0`}>
                        {index}
                    </span>
                    {title}
                </li>
            )

        return (
            <li className={` ${textActive} flex items-center`}>
                <span className={`flex ${borderActive}  items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0`}>
                    {index}
                </span>
                <span className="hidden sm:inline-flex sm:ms-2">{title}</span>
                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                </svg>
            </li>
        )
    }

    return (
        <>
            <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white justify-between rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                {step(1, "Dados pessoais", (position == 0))}
                {step(2, "Indicação", (position == 1))}
                {step(3, "Endereço", (position == 2), false)}
                {step(3, "Pagamento", (position == 3), true)}
            </ol>
        </>
    )
}
import { StatusExtractEnum } from "../../interfaces/enums/extract.status"

interface BadgeProps {
    text: string
    color?: string
}

interface IBadgeByStatusProps extends BadgeProps {
    status: StatusExtractEnum;
}

export const Badge = ({ color = "blue", text }: BadgeProps) => {
    return (
        <span className={`inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-600 ring-1 ring-inset ring-${color}-500/10`}>
            {text}
            <button type="button" className={`inline-flex items-center p-1  ms-2 text-sm text-${color}-400 bg-transparent rounded-sm hover:bg-${color}-200 hover:text-${color}-900 dark:hover:bg-${color}-800 dark:hover:text-${color}-300`} data-dismiss-target={`#badge-dismiss-${color}`} aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Remove badge</span>
            </button>
        </span>
    )
}

export const BadgeRed = ({ color = "blue", text }: BadgeProps) => {
    return (
        <span className={`bg-[#fee2e2] text-[#991b1b] text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#7f1d1d] dark:text-[#fca5a5]`}>{text}</span>
    )
}

export const BadgeYellow = ({ color = "yellow", text }: BadgeProps) => {
    return (
        <span className={`bg-[#fef9c3] text-[#854d0e] text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#713f12] dark:text-[#fde047]`}>{text}</span>
    )
}

export const BadgeGreen = ({ color = "yellow", text }: BadgeProps) => {
    return (
        <span className={`bg-[#dcfce7] text-[#166534] text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#14532d] dark:text-[#86efac]`}>{text}</span>
    )
}

export const BadgeBlue = ({ color = "yellow", text }: BadgeProps) => {
    return (
        <span className={`bg-[#dbeafe] text-[#1e40af] text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-[#1e3a8a] dark:text-[#93c5fd]`}>{text}</span>
    )
}

export const BadgeByStatus = ({ text, status }: IBadgeByStatusProps) => {
    switch (status) {
        case StatusExtractEnum.PAGAR:
            return <BadgeRed text={text} color={"red"} />
        case StatusExtractEnum.PENDENTE:
            return <BadgeYellow text={text} color={"yellow"} />
        case StatusExtractEnum.PAGO:
            return <BadgeGreen text={text} color={"green"} />
        default:
            return <BadgeBlue text={text} color={"blue"} />
    }
}
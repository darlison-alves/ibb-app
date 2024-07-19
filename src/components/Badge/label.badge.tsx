import { StatusExtractEnum } from "../../interfaces/enums/extract.status"

interface BadgeProps {
    text: string
    color?: "blue" | "gray" | "red" | "yellow" | "green" | "[#04d361]"
}

interface IBadgeByStatusProps extends BadgeProps {
    status: StatusExtractEnum;
}

export const Badge = ({ color = "blue", text }: BadgeProps) => {
    return (
        <span className={`bg-${color}-100 text-${color}-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300`}>{text}</span>
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
    switch(status) {
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
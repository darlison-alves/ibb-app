import { PropsWithChildren } from "react"

interface TabPanelProps extends PropsWithChildren {
    value: number;
    index: number;
}

export const TabPanel = ({ value, index, children }: TabPanelProps) => {
    
    if(value != index) return <div />
    
    return (
        <div>
            { children }
        </div>
    )
}
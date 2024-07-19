import React from "react"
import { IconType } from "react-icons"
import { FiSend } from "react-icons/fi";
import { Loading } from "../Loading/loading.full.compoment";
interface IconButtonProps {
    Icon: IconType;
    toSend: boolean;
    onSend?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    loading?: boolean;
}

export const IconButton = ({ Icon, toSend = false, onSend = () => { }, onClick = () => { }, loading = false }: IconButtonProps) => {
    return (
        <>
            {
                loading && <Loading size={8} />
            }
            {
                (!toSend && !loading) && <div className="border rounded-full p-3 border-primary-v1 cursor-pointer hover:border-primary-v1-light" onClick={onClick}>
                    <Icon color="#E8BB2F" size={30} />
                </div>
            }

            {
                (toSend && !loading) && <div className="border rounded-full p-3 border-primary-v1 cursor-pointer hover:border-primary-v1-light" onClick={onSend}>
                    <FiSend size={30} color={"#E8BB2F"} />
                </div>
            }
        </>

    )
}
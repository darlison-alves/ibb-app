import { OrderWayEnum } from "../../interfaces/payment.interface"
import { BankSlipInfo } from "./BankSlip.Info"
import { CardInfoPayment } from "./Card.Info"
import { PixInfo } from "./Pix.Info"

interface IBuildInfoPaymentProps{
    paymentInfo: {
        way: OrderWayEnum
    }
}

export const BuildInfoPayment = ({ paymentInfo }: IBuildInfoPaymentProps) => {
    return (
        <>
        {
            OrderWayEnum.BOL === paymentInfo.way && (<BankSlipInfo payment_info={paymentInfo} />)
        }
        {
            OrderWayEnum.CC === paymentInfo.way && (<CardInfoPayment payment_info={paymentInfo} />)
        }
        {
            OrderWayEnum.CD === paymentInfo.way && (<CardInfoPayment payment_info={paymentInfo} />)
        }
        {
            OrderWayEnum.PIX === paymentInfo.way && (<PixInfo payment_info={paymentInfo} />)
        }
        </>
    )
}
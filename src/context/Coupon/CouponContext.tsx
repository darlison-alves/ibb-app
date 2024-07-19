import { createContext, useContext, useState } from "react";
import PaymentForm from "../../components/Payments/Payment.Form";
import { ICoupon } from "../../interfaces/coupon.interface";
import { CupomService } from "../../services/cupom.service";
import { IPaymentStrategy } from "../../services/strategies/payment.strategy";
import { ModalContext } from "../ModalContext";

export const CouponContext = createContext({
    coupon: {},
    setCoupon: (coupon: ICoupon) => { },
    paymentForm: (coupon: ICoupon, cb: any) => { },
    shared: (data: any) => { }
})

export const CouponProvider = ({ children }: any) => {
    const cupomService = new CupomService()
    const [coupon, setCoupon] = useState<ICoupon>({})

    const { setOpen, setComponet, setTitle } = useContext(ModalContext)

    const pay = async (paymentStrategy: IPaymentStrategy, code: string = "", userId: number = 0, success_cb = () => { }) => {
        try {
            const payment_cupom = await cupomService.pay(paymentStrategy, code, userId);
            success_cb()
            return payment_cupom.data
        } catch (error) {
            throw error;
        } finally {
            // setOpen(false)
        }
    }

    const shared = ({ code, email, type }: any) => {
        const link = `${window.location.origin}`
        cupomService.sharedCupom({
            code,
            email,
            type,
            link
        })
    }

    const paymentForm = (current: ICoupon, cb: any) => {
        setCoupon(current)
        setTitle('Pagamento cupom')
        setOpen(true)
        setComponet(<PaymentForm code={current.codigo}
            onSubmit={async (paymentStrategy) => pay(paymentStrategy, current?.codigo, current?.userId, cb)}
            amount={current?.calculated?.amountWithDiscount || 0} product_name={`Cupom: ${current?.codigo}`} />)
    }

    return (
        <CouponContext.Provider value={{ coupon, setCoupon, paymentForm, shared }} >
            {children}
        </CouponContext.Provider>
    )
}
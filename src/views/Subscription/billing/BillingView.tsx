import { useEffect, useState } from "react"
import { EPaymentMethod } from "../../../common/enums/payment.method.enum"
import { CheckBoxBorder } from "../../../components/CheckBox/checkbox.border"
import { ICreateBilling } from "../../../domain/subscription/create.billing";
import { ButtonCustom } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { useLocation } from "react-router-dom";
import { SubscriptionService } from "../../../services/subscription.service";
import { ArrayUtis } from "../../../utils/array.utils";

const subscriptionService = new SubscriptionService();

export const BillingView = () => {

    const location = useLocation()

    const [billing, setBilling] = useState<ICreateBilling>({ paymentMethod: [], recommendationCode: "", userId: location.state.userId });
    const [loading, setLoading] = useState(false)

    const handlePaymentMethod = (paymentMethod: EPaymentMethod, action: string) => {
        const paymentMethods = billing.paymentMethod;
        if (action === "add") {
            paymentMethods.push(paymentMethod)
            setBilling(old => ({ ...old, paymentMethod: paymentMethods }));
            return;
        }

        setBilling(old => ({ ...old, paymentMethod: ArrayUtis.removeItem(paymentMethods, paymentMethod) }));
    }

    const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBilling(old => ({ ...old, recommendationCode: event.target.value }));
    } 

    const handleSubmit = () => {
        setLoading(true);
        subscriptionService.createInvoice(billing)
            .then(response => {
                console.log('response', response.data)
            }).finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        console.log('[passou aqui]')
    }, [])

    return (
        <div className="flex flex-col bg-white p-5 items-center">
            <p className="flex justify-center py-2 text-gray-500">Forma de pagamento permitidas:</p>
            <div className="md:flex md:space-x-12 justify-center">
                <CheckBoxBorder paymentMethod={EPaymentMethod.BOL} onChange={handlePaymentMethod} />
                <CheckBoxBorder paymentMethod={EPaymentMethod.PIX} onChange={handlePaymentMethod} />
                <CheckBoxBorder paymentMethod={EPaymentMethod.CC} onChange={handlePaymentMethod} />
            </div>

            <div className="mt-5">
                <p className="flex justify-center py-2 text-gray-500">código de Indicação caso seja indicação:</p>
                <Input 
                    value={billing.recommendationCode}
                    onChange={handleChangeCode}
                    type="text" 
                    placeholder="Código indicação" focusPlaceholder="Código indicação" />
            </div>
            <ButtonCustom onClick={handleSubmit} loading={loading} disabled={loading} text="Criar cobrança" type="button" className="bg-primary p-2 md:w-[200px] mt-5" />
        </div>
    )
}
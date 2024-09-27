import { useNavigate, useParams } from "react-router-dom";
import { SubscriptionService } from "../../services/subscription.service";
import { memo, useCallback, useEffect, useState } from "react";

import backArrow from '../../assets/svgs/back-svgrepo-com.svg'
import { OrderSubscription } from "./Order";
import { Button } from "../../components/Button/Button";
import { IconButton } from "../../components/Button/IconButton";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const subscriptionService = new SubscriptionService()

const SubscriptionDetail = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    const [subscription, setSubscription] = useState<any>({});
    const [orders, setOrders] = useState<Array<any>>([]);
    
    const handleFindSubscription = async () => {
        try {
            const response = await subscriptionService.findByUserId(userId);
            setSubscription(response.data);
        } catch (error) {
            
        }
    }

    const handleLoadingOrder = async () => {
        const response = await subscriptionService.findAllOrdersByUserId(userId);
        setOrders(response.data.content)
    }

    const loadingPage = useCallback(() => {
        console.log('userId', userId);
    }, [userId])

    useEffect(() => {
        loadingPage()

        handleFindSubscription();
        handleLoadingOrder()
    }, []);

    return (
        <div className="bg-white mx-2 mt-2 p-3">
            
            <div className="flex justify-between">
                <div className="w-6 m-2" onClick={() => navigate(-1)}>
                    <img src={backArrow} />                
                </div>
                <div className="w-14">
                    <IconButton Icon={FaMoneyBillTransfer} toSend={false} />
                </div>
            </div>
            <div className="mt-4 flex flex-col space-y-3">
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Plano </label>
                    <label className="text-sm font-bold text-gray-500">{subscription.plano}</label>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Valor </label>
                    <label className="text-sm font-bold text-gray-500">R$ {subscription.price}</label>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-bold">Usuário </label>
                    <label className="text-sm font-bold text-gray-500">{subscription.userName}</label>
                </div>
                
            </div>

            {orders && <OrderSubscription orders={orders} />}
        </div>
    )
}

export default memo(SubscriptionDetail)

import { api } from "../config/axios.base";
import { ICreateBilling } from "../domain/subscription/create.billing";

export class SubscriptionService {
    findByUserId(userId: any) {
        return api().get(`/subscriptions/users/${userId}`);
    }

    findAll(params: any) {
        return api().get("/subscriptions", {
            params: params
        });
    }

    cancel(subscription_id: number) {
        return api().post(`/subscriptions/${subscription_id}/cancel`);
    }

    findAllOrdersByUserId(userId: any) {
        return api().get(`/orders/users/${userId}`)
    }

    createInvoice(payload: ICreateBilling) {
        return api().post("/subscriptions/invoices", payload);
    }
}
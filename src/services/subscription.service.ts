import { api } from "../config/axios.base";

export class SubscriptionService {
    findAll(params: any) {
        return api().get("/subscriptions", {
            params: params
        });
    }

    cancel(subscription_id: number) {
        return api().post(`/subscriptions/${subscription_id}/cancel`);
    }
}
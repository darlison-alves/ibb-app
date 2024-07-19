import { api } from "../config/axios.base";

export class LifeInsuranceService {
    async createInsurance(userId: number) {
        return api().post(`/life-insurance/users/${userId}/contracts`)
    }

    async getInsurance(userId: number) {
        return api().get(`/life-insurance/users/${userId}`)
    }

    async cancel(operationId: number) {
        return api().put(`/life-insurance/${operationId}/cancel`)
    }
}
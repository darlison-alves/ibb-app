import { api } from "../config/axios.base";

export class PlanService {

    async create(data: any) {
        return api().post('/plans', {
            Name: data.name,
            Amount: data.amount,
            tag: data.tag,
            principal: data.principal
        })
    }

    async findAll(query: string = "") {
        return api().get('/plans?' + query)
    }

    async findPromo(query: string = "") {
        return api().get('/plans/promotions')
    }

    async disable(plan_id: number) {
        return api().put(`/plans/${plan_id}`)
    }

    async addBenefit(data:any) {
        return api().post(`/plans/benefits`, data)
    }

    async addRelatBenfit(plan_id: number, benefit_id: string) {
        return api().put(`/plans/${plan_id}/benefits/${benefit_id}`)
    }

    async getBenefits() {
        return api().get(`/plans/benefits`)
    }
}
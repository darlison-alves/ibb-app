import { api } from "../config/axios.base";

export class PunctualIncomeService {
    async findAll(page: number = 1, size: number = 10, name = "") {
        return api().get('/transactions/renda-pontual/list', { params: { page, size, name } })
    }

    async pay() {
        
    }
}
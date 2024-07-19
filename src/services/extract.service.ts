import { api } from "../config/axios.base";

export class ExtractService {
    async getMyExtracts(filters: any = {}) {
        return api().get('/extrato/me', { params: filters })
    }
}
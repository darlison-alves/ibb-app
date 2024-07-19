import { api } from "../config/axios.base";

export class RecommendationService {
    async getRecommendationOfUsers ({ associado = "", page = 0, size = 10}) {
        return api().get('/transactions/relatorio/indicacao', { params: { associado, page, size } })
    }
}
import { api } from "../config/axios.base";

export class DocumentService {
    async downloadCertificate() {
        return api().get('/pdf/plan/certificate/me', {
            responseType: "blob",
        })
    }

    async downloadAdhesion() {
        return api().get('/pdf/adesao', {
            responseType: "blob",
        })
    }
}
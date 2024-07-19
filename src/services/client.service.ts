import { api } from "../config/axios.base";

export class ClientService {
  async update(data: any ) {
    return api().put("/clients", data)
  }

  async create(data: any ) {
    return api().post("/clients", data)
  }

  async findByUserID(userId: any) {
    return api().get(`/clients/users/${userId}`)
  }

  async recoverPassword(payload: any) {
    return api().put('/auth/change-password', payload)
  }

  async changePassword(payload: any) {
    return api().put('/users/change-password', payload)
  }

  async createPreUser(data: any) {
    return api().post('/auth/signuppreuser', data)
  }
}
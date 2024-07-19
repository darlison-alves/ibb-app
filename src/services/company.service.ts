import { ICompanyPartnerForm } from "../components/Forms/CompanyPartner.Form";
import { api } from "../config/axios.base";

export class CompanyService {
  async findAll({ page, size, name = "", companyTypes }: any) {
    let query = "page=" + page + "&size=" + size + "&name=" +name;

    companyTypes.forEach((type: string, index: number) => {
      query = query + `&companyTypes[${index}]=${type}`
    })
    return api().get('/empresa?' + query)
  }

  async create(company: ICompanyPartnerForm) {
    return api().post('/empresa', {...company, username: company.user.email})
  }

  async createWithEmployee(company: ICompanyPartnerForm) {
    const name = company.user.name.split(" ")
    const username = name[0].toLowerCase();
    return api().post('/empresa/client', {...company, username})
  }

  async update(company: ICompanyPartnerForm) {
    return api().put(`/empresa/${company.id}`, {...company})
  }

  async findEmployeeByCompanyId(companyId: any) {
    return api().get(`/empresa/${companyId}/employees`)
  }

  async createEmployee(employee: any) {
    return api().post('/empresa/employees', employee)
  }

  async createEmployees(employee: any[], company_id: string) {
    return api().post(`/empresa/${company_id}/employees`, employee)
  }

  async findById(company_id: string) {
    return api().get(`/empresa/${company_id}`)
  }

  async remove(client_id: string) {
    return api().delete(`/clients/${client_id}`)
  }
}
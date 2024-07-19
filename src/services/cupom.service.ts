import { api } from "../config/axios.base";
import { InterValEnum } from "../interfaces/enums/interval.enum";
import { OrderWayEnum } from "../interfaces/payment.interface";
import { IPaymentStrategy } from "./strategies/payment.strategy";

interface IGenerateCode {
  empresaId: number;
  clienteId: number;
  valor: number;
  intervalo: InterValEnum;
  dataFinalCobranca?: string; // MM/AAAA
}

export class CupomService {
  async generateCode(data: IGenerateCode) {
    return api().post('/cupom/generate', data)
  }

  async getCouponsByUsername(username: string, page: number, size: number) {
    return api().get(`/cupom/cliente`, { params: { page, size } })
  }

  async pay(strategy: IPaymentStrategy, code: string = "", buyerId: number = 0) {
    const payment_info = strategy.handle();

    // return Promise.resolve({
    //   data: { "createdAt":"2022-12-30T23:21:26.252Z","updatedAt":"2022-12-30T23:21:26.252Z","id":37,"user":{"createdAt":"2022-11-23T20:26:05Z","updatedAt":"2022-11-23T20:26:30Z","id":4,"identityId":null,"name":"fulano da silva tst","username":"email.2@email.com","email":"email.2@email.com","telefone":"88888888888","password":"$2a$12$4MLvpBJDwpQWHtJvmtz7I.K6erRgfyIrPTNOUE7NrZEgBPb6Cz4de","active":false,"roles":[{"id":2,"name":"ROLE_USER"}],"indicationCode":"02e804fd","policyPrivacy":false,"acceptedTerm":false,"acceptedMembershipContract":false,"type":"PF","contaBancaria":null,"primeiroMes":true,"renda":0.00,"recoverPasswordHash":null,"representante":false},"type":"CUPOM","status":"PENDENTE","way":"CC","paymentId":"42139216","recurrentId":null,"amount":5.493000030517578,"taxaCielo":null,"requestId":null,"desconto":null,"returnCode":null,"statusCode":null,"multa":0,"cupom":{"createdAt":"2022-11-30T02:16:31Z","updatedAt":"2022-12-30T23:21:26.321Z","id":8,"cliente":{"createdAt":"2022-11-23T20:26:05Z","updatedAt":"2022-12-22T22:00:45Z","id":2,"user":{"createdAt":"2022-11-23T20:26:05Z","updatedAt":"2022-11-23T20:26:30Z","id":4,"identityId":null,"name":"fulano da silva tst","username":"email.2@email.com","email":"email.2@email.com","telefone":"88888888888","password":"$2a$12$4MLvpBJDwpQWHtJvmtz7I.K6erRgfyIrPTNOUE7NrZEgBPb6Cz4de","active":false,"roles":[{"id":2,"name":"ROLE_USER"}],"indicationCode":"02e804fd","policyPrivacy":false,"acceptedTerm":false,"acceptedMembershipContract":false,"type":"PF","contaBancaria":null,"primeiroMes":true,"renda":0.00,"recoverPasswordHash":null,"representante":false},"cpf":"04688870329","ativo":false,"pontos":0,"pontosExperiencia":0,"codigoIndicacao":"02e804fd","recurrentPaymentId":"23227","sexo":"F","dataNascimento":"1989-11-16T01:26:12.000+0000","telefone":"88888888888","endereco":{"createdAt":"2022-11-23T20:26:05Z","updatedAt":"2022-11-23T20:26:05Z","id":3,"logradouro":"Rua São Vicente de Paula","cep":"61654-325","bairro":"Araturi (Jurema)","numero":"88","cidade":"Caucaia","estado":"CE","complemento":null,"pais":null,"codeIBGE":"2303709"},"plan":{"@id":1,"createdAt":"2022-11-21T14:46:23Z","updatedAt":"2022-11-21T14:46:23Z","id":1,"name":"Plano Compacto","price":13.86,"priceInCents":1386,"tag":"PROTECAO_COMPACTA","principal":true,"code":1548,"status":"ENABLE","productCode":5},"valorMensalidade":13.86,"corretorSeguro":false},"empresa":{"createdAt":"2022-11-29T21:20:13Z","updatedAt":"2022-11-29T21:20:13Z","createdBy":1,"updatedBy":1,"id":1,"user":{"createdAt":"2022-11-29T21:20:13Z","updatedAt":"2022-12-27T01:22:24Z","id":5,"identityId":null,"name":"Luna e Priscila Esportes Ltda","username":"teste2@lunaepriscilaesportesltda.com.br","email":"teste2@lunaepriscilaesportesltda.com.br","telefone":null,"password":"$2a$10$dYVbkBFWKchC9n8uPZjMau5tr5IyF8ngFWIrF2BYvS5MevNVCbOJi","active":true,"roles":[{"id":3,"name":"ROLE_ENTERPRISE"}],"indicationCode":"ca8a766f","policyPrivacy":false,"acceptedTerm":false,"acceptedMembershipContract":false,"type":"PJ","contaBancaria":{"id":35,"conta":"207223","digitoConta":"8","agencia":"3978","digitoAgencia":null,"banco":null,"codigoBanco":"001","status":"ATIVA","tipo":"CC","token":"22DB195FBD6749B6B1425FE716086E06","tokenSandBox":"251385D4F94746458A056C5679AFC059","secretKey":"10AAA16310814CD3A69A78C74DF791826285E6D7149441E4B24C78BD589806E4","secretKeySandBox":"D05A1C69AB804B879EE1A0D00A6365650B0B6B88ADD44044874B8E0298A1DC21","accountId":207499,"document":"79011794000149","principal":false},"primeiroMes":true,"renda":0.00,"recoverPasswordHash":null,"representante":false},"razaoSocial":"Luna e Priscila Esportes","cnpj":"79011794000149","logo":null,"keyImageBucket":null,"desconto":15.00,"comissao":10.00,"dotBank":0.00,"endereco":{"createdAt":"2022-11-29T21:20:13Z","updatedAt":"2022-11-29T21:20:13Z","id":4,"logradouro":"Rua Mecanizada Nove Mil Novecentos e Noventa e Quatro","cep":"11390-570","bairro":"Catiapoa","numero":"204","cidade":"São Vicente","estado":"SP","complemento":null,"pais":null,"codeIBGE":"3551009"},"detalhes":null,"telefone":null,"celular":"(98)9 9797-9797","categoriaEmpresa":7,"category":{"id":7,"tag":"ELETRODOMESTICOS","description":"ELETRODOMESTICOS","socialInstitution":false},"categoriaDecricao":null,"instituicaoSocial":false,"type":"PARTNER","plan":null,"companyCode":null,"urlSite":"www.lunaepriscilaesportesltda.com.br","retencao":0.0,"allowIndication":true,"nomeResponsavel":null,"cargo":null,"qtdFuncionarios":0,"missao":null,"ibbTresEmUm":true,"tipoAssunatura":false,"valorMulta":0.00,"intervalosTags":[],"employees":null,"valorMensalidade":null,"politicaPrivacidade":true,"aceiteTermos":true,"aceiteContratoAdesao":true,"responsavel":{"id":1,"nome":"Priscila teste","telefone":"7978788191919","celular":"9491919191","email":"teste@priscila.com","cpf":"83238601067","cargo":"Dona"},"dataContratacao":null,"recurrentPaymentId":null},"codigo":"5de47870","statusCupom":"AGUARDANDO_PAG","dataGeracao":"2022-11-30T02:16:31.000+0000","dataConsumo":null,"dataPagamento":null,"valorCupom":4.58,"notaAvaliacao":0,"descricaoAvaliacao":null,"nomeArquivoComprovante":null,"desconto":15.0,"valorDesconto":0.0,"kickBackPerIndication":10.0,"pagamentoId":"42139216","recorrencia":false,"tipoIntervalo":null,"dataTerminoCobranca":null,"valorMulta":0.00},"plano":null,"flagCard":"ALL","valorLiquido":4.58,"urlBoleto":"https://invoices.safe2pay.com.br/?chave=D24960F4-FEFE-45B0-B3AA-043AFAD1CC8B","codigoBarra":"00190000090312263100942139216172692160000000549","linhaDigital":"00190000090312263100942139216172692160000000549","dataVencimento":"31/12/2022","numeroSerie":null,"descricao":"Estamos aguardando o pagamento do boleto bancário. Após o pagamento, o boleto poderá levar até dois dias úteis para ser compensado.","dataPagamento":null}
    // })

    return api().put('/cupom/pay', {
      ...payment_info,
      code,
      buyerId
    })
  }

  async getInfoPayment(code: string = '', orderWay: OrderWayEnum) {
    return api().get(`/cupom/pay/${code}/${orderWay}/info`)
  }

  async sharedCupom(data: any) {
    return api().post('/cupom/share', data)
  }
}
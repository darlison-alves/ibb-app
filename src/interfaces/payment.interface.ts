export interface ICardInfo {
  holder?: string;
  cardNumber?: string;
  expirationDate?: string;
  securityCode?: string;
}

export enum OrderWayEnum {
  CC = 'CC',
  BOL = 'BOL',
  CD = 'CD',
  PIX = 'PIX',
  NOT = '',
  IBB = 'IBB'
}

export interface IPaymentPayload {
  orderWay: OrderWayEnum;
  card?: ICardInfo;
}


// code: cartao.code,
//       buyerId: cartao.buyerId,
//       orderWay: cartao.orderWay,
//       card: {
//         holder: cartao.holder,
//         cardNumber: cartao.cardNumber,
//         expirationDate: cartao.expirationDate,
//         securityCode: cartao.securityCode,
//         flag: cartao.flag,
//       },
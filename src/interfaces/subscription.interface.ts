export interface IOrder {
  way?: string
  dataPagamento?: string
  dataVencimento?: string
  linhaDigital?: string
  merchantOrderId?: string
  message?: string
  numeroSerie?: string
  orderId?: number;
  paymentId?: string
  recurrent?: false
  recurrentId?: string
  status?: string
  urlBoleto?: string
  userId?: number;
  valor?: number;
  createdAt?: string;
}

export interface ISubscriptionUser {
  formaPagamento?: string;
  order?:IOrder;
  plano?: string;
  price?: number;
  status?: string;
}
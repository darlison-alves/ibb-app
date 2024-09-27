import { EPaymentMethod } from "../../common/enums/payment.method.enum";

export interface ICreateBilling {
    recommendationCode: string;
	paymentMethod: Array<EPaymentMethod>,
	userId: number; 
}
import { IPaymentPayload } from "../../interfaces/payment.interface";

export interface IPaymentStrategy {
    handle(): IPaymentPayload;
} 
import { IPaymentPayload } from "../../interfaces/payment.interface";
import { IPaymentStrategy } from "./payment.strategy";

export class CardPaymentStrategy implements IPaymentStrategy {
    constructor(private payload: IPaymentPayload) { }
    handle(): IPaymentPayload {
        return this.payload
    }
}
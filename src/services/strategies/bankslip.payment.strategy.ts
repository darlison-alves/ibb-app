import { IPaymentPayload, OrderWayEnum } from "../../interfaces/payment.interface";
import { IPaymentStrategy } from "./payment.strategy";

export class BankSlipPaymentStrategy implements IPaymentStrategy {
    handle(): IPaymentPayload {
        return {
            orderWay: OrderWayEnum.BOL
        }
    }    
}
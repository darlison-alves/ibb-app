export enum EPaymentMethod {
    CC = "CreditCard",
    BOL = "BankSlip",
    PIX = "Pix"
}

export const translatePaymentEnum = {
    [EPaymentMethod.BOL]: "Boleto",
    [EPaymentMethod.CC]: "Cartão de crédito",
    [EPaymentMethod.PIX]: "Pix"
}
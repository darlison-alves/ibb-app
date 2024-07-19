import { StatusCouponEnum } from "../interfaces/enums/cupom.status";

export const formatter = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const translateStatus = (status: StatusCouponEnum) => {
    switch(status) {
        case 'PAGO':
            return 'Pago'
        case 'AGUARDANDO_PAG':
            return 'Aguardando Pagamento'
        case 'NAO_PAGO':
            return 'Não Pago'
        default:
            return status
    }
}

export const translateTypeExtract = (type: string) => {
    switch(type) {
        case 'COMISSAO_CUPOM':
            return 'Comissão Cupom'
        case 'COMPRA_CUPOM':
            return 'Compra'
        case 'COMISSAO_PONTUAL':
            return 'Comissão Pontual'
        default:
            return type;
    }
    
    
}

export const defineTypeExtract = (type: string, status: string) => {
    console.log('type', type, status)
    switch(status) {
        case 'PAGAR':
            return 'A PAGAR'
        default: 
            return status
    }
}

export const translateStatusIncome = (status: string) => {
    switch(status) {
        case 'PENDENTE':
            return 'A PAGAR'
        default: 
            return status
    }
}
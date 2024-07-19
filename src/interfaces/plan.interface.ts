export interface IPlan {
    code: number
    createdAt: string;
    id: number;
    name:string;
    price: number;
    benefits?: Array<any>
}

export interface IBenefit {
    id: string;
    name:string;
    amount: number;
}

export interface IPlanCreate {
    code: number
    createdAt: string;
    id: number;
    name:string;
    price: number;
}

export enum BasePlan  {
    PROTECAO_COMPACTA = 'PROTECAO_COMPACTA',
    PROTECAO_ESPECIAL = 'PROTECAO_ESPECIAL',
    PROTECAO_ESSENCIAL = 'PROTECAO_ESSENCIAL',
    PROTECAO_FAMILIAR_GOLD = 'PROTECAO_FAMILIAR_GOLD',
    PROTECAO_FAMILIAR_PREMIUM = 'PROTECAO_FAMILIAR_PREMIUM'
}
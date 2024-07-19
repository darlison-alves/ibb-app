import { number } from "joi";

export interface ICoupon {
    id?: number;
    userName?: number;
    empresa?: string;
    status?: number;
    dataGeracao?: string;
    dataConsumo?: string;
    codigo?: string
    valorCupom?: number;
    notaAvaliacao?: number;
    descricaoAvaliacao?: string;
    nomeArquivoComprovante?: string
    cliente_id?: number;
    empresa_id?: number;
    nomeCliente?: string;
    desconto?: number,
    kickBackPerIndication?: number;
    extratoComissao?: number;
    tipoAssinatura?: boolean;
    intervaloTag?: any;
    dataTerminoCobranca?: string;
    empresaId?: number;
    clienteId?: number;
    kickBackCalculated?: number;
    calculated?: cupomCalculated
    userId?: number;
}

interface cupomCalculated {
    amountCoupon: number;
    amountDiscount: number
    amountWithDiscount: number
}
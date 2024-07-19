import { IPlan } from "../views/Subscription/payload.interface";
import { IAddress } from "./address.interface";
import { IBankData } from "./bank.interface";

export interface IbankDetails {

}

export interface IUser {
  active: boolean;
  contaBancaria?: IBankData
  email: string;
  id: number;
  indicationCode: string;
  name: string;
  type: string;
  username: string;
  policyPrivacy:boolean;
  acceptedTerm: boolean;
  acceptedMembershipContract: boolean;

}

export interface IClientUser {
  email?: string;
  nome?: string;
  cpf?: string;
  telefone?: string;
  endereco?: IAddress;
  user?: IUser;
  plan?: IPlan;
  planId?: number;
  dataNascimento?: string;
  sexo?: string;
  politicaPrivacidade?:boolean;
  aceiteContratoAdesao?: boolean;
}
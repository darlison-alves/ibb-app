import { CSSProperties, MouseEventHandler } from "react";
import { formatter } from "../../utils/price.util";

export interface IPlan {
  id: number;
  name: string;
  price: number;
  color?: string;
  darkBgColor?: string;
  style?: CSSProperties;
  benfs: any;
  plan_id: any
  onClick?: MouseEventHandler;
}

export const CardPlan = ({ name, price = 0, onClick = () => {}, style = {}}: IPlan) => {
  return (
    <div style={style} className={`p-4 max-w-sm rounded-lg border shadow-md sm:p-8 dark:border-gray-700 ml-2`}>
      <h5 className="mb-4 text-xl font-medium dark:text-white">{ name }</h5>
      <hr />
      <div className="flex items-baseline">
        <hr />
        <span className="text-1xl font-semibold">R$</span>
        <span className="text-3xl font-extrabold tracking-tight">{ formatter.format(price) }</span>
        <span className="ml-1 text-xl font-normal">/mês</span>
      </div>
  
      <button type="button" className={`bg-transparent font-semibold py-2 px-4 border border-white rounded`} onClick={onClick} >
        Escolher plano 
      </button>
    </div>
  )
}
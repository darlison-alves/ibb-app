import { Pagination, Tooltip } from "@mui/material"
import { formatter, translateStatus } from "../../utils/price.util"
import { Input } from "../Input/Input"
import { LoadingFullLigth } from "../Loading/loading.full.compoment"

import creditCard from '../../assets/svgs/credit-card.svg';
import trash_svg from '../../assets/svgs/trash.svg';
import { StatusCouponEnum } from "../../interfaces/enums/cupom.status";
import { useContext } from "react";
import { CouponContext } from "../../context/Coupon/CouponContext";

export const CouponTable = ({
  coupons = [],
  setFilters = (filters: any) => { },
  pagination = { total: 0 },
  loading = false,
  reload = () => {}
}) => {

  const { paymentForm } = useContext(CouponContext)

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      {loading && <LoadingFullLigth />}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          <p>Meus Cupons </p>
          {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
          <div className="my-3">
            <Input focusPlaceholder="Pesquisar por empresa" type="text" placeholder="Pesquisar por empresa" />
          </div>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Código
            </th>
            <th scope="col" className="py-3 px-6">
              Empresa
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Valor Cupom
            </th>
            <th scope="col" className="py-3 px-6">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>

          {
            coupons.map((coupon: any) => {
              return (
                <tr key={coupon.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    { coupon?.codigo }
                  </th>
                  <td className="py-4 px-6">
                    {coupon?.empresa}
                  </td>
                  <td className="py-4 px-6">
                    { translateStatus(coupon.status) }
                  </td>
                  <td className="py-4 px-6">
                    {formatter.format(coupon?.valorCupom)}
                  </td>
                  <td className="py-4 text-right flex">
                    
                      { (coupon?.status !== StatusCouponEnum.PAGO) && 
                      <Tooltip title="pagar cupom" placement="top" >
                        <img onClick={() => { paymentForm(coupon, reload) }} src={creditCard} data-tooltip-target="tooltip-default" width={25} alt="pagar cupom" className="cursor-pointer" />
                      </Tooltip> }

                      <Tooltip title="excluir" placement="top" >
                        <img src={trash_svg} data-tooltip-target="tooltip-default" width={25} alt="pagar cupom" className="cursor-pointer" />
                      </Tooltip>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} >
              <Pagination count={pagination.total} onChange={(evt, page) => setFilters((old: any) => ({ ...old, page }))} />
            </td>
          </tr>
          
        </tfoot>
      </table>
    </div>
  )
}
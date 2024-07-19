import { Pagination } from "@mui/material"
import { ButtonCustom } from "../Button/Button"
import { LoadingFullLigth } from "../Loading/loading.full.compoment"

import circled_plus from '../../assets/svgs/circled-plus.svg'
import trash_svg from '../../assets/svgs/trash.svg'
import { formatter } from "../../utils/price.util"

export const PlanTable = ({
  plans = [],
  setFilters = (filters: any) => { },
  pagination = { total: 0 },
  loading = false,
  onCreate = () => { },
  onDisable = (planId: number) => { },
  onAddBenfitis = () => { },
  onModalRel = (planId: number) => { }
}: any) => {

  return (
    <div className="relative sm:rounded-lg flex justify-center mt-3">
      {loading && <LoadingFullLigth />}
      <table className="w-[70%] text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          <p>Lista Planos </p>
          {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
          {/* <div className="my-3">
            <Input focusPlaceholder="Pesquisar por nome" type="text" placeholder="Pesquisar por nome" />
          </div> */}
          <div className="min-w-screen flex" style={{ float: 'right' }}>
            <ButtonCustom
              onClick={() => onAddBenfitis()}
              text="Novo benefícios"
              type="button" className="mr-2 mb-2 p-2 bg-primary text-sm " />
          </div>
          <div className="min-w-screen flex" style={{ float: 'right' }}>
            <ButtonCustom
              onClick={() => onCreate()}
              text="Novo Plano"
              type="button" className="mr-2 mb-2 p-2 bg-primary text-sm " />
          </div>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nome
            </th>
            <th scope="col" className="py-3 px-6">
              Preço
            </th>
            <th scope="col" className="py-3 px-6">
              status
            </th>
            <th scope="col" className="py-3 px-6">
              principal
            </th>
            <th scope="col" className="py-3 px-6">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>

          {
            plans.map((plan: any) => {
              return (
                <tr key={plan.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">
                    {plan?.name}
                  </td>
                  <td className="py-4 px-6">
                    {formatter.format(plan?.price)}
                  </td>
                  <td className="py-4 px-6">
                    {plan?.status}
                  </td>
                  <td className="py-4 px-6">
                    {plan?.principal ? 'sim' : 'não'}
                  </td>
                  <td className="py-4 px-6 flex text-right">
                    <img onClick={() => onDisable(plan.id)} src={trash_svg} width={25} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" style={{ cursor: "pointer" }} />
                    <img alt="add benficios" onClick={() => onModalRel(plan.id)} src={circled_plus} width={25} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" style={{ cursor: "pointer" }} />
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
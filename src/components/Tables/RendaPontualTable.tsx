import { Pagination } from "@mui/material"
import { Input } from "../Input/Input"
import { LoadingFullLigth } from "../Loading/loading.full.compoment"

import { formatter, translateStatusIncome } from "../../utils/price.util"
import PaidIcon from '@mui/icons-material/Paid';
import { Tooltip } from "../Tooltip/ToolTip";
import { ToolTipRight } from "../Tooltip/Tooltip.right";

export const RendaPontualTable = ({
  incomes = [],
  setFilters = (filters: any) => { },
  pagination = { total: 0 },
  loading = false,
  onPay = (income: any) => { }
}) => {

  return (
    <div className="mt-3">
      {loading && <LoadingFullLigth />}
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          <p>Relatório Renda Pontual </p>
          {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
          <div className="my-3">
            <Input
             onChange={(evt) => {
              let text = evt.target.value
              if(text.length >= 3) {
                setFilters((old: any) => ({ ...old, name: evt.target.value }));
              }
            }}
             focusPlaceholder="Pesquisar por nome" type="text" placeholder="Pesquisar por nome" />
          </div>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nome
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Renda
            </th>
            <th scope="col" className="py-3 px-6">
              Data Pagamento
            </th>
            <th scope="col" className="py-3 px-6">
              Custo Seguradora
            </th>
            <th scope="col" className="py-3 px-6">
              Imposto de Renda
            </th>
            <th scope="col" className="py-3 px-6">
              Taxa de Cobrança
            </th>
            <th scope="col" className="py-3 px-6">
              Comissão %
            </th>
            <th scope="col" className="py-3 px-6">
              Plano Indicado
            </th>

            <th scope="col" className="py-3 px-6">
              Nome Indicado
            </th>
          </tr>
        </thead>
        <tbody>

          {
            incomes.map((income: any) => {
              return (
                <tr key={income.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">
                    {income?.user?.name}
                  </td>
                  <td className="py-4 px-6">
                    {translateStatusIncome(income?.statusComissao)}
                  </td>
                  <td className="py-4 px-6">
                    {formatter.format(income?.renda)}
                  </td>
                  <td className="py-4 px-6">
                    {income?.dataRecebimento ? new Date(income?.dataRecebimento).toLocaleDateString('pt-Br') : 'Não definida'}
                  </td>
                  <td className="py-4 px-6">
                    {formatter.format(income?.transacao?.custoSeguradora)}
                  </td>
                  <td className="py-4 px-6">
                    {formatter.format(income?.transacao?.impostoRenda)}
                  </td>
                  <td className="py-4 px-6">
                    {formatter.format(income?.transacao?.taxaCobranca)}
                  </td>
                  <td className="py-4 px-6">
                    {income?.transacao?.percentualComissao} %
                  </td>
                  <td className="py-4 px-6">
                    {income?.indicado?.plan?.name}
                  </td>
                  <td className="py-4 pl-10">
                    {income?.indicado?.nome}
                    {/* <img onClick={() => onEdit(income)} src={editSvg} width={25} /> */}
                    {/* <ToolTipRight text="realizar pagamento renda pontual" >
                      <PaidIcon className="cursor-pointer" onClick={() => {
                        onPay(income)
                      }} />
                    </ToolTipRight>
 */}

                    {/* <a href="#" onClick={() => onEdit(client)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
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
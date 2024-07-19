import { useContext } from "react";
import { Pagination } from "@mui/material"
import moment from 'moment';

import { Input } from "../Input/Input"
import { LoadingFullLigth } from "../Loading/loading.full.compoment"

import details from '../../assets/svgs/details.svg'
import { ModalContext } from "../../context/ModalContext";
import { IndicationInfo } from "../Card/Ind.Info";

interface IRecommendationsTableProps {
  indications: Array<any>;
  setFilters: Function;
  pagination: any;
  loading: boolean;
}

export const  RecommendationsTable = ({
  indications = [],
  setFilters = (filters: any) => { },
  pagination = { total: 0 },
  loading = false
}: IRecommendationsTableProps) => {

  const { setOpen, setComponet } = useContext(ModalContext);

  const openModalInfo = (indication: any) => {
    setComponet(<IndicationInfo
      bottom={{}}
      top={{
        nome: indication?.associado
      }}
      center={{}}
      titles={["Indicado"]} />)
    setOpen(true);
  }
  
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      {loading && <LoadingFullLigth />}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          <p>Lista de Indicações </p>
          {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
          <div className="my-3">
            <Input onChange={(evt) => {
              setFilters((old: any) => ({ ...old, name: evt.target.value }))
            }} focusPlaceholder="Pesquisar por usuário" type="text" placeholder="Pesquisar por usuário" />
          </div>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Id
            </th>
            <th scope="col" className="py-3 px-6">
              Associado
            </th>
            <th scope="col" className="py-3 px-6">
              Código Associado
            </th>
            <th scope="col" className="py-3 px-6">
              Data Contratação
            </th>
            <th scope="col" className="py-3 px-6">
              Ativo?
            </th>
            <th scope="col" className="py-3 px-6">
              Pagou?
            </th>
            <th scope="col" className="py-3 px-6">
              Plano Associado
            </th>
            <th scope="col" className="py-3 px-6">
              Indicado Por
            </th>
                      
            <th scope="col" className="py-3 px-6">
              Ações
            </th>            
          </tr>
        </thead>
        <tbody>

          {
            indications.map((indication: any) => {
              return (
                <tr key={indication.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6">
                    {indication?.indicacaoId}
                  </td>
                  <td className="py-4 px-6">
                    {indication?.associado}
                  </td>
                  <td className="py-4 px-6">
                    {indication?.codigoIndicacaoAssociado}
                  </td>
                  <td className="py-4 px-6">
                    {indication?.dataContratacao ? moment(indication?.dataContratacao).format("DD/MM/yyyy") : indication?.dataContratacao}
                  </td>
                  <td className="py-4 px-6">
                    {indication?.ativo ? "SIM" : "NÃO"}
                  </td>
                  <td className="py-4 px-6">
                    {indication?.pagou ? "SIM" : "NÃO"}
                  </td>
                  <td className="py-4 px-6">
                    {indication?.planoAssociado}
                  </td>
                  <td className="py-4 px-6">
                    {indication?.nomeUsuario}
                  </td>                  
                  <td className="py-4 px-6 flex text-right">
                    <img onClick={() => openModalInfo(indication)} alt="Detalhes" src={details} width={25} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" style={{ cursor:"pointer" }}/>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} >
              <Pagination count={pagination.total} onChange={(evt, page) => setFilters((old: any) => ({ ...old, page: page }))} />
            </td>
          </tr>
          
        </tfoot>
      </table>
    </div>
  )
}
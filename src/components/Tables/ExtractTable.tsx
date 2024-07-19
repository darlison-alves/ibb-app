import { Pagination } from "@mui/material";
import { defineTypeExtract, formatter, translateTypeExtract } from "../../utils/price.util";
import { LoadingFullLigth } from "../Loading/loading.full.compoment";

import details from '../../assets/svgs/details.svg'
import { BadgeByStatus } from "../Badge/label.badge";

interface ExtractTableProps {
    loading: boolean;
    items: Array<any>;
    setFilters: Function;
    pagination: any;
}

export const ExtractTable = ({
    loading = false, 
    items = [],
    setFilters = (filters: any) => { },
    pagination = { total: 0 },
}: ExtractTableProps ) => {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            {loading && <LoadingFullLigth />}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    <p>Meus Extratos </p>
                    {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                    <div className="my-3">
                        {/* <Input focusPlaceholder="Pesquisar por empresa" type="text" placeholder="Pesquisar por empresa" /> */}
                    </div>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Tipo
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Valor
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        items.map((item: any) => {
                            return (
                                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        #{item?.id}
                                    </th>
                                    <td className="py-4 px-6">
                                        {translateTypeExtract(item?.tipoExtrato)}
                                    </td>
                                    <td className="py-4 px-6">
                                        {/* {defineTypeExtract(item?.tipoExtrato, item?.status)} */}
                                        <BadgeByStatus text={defineTypeExtract(item?.tipoExtrato, item?.status)} status={item?.status} />
                                    </td>
                                    <td className="py-4 px-6">
                                        { item.valor ? formatter.format(item.valor) : '-' }
                                    </td>
                                    <td className="py-4">
                                        <img alt="Detalhes" src={details} width={25} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" style={{ cursor:"pointer" }}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} >
                            <Pagination count={pagination.total} onChange={(evt: any, page: number) => setFilters((old: any) => ({ ...old, page }))} />
                        </td>
                    </tr>

                </tfoot>
            </table>
        </div>
    )
}
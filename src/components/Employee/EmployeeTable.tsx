import { Pagination, Tooltip } from "@mui/material"
import { Input } from "../Input/Input"
import { LoadingFullLigth } from "../Loading/loading.full.compoment"
import editSvg from '../../assets/svgs/edit.svg'
import removeSvg from '../../assets/svgs/trash.svg'
import cancelSvg from '../../assets/svgs/cancel-svgrepo-com.svg';

import { ButtonCustom } from "../Button/Button"
import { EmployeeOperationTypeEnum } from "../../common/enums/employee.operation.type.enum"

export const EmployeeTable = ({
    employees = [],
    setFilters = (filters: any) => { },
    pagination = { total: 0 },
    loading = false,
    onEdit = (employee: any) => { },
    onAdd = (employee: any) => { },
    onRemove = (employee: any, operationType: EmployeeOperationTypeEnum) => { },
    saveAll = false,
    onSave = () => { },
    loadingSave = false,
    enableOnsave = false
}) => {

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            {loading && <LoadingFullLigth />}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    <p>Colaboradores </p>
                    {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                    <div className="my-3">
                        <Input focusPlaceholder="Pesquisar por nome" type="text" placeholder="Pesquisar por nome" />
                    </div>
                    <div className="min-w-screen flex" style={{ float: 'right' }}>
                        <ButtonCustom
                            loading={false}
                            onClick={() => onAdd({})}
                            text="Novo Cliente"
                            type="button" className="mr-2 mb-2 p-2 bg-primary text-sm " />

                        {
                            saveAll && <ButtonCustom
                                disabled={enableOnsave}
                                loading={loadingSave}
                                onClick={() => onSave()}
                                text="Salvar"
                                type="button" className="mr-2 mb-2 p-2 bg-primary text-sm " />
                        }

                    </div>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Nome
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Email
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Código
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        employees.map((employee: any) => {
                            return (
                                <tr key={employee.id} className={` ${ employee.operationType == 'REMOVE' ? 'bg-[#df6464e0] text-white' : 'bg-white' } border-b dark:bg-gray-800 dark:border-gray-700`}>
                                    <td scope="row" className="py-1 px-6 font-medium whitespace-nowrap dark:text-white">
                                        {employee?.user?.name}
                                    </td>
                                    <td className="py-4 px-6">
                                        {employee?.user?.email}
                                    </td>
                                    <td className="py-4 px-6">
                                        {employee?.user?.indicationCode}
                                    </td>
                                    <td className="py-4 px-6 flex text-right">
                                        <img onClick={() => onAdd(employee)} src={editSvg} width={25} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" style={{ cursor: "pointer" }} />
                                        
                                        {
                                            employee.operationType == 'REMOVE' ? 
                                            <img onClick={() => onRemove(employee, EmployeeOperationTypeEnum.CANCEL_REMOVE)} src={cancelSvg} width={25} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" style={{ cursor: "pointer" }} />
                                            :
                                            <img onClick={() => onRemove(employee, EmployeeOperationTypeEnum.REMOVE)} src={removeSvg} width={25} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" style={{ cursor: "pointer" }} />
                                        }

                                        
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
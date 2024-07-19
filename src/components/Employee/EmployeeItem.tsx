export const EmployeeItem = ({ employee }: any) => {
    return (
        <li className="pb-3 sm:pb-4 bg-white">
            <div className="flex items-center space-x-4 pl-3 pt-3" >

                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {employee?.nome}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {employee?.email}
                    </p>
                </div>
                {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div> */}
            </div>
        </li>
    )
}
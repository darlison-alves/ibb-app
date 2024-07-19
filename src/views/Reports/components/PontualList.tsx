import { useEffect, useState } from "react"
import { RendaPontualTable } from "../../../components/Tables/RendaPontualTable"
import { PunctualIncomeService } from "../../../services/punctual.income.service"

const punctualIncomeService = new PunctualIncomeService()

export const PontualListView = () => {

    const [incomes, setIncomes] = useState([])
    const [filters, setFilters] = useState({ page: 1, size: 10, name: '' })
    const [pagination, setPagination] = useState({ page: 1, size: 10, total: 0 })
    const [loading, setLoading] = useState(false)

    const getList = () => {
        punctualIncomeService.findAll(filters.page, filters.size, filters.name)
            .then(res => {
                setIncomes(res.data.content)
                setPagination(old => ({ ...old, page: res.data.page, size: res.data.size, total: res.data.totalPages }))
            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        getList()
    }, [filters])

    const onPay = (income: any) => {
        
    }

    return (
        <div>
            <RendaPontualTable
                loading={loading}
                incomes={incomes}
                setFilters={setFilters}
                pagination={pagination}
                onPay={onPay}
            />
        </div>
    )
}
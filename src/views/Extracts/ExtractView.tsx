import { useEffect, useState } from "react"
import { ExtractTable } from "../../components/Tables/ExtractTable"
import { ExtractService } from "../../services/extract.service"

export const ExtractView = () => {
    const extractService = new ExtractService()
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [pagination, setPagination] = useState({ page: 1, size: 10, total: 0 });
    const [filters, setFilters] = useState({})
    

    useEffect(() => {
        setLoading(true)

        extractService.getMyExtracts(filters)
            .then(res => {
                setItems(res.data.content)
                setPagination(old => ({ ...old, page: res.data.page, size: res.data.size, total: res.data.totalPages }))
            })
            .finally(() => {
                setLoading(false)
            })

    }, [filters])


    return (
        <div className="mt-6">
            <ExtractTable items={items} loading={loading} pagination={pagination} setFilters={setFilters} />
        </div>
    )
}
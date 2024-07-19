import { useEffect, useState } from "react"
import { CouponTable } from "../../components/Tables/CouponTable"
import { useGetInfoUser } from "../../hooks/useGetInfoUser"
import { CupomService } from "../../services/cupom.service"

const cupomService = new CupomService()

export const CouponListView = () => {

    const [coupons, setCoupons] = useState([])
    const [filters, setFilters] = useState({ page: 1, size: 10, name: '' })
    const [pagination, setPagination] = useState({ page: 1, size: 10, total: 0 })
    const { user } = useGetInfoUser()
    
    const getCupons = () => {
        const { username } = user
        cupomService.getCouponsByUsername(username, filters.page, filters.size)
            .then(res => {
                console.log(res.data)
                setCoupons(res.data.content)
                setPagination(old => ({ ...old, page: res.data.page, size: res.data.size, total: res.data.totalPages }))
            }).catch(err => {
                console.log('eerr', err)
            })
    }

    useEffect(() => {
        getCupons()
    }, [user, filters])

    return (
        <div className="mt-6">
            <CouponTable coupons={coupons} pagination={pagination} setFilters={setFilters} reload={() => {
                getCupons()
            }} />
        </div>
    )
}
import React, { useEffect, useState } from 'react';

import { RecommendationsTable } from '../../components/Tables/RecommendationsTable'
import { RecommendationService } from '../../services/recommendation.service';

export const RecommendationOfUsersView = () => {

    const recommendationService = new RecommendationService()

    const [recommendations, setRecommendations] = useState<Array<any>>([])
    const [filters, setFilters] = useState({ page: 1, size: 10, name: "" })
    const [pagination, setPagination] = useState({ page: 1, size: 10, total: 0 })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        recommendationService.getRecommendationOfUsers({...filters, associado: filters.name})
        .then(res => {
            console.log('ress', res.data)
            setRecommendations(res.data.content)
            setPagination(old => ({...old, page: res.data.page, size: res.data.size, total: res.data.totalPages }))
        }).catch(err => {
            console.log('err', err)
        }).finally(() => {
            setLoading(false)
        })
    }, [filters])

    return (
        <RecommendationsTable indications={recommendations} pagination={pagination} setFilters={setFilters} loading={loading} />
    )
}
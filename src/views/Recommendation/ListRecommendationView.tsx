import { useEffect, useState } from 'react';
import { api } from '../../config/axios.base';
import { IRecommendation } from '../../interfaces/recommendation.interface';
import { RecommendationsTable } from '../../components/Tables/RecommendationsTable';

export const ListRecommendationView = () => {

  const [recommendations, setRecommendations] = useState<IRecommendation[]>([])
  const [filters, setFilters] = useState({ page: 1, size: 10, name: '' })
  const [pagination, setPagination] = useState({ page: 1, size: 10, total: 0 })
  const [loading, setLoading] = useState(false)
    
  const getRecommendations = () => {
    setLoading(true)
    api().get("/indicacao", {
      params: {
        associado: filters.name,
        page: filters.page,
        size: filters.size
      }
    })
    .then( res => {      
      setRecommendations(res.data.content)
      setPagination(old => ({...old, page: res.data.page, size: res.data.size, total: res.data.totalPages }))
    }).catch(err => {
      console.log('error', err);
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    getRecommendations()
  }, [filters])

  return (
    <RecommendationsTable indications={recommendations} pagination={pagination} setFilters={setFilters} loading={loading} />
  )
}
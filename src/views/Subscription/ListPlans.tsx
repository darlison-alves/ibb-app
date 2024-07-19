import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardPlan } from "../../components/Card/Card";
import { CardPlanAccord } from '../../components/Card/Card.Plan.Accord';
import { api } from '../../config/axios.base';
import { getBgColorByPlanId } from '../../config/utils.color';
import { useQuery } from '../../hooks/useQuery';
import { getInfo } from '../../utils/info.plans';
import { IPlan } from './payload.interface';

export const PlanListPage = () => {

  const [plans, setPlans] = useState(Array<IPlan>);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const query = useQuery()

  useEffect(() => {
    setLoading(true)
    api().get('/plans').then(res => {
      setPlans(res.data)
    }).catch(err => {
      console.log('err', err)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <div className="">
      <div className="md:flex items-stretch py-7 md:shrink-0 w-full">

        {loading && (<div>loading...</div>)}
        <div className="row" />

        {!loading &&
          plans.map((plan) => {
            const style = getBgColorByPlanId(plan.tag, 'v1')
            const info = getInfo(plan.tag)

            return <CardPlanAccord
              plan_id={plan.id}
              benfs={info}
              key={plan.id}
              style={style}
              onClick={() => { navigate(`/client/plans/${plan.id}?codeRecommendation=${query.get('codeRecommendation') || ''}`) }} name={plan.name} price={plan.price} id={plan.id} />
          }
          )}
      </div>

      {/* {!loading &&
          plans.map(plan => {
            const style = getBgColorByPlanId(plan.tag, 'v1')
            return <CardPlan 
                    key={plan.id}
                    style={style}
                    onClick={() => { navigate(`/client/plans/${plan.id}?codeRecommendation=${query.get('codeRecommendation') || ''}`) }} name={plan.name} price={plan.price} id={plan.id} />
          }
          )} */}
      {/* <CardPlan onClick={() => { navigate('/checkout/1') }} name="Proteção Compacta" price={9.9} id={1} color="pink-600" darkBgColor="bg-gray-800" /> */}
      {/* <CardPlan onClick={() => { navigate('/checkout/2') }} name="Proteção Compacta" price={9.9} id={2} color="[#0693e3]" /> */}
      {/* <CardPlan onClick={() => { navigate('/checkout/3') }} name="Proteção Compacta" price={9.9} id={3} color="pink-600" /> */}
      {/* <CardPlan onClick={() => { navigate('/checkout/4') }} name="Proteção Compacta" price={9.9} id={4} color="[#ff8228]" /> */}
      {/* <CardPlan onClick={() => { navigate('/checkout/5') }} name="Proteção Compacta" price={9.9} id={5} color="[#009040]" />  */}

    </div>
  )
}
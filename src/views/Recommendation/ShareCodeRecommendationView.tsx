import { useEffect, useState } from "react";
import { ShareCodeRecommendation } from "../../components/Recommendation/ShareCodeRecommendation";
import { useGetInfoUser } from "../../hooks/useGetInfoUser";
import { PlansList } from "./components/plans.list";

export const ShareCodeRecommendationView = () => {
  const { user } = useGetInfoUser()

  const [codeRecommendation, setCodeRecommendation] = useState('');
  const [urlPlan, setUrlPlan] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setCodeRecommendation(user.codeRecommendation)
  }, [user])

  return (
    <div className="flex justify-center w-full">
      { !showForm && <PlansList onClick={(url) => {
        setUrlPlan(url);
        setShowForm(true);
      }} /> }

      { showForm && <ShareCodeRecommendation codeRecommendation={codeRecommendation} userId={user.id} urlPlan={urlPlan} onBack={() => setShowForm(false)} /> }
    </div>
  )
}
import { IRecommendation } from "../../interfaces/recommendation.interface"

interface IRecommendationList {
  recommendations: Array<IRecommendation>;
  loading: boolean;
}

export type RecommendationProps = IRecommendationList
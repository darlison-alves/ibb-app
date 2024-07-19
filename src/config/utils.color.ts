import { CSSProperties } from "react"
import compacto from '../assets/img/protecao_compacta.jpg'
import especial from '../assets/img/protecao_especial.jpg'
import essencial from '../assets/img/protecao_essencial.jpg'
import gold from '../assets/img/protecao_familia_gold.jpg'
import premium from '../assets/img/protecao_familia_premium.jpg'

export const getBgColorByPlanId = (tag: any, v1 = 'v2'): CSSProperties => {
  switch (tag) {
    case "PROTECAO_COMPACTA":
      if(v1 === 'v1') {
        return {
          color: '#FFF',
          backgroundColor: '#54595F'
        }
      }
      return {
        backgroundImage: `url(${compacto})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '27rem',
        color: '#555'
      }
    case "PROTECAO_ESPECIAL":
      if(v1 === 'v1') {
        return {
          color: '#FFF',
          backgroundColor: '#0693e3'
        }
      }
      return {
        backgroundImage: `url(${especial})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '27rem',
      }
    case "PROTECAO_ESSENCIAL":
      if(v1 === 'v1') {
        return {
          color: '#FFF',
          backgroundColor: '#ec1c8a'
        }
      }
      return {
        backgroundImage: `url(${essencial})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '27rem',
      }
    case "PROTECAO_FAMILIAR_GOLD":
      if(v1 === 'v1') {
        return {
          color: '#FFF',
          backgroundColor: '#ff8228'
        }
      }
      return {
        backgroundImage: `url(${gold})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '27rem',
      }
    case "PROTECAO_FAMILIAR_PREMIUM":
      if(v1 === 'v1') {
        return {
          color: '#FFF',
          backgroundColor: '#009040'
        }
      }
      return {
        backgroundImage: `url(${premium})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '27rem',
      }
    default:
      return {
        // bg: '[#54595F]'
        backgroundColor: '#54595F'
      }
  }
}
import { formatter } from '../../utils/price.util'
import { IPlan } from './Card'

export const CardPlanAccord = ({ name, price = 0, onClick = () => { }, style = {}, benfs = [], plan_id }: IPlan) => {
    return (
        <div className="col tab-card">
            <div className="tab-header">
                <p>{name}</p>
            </div>

            <div className="tab-header-price">
                <p>{formatter.format(price)}</p>
            </div>

            <div className="tabs">

                {
                    benfs.map((b: any, i: number) => {

                        if (b.has)
                            return (
                                <div className="tab">
                                    <input type="radio" id={`rd1${i}-${plan_id}`} className="input-cord" name="rd" />
                                    <label className="tab-label" htmlFor={`rd1${i}-${plan_id}`}>{b.title}</label>
                                    <div className="tab-content">
                                        {b.description}
                                    </div>
                                </div>
                            )
                        else {
                            return (
                                <div className="tab">
                                    <input type="radio" id={`rd1${i}-${plan_id}`} className="input-cord" name="rd" />
                                    <label className="tab-label text-riscado" htmlFor={`rd1${i}-${plan_id}`}>{b.title}</label>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <div className="tab tab-footer">
                <button className='btn-plano' onClick={onClick}> Escolhar plano </button>
            </div>
        </div>

    )
}
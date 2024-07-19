import { useContext, useEffect, useState } from "react"
import { ConfirmBtn } from "../../components/Button/Confirm";
import { PlanBenefitForm } from "../../components/Forms/Plan.benefit.Form copy";
import { PlanForm } from "../../components/Forms/Plan.Form"
import { PlanBenefitAddForm } from "../../components/Forms/PlanBenefitAddForm";
import { PlanTable } from "../../components/Tables/PlanoTable";
import { ModalContext } from "../../context/ModalContext";
import { ToastContext } from "../../context/ToastContext";
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum";
import { IPlan } from "../../interfaces/plan.interface";
import { PlanService } from "../../services/plan.service";

export const PlanView = () => {

    const planService = new PlanService()

    const [show_form, setShowForm] = useState(false);
    const [plans, setPlans] = useState<Array<IPlan>>([]);
    const [loading, setLoading] = useState(false)

    const { setComponet, setOpen, setTitle } = useContext(ModalContext)
    const { showToastMessange } = useContext(ToastContext)

    const onModal = (plan_id: number) => {
        setTitle('Deseja realmente desabilita plano ? ')
        setComponet(<>
            <ConfirmBtn
                onConfirm={() => {
                    planService.disable(plan_id)
                        .then(res => {
                            showToastMessange("plano dasebilitado com sucess", TypeMessageEnum.success)
                        }).catch(err => {
                            showToastMessange(err?.response?.data?.message || "Error Interno", TypeMessageEnum.error)
                        })
                        .finally(() => {
                            setOpen(false);
                        })
                }}
            />
        </>)

        setOpen(true);
    }

    const onModalAddBenefits = () => {
        setTitle("adicionar beneficios")
        setComponet(<PlanBenefitForm onCancel={() => setOpen(false)} />)
        setOpen(true);
    }

    const onModalRel = (plan_id: number) => {
        setTitle("Relacionar beneficios")
        setComponet(<PlanBenefitAddForm
            plan_id={plan_id}
            onCancel={() => setOpen(false)}
            onAfterCreate={() => setOpen(false)}
        />)
        setOpen(true);
    }

    const getPlans = () => {
        setLoading(true)
        planService.findAll("excludeField=principal")
            .then(res => {
                setPlans(res.data)
            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getPlans()
    }, [])

    return (
        <>
            {
                !show_form && <PlanTable
                    loading={loading}
                    plans={plans}
                    onCreate={() => setShowForm(true)}
                    onDisable={(plan_id: number) => { onModal(plan_id) }}
                    onAddBenfitis={() => onModalAddBenefits()}
                    onModalRel={(plan_id: number) => onModalRel(plan_id)}
                />
            }
            {
                show_form && <PlanForm onCancel={() => setShowForm(false)} onAfterCreate={() => { setShowForm(false) }} />
            }
        </>

    )
}
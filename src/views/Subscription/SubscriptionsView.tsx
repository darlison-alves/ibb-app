import { useContext, useEffect, useState } from "react"
import { ConfirmBtn } from "../../components/Button/Confirm";
import { PlanBenefitForm } from "../../components/Forms/Plan.benefit.Form copy";
import { PlanForm } from "../../components/Forms/Plan.Form"
import { ModalContext } from "../../context/ModalContext";
import { ToastContext } from "../../context/ToastContext";
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum";
import { SubscriptionsTable } from "../../components/Tables/SubscriptionsTable";

import { SubscriptionService } from "../../services/subscription.service";

const filter_page = {
    page: 1,
    size: 10,
    total: 0
}

export const SubscriptionView = () => {

    const subscriptionService = new SubscriptionService()

    const [show_form, setShowForm] = useState(false);
    const [subscriptions, setSubscriptions] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(false)

    const { setComponet, setOpen, setTitle } = useContext(ModalContext)
    const { showToastMessange } = useContext(ToastContext);

    const [pagination, setPagination] = useState(filter_page);
    const [filters, setFilters] = useState(filter_page);

    const onModal = (subscription_id: number) => {
        setTitle('Deseja realmente desabilita Assinatura ? ')
        setComponet(<>
            <ConfirmBtn
                onConfirm={(cb = () => {}) => {
                    subscriptionService.cancel(subscription_id)
                        .then(res => {                            
                            showToastMessange("assinatura dasebilitado com sucesso", TypeMessageEnum.success)
                        }).catch(err => {
                            showToastMessange(err?.response?.data?.message || "Error Interno", TypeMessageEnum.error)
                        })
                        .finally(() => {
                            cb()
                            setOpen(false);
                            getSubscriptions();
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

    const getSubscriptions = () => {
        setLoading(true)
        subscriptionService.findAll(filters)
            .then(res => {
                setSubscriptions(res.data?.content)
                setPagination({
                    page: res.data?.number + 1,
                    size: res.data?.size,
                    total: res.data?.totalPages
                })
            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getSubscriptions()
    }, [filters])

    return (
        <>
            {
                !show_form && <SubscriptionsTable
                    loading={loading}
                    setFilters={setFilters}
                    pagination={pagination}
                    subscriptions={subscriptions}
                    onCreate={() => setShowForm(true)}
                    onDisable={(subscription_id: number) => { onModal(subscription_id) }}
                    onAddBenfitis={() => onModalAddBenefits()}
                />
            }
            {
                show_form && <PlanForm onCancel={() => setShowForm(false)} onAfterCreate={() => { setShowForm(false) }} />
            }
        </>

    )
}
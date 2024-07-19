import { useEffect, useState } from "react"
import { IPlan } from "../../interfaces/plan.interface"
import { api } from "../../config/axios.base"

export const DetailOrderPlan = ({ plan }: any) => {

    const getAmountMonth = () => {
        let amount = plan?.price;
        const benefits = plan?.benefits || [];

        for (const ben of benefits) {
            amount = (amount - ben.amount).toFixed(2)
        }

        return amount;
    }

    // useEffect(() => {
    //     api().get(`/plans/${planId}`)
    //         .then((res) => {
    //             setPlan(res.data)
    //         })
    // }, [plan])

    return (
        <div className="flex w-[250px] flex-col align-left space-y-10">
            <div className="font-bold">Resumo do Pedido</div>
            <hr />
            <div className="flex justify-between">
                <div>Mensalidade: </div>
                <div>R$ {getAmountMonth()} </div>
            </div>

            {
                plan?.benefits?.map((ben: any) => (<div className="flex justify-between">
                    <div>Total Pass: </div>
                    <div>R$ {ben.amount} </div>
                </div>))
            }

            <div className="flex justify-between font-bold">
                <div>Total: </div>
                <div>R$ {plan?.price} </div>
            </div>
        </div>
    )
}
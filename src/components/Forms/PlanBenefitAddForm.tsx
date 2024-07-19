import { useFormik } from "formik"
import { useState } from "react"
import { PlanService } from "../../services/plan.service"
import { Button } from "../Button/Button"
import { WarningError } from "../Errors/warning.error"
import { SelectBenefitsPlan } from "../Select/Select.BenefitsPlan"

export const PlanBenefitAddForm = ({ initialValues = {}, onCancel = () => { }, onAfterCreate = () => { }, plan_id }: any) => {

    const planService = new PlanService()

    const [loading, setLoading] = useState(false)

    const formik = useFormik<any>({
        initialValues,
        onSubmit: (values) => {
            onSubmit(values)
        }
    })

    const onSubmit = (values: any) => {
        setLoading(true)

        planService.addRelatBenfit(plan_id, values.benefit_id)
            .then(res => {
                formik.resetForm({ values: { benefit_id: null } })
                onAfterCreate()
            }).catch(err => {
                formik.setErrors({ message: err?.response?.data?.message })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="bg-white mt-5 shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 rounded-md space-y-10">
            <WarningError title="Novo Plano" description={formik.errors?.message} />

            <form onSubmit={formik.handleSubmit}>
                <div className="flex md:flex-row flex-col gap-2 md:gap-4 mt-4">
                    <SelectBenefitsPlan onChange={formik.handleChange} value={formik.values.benefit_id} />
                </div>

                <div className="flex md:flex-row flex-col gap-3 md:gap-4 mt-4">
                    <Button text="CANCELAR" type="button" hasIcon={false} loading={loading} onClick={() => onCancel()} />

                    <Button text="SALVAR" type="submit" hasIcon={false} loading={loading} />
                </div>

            </form>
        </div>
    )
}
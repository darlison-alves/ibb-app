import { useFormik } from "formik"
import { useState } from "react"
import { PlanService } from "../../services/plan.service"
import { Button } from "../Button/Button"
import { CheckBox } from "../CheckBox/checkbox.form"
import { WarningError } from "../Errors/warning.error"
import { Input } from "../Input/Input"
import { InputCurrency } from "../Input/InputCurrency"
import { TitleSecudary } from "../StepsTitle/StepsTitle"

export const PlanBenefitForm = ({ initialValues = {}, onCancel = () => { }, onAfterCreate = () => { } }: any) => {

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

        planService.addBenefit(values)
            .then(res => {
                formik.resetForm({ values: { name: '', amount: null } })
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
            <WarningError title="Novo Beneficios" description={formik.errors?.message} />

            <form onSubmit={formik.handleSubmit}>
                <div className="flex md:flex-row flex-col gap-2 md:gap-4 mt-4">
                    <div className="md:max-w-[500px] w-full mb-3">
                        <Input
                            name="name"
                            focusPlaceholder="Nome"
                            placeholder="Nome"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div className="">
                        <InputCurrency
                            setValue={(value: string) => {
                                formik.setFieldValue('amount', value)
                            }}
                            focusPlaceholder="Valor" />
                    </div>

                </div>
                <div className="flex md:flex-row flex-col gap-3 md:gap-4 mt-4">
                    <Button text="CANCELAR" type="button" hasIcon={false} loading={loading} onClick={() => onCancel()} />

                    <Button text="SALVAR" type="submit" hasIcon={false} loading={loading} />
                </div>

            </form>
        </div>
    )
}
import { useFormik } from "formik"
import { useContext, useEffect, useRef, useState } from "react"
import { ToastContext } from "../../context/ToastContext"
import { BankAccountStatus, IBankData } from "../../interfaces/bank.interface"
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum"
import { BankService } from "../../services/bank.service"
import { getResponseError } from "../../utils/tratamento.response-error"
import { Button, ButtonPrimary } from "../Button/Button"
import { Input } from "../Input/Input"
import { Loading } from "../Loading/loading.full.compoment"
import { SelectBanks } from "../Select/Select.Banks"
import { SelectAccountType } from "../Select/Select.TypeAccount"

interface IBankDataProps {
  initialValues: IBankData;
  userId: number;
  username: string;
  cb?: Function;
  cb_err?: Function
}

const bankService = new BankService()

export const BankDataForm = ({ initialValues, userId, username, cb = () => { }, cb_err = () => { } }: IBankDataProps) => {

  const [loadingActivate, setLoadingActivate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loading_get, setLoadingget] = useState(false)


  const formik = useFormik<IBankData>({

    initialValues,
    onSubmit: (values) => {
      submit(values)
    },
  })

  useEffect(() => {
    setLoadingget(true)
    if (username)
      bankService.getProfile(username)
        .then(res => {
          formik.setValues(res.data.contaBancaria)
        }).catch(err => {
          console.log('err', err)
        }).finally(() => {
          setLoadingget(false);
        })
  }, [username])

  const submit = (data: IBankData) => {
    setLoading(true);
    bankService.createOrUpdate(data, userId)
      .then(res => {
        formik.setValues(res.data)
        cb()
      }).catch(err => {
        const message = getResponseError(err)
        cb_err(message)
      }).finally(() => {
        setLoading(false)
      })
  }

  const activate = () => {
    setLoadingActivate(true)
    bankService.activateAccount(userId)
      .then(res => {

      }).catch(err => {
        const message = getResponseError(err)

      }).finally(() => { setLoadingActivate(false) })
  }

  const isNotPending = () => {
    if ((formik.values.id && !formik.values.status) || formik.values.status === BankAccountStatus.PENDING)
      return false
    return true
  }

  return (
    <>
      {loading_get && (
        <div
          className="flex justify-center max-w-full md:max-w-[830px] w-[500px] mb-10 p-5 overflow-x-hidden rounded-md"
        >
          <Loading size={10} />
        </div>)}

      {!loading_get && (
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md"
        >
          <div className="flex md:flex-row flex-col gap-3 md:gap-4">
            <div className="md:max-w-[515px] w-full">
              <SelectBanks onChange={async (opt: any) => {
                await formik.setFieldValue("codigoBanco", opt.codigo)
                // await formik.setFieldValue("id", opt.id)
                await formik.setFieldValue("banco", opt.nome)
              }} bank={{
                id: formik.values.id,
                codigo: formik.values.codigoBanco,
                nome: formik.values.banco
              }} />
            </div>

            <div className="md:max-w-[270px] w-full">
              <SelectAccountType onChange={formik.handleChange} value={formik.values.tipo} />
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-3 md:gap-4 mt-4">
            <div className="md:max-w-[270px] w-full">
              <Input
                name="agencia"
                focusPlaceholder="Agência"
                placeholder="Agência"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.agencia}
              />
            </div>

            <div className="md:max-w-[170px] w-full">
              <Input
                name="digitoAgencia"
                focusPlaceholder="Digito Agência"
                placeholder="Digito Agência"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.digitoAgencia}
                required={false}
              />
            </div>

            <div className="md:max-w-[270px] w-full">
              <Input
                name="conta"
                focusPlaceholder="Conta"
                placeholder="Conta"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.conta}
              />
            </div>

            <div className="md:max-w-[120px] w-full">
              <Input
                name="digitoConta"
                focusPlaceholder="Digito Conta"
                placeholder="Digito Conta"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.digitoConta}
              />
            </div>
          </div>

          <div className="flex items-baseline my-4">
            <h3 className="font-semibold text-gray-500 mr-2">status conta: </h3>
            <h6 className="text-gray-900 text-sm font-semibold" >{formik.values.status}</h6>
          </div>

          <section className="flex justify-between text-sm space-x-10">
            <div className="w-[30%]">
              <Button
                disabled={isNotPending()}
                onClick={() => activate()}
                loading={loadingActivate}
                text="Ativar"
                type="button"
                hasIcon={false}
              />
            </div>
            <div className="w-[30%]">
              <Button
                onClick={() => { }}
                loading={loading}
                text="Salvar"
                type="submit"
                hasIcon={false}
              />
            </div>
          </section>
        </form>
      )}
    </>
  )
}
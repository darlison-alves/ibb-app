import { FormikConfig, FormikValues, useFormik } from "formik"
import { useEffect, useState } from "react"
import { BankAccountStatus, IBankData } from "../../interfaces/bank.interface"
import { BankService } from "../../services/bank.service"
import { getResponseError } from "../../utils/tratamento.response-error"
import { Flex, Input } from "antd"
import { SelectBanks } from "../Select/Select.Banks"
import { SelectAccountType } from "../Select/Select.TypeAccount"

import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface IBankDataProps {
  formik: FormikValues
  // initialValues: IBankData;
  // userId: number;
  // username: string;
  // cb?: Function;
  // cb_err?: Function
}


export const BankDataForm = ({formik }: IBankDataProps) => {

  const [loadingActivate, setLoadingActivate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loading_get, setLoadingget] = useState(false)
  formik

  // const formik = useFormik<IBankData>({

  //   initialValues,
  //   onSubmit: (values) => {
  //     console.log('values',values);
  //     // submit(values)
  //   },
  // })

  // useEffect(() => {
  //   setLoadingget(true)
  //   if (username)
  //     bankService.getProfile(username)
  //       .then(res => {
  //         formik.setValues(res.data.contaBancaria)
  //       }).catch(err => {
  //         console.log('err', err)
  //       }).finally(() => {
  //         setLoadingget(false);
  //       })
  // }, [username])

  // const submit = (data: IBankData) => {
  //   setLoading(true);
  //   bankService.createOrUpdate(data, userId)
  //     .then(res => {
  //       formik.setValues(res.data)
  //       cb()
  //     }).catch(err => {
  //       const message = getResponseError(err)
  //       cb_err(message)
  //     }).finally(() => {
  //       setLoading(false)
  //     })
  // }

  

  // const isNotPending = () => {
  //   if ((formik.values.id && !formik.values.status) || formik.values.status === BankAccountStatus.PENDING)
  //     return false
  //   return true
  // }

  return (
    <form
          // onSubmit={formik.handleSubmit}
          className="bg-white shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md"
        >
      <Flex gap="middle" className="mb-6" >

        <SelectBanks onChange={async (opt: any) => {
          await formik.setFieldValue("codigoBanco", opt.value)
          await formik.setFieldValue("banco", opt.label)
        }} bank={{
          id: formik.values.id,
          value: formik.values.codigoBanco,
          label: formik.values.banco
        }} />

        <SelectAccountType onChange={formik.handleChange} value={formik.values.tipo} />
      </Flex>
      
      <Flex gap="middle" className="mb-6">
        <Input name="agencia" placeholder="Agência" type="text" onChange={formik.handleChange}
          value={formik.values.agencia} />

        <Input name="digitoAgencia" placeholder="Digito Agência" type="text" onChange={formik.handleChange}
          value={formik.values.digitoAgencia} className="w-[200px]" />

      </Flex>
      <Flex gap="middle" >
        <Input name="conta" placeholder="conta" type="text" onChange={formik.handleChange}
          value={formik.values.conta} />

        <Input name="digitoConta" placeholder="Digito Conta" type="text" onChange={formik.handleChange}
          value={formik.values.digitoConta} className="w-[200px]" />

      </Flex>
    </form>

    // <>
    //   {loading_get && (
    //     <div
    //       className="flex justify-center max-w-full md:max-w-[830px] w-[500px] mb-10 p-5 overflow-x-hidden rounded-md"
    //     >
    //       <Loading size={10} />
    //     </div>)}

    //   {!loading_get && (
    //     <form
    //       onSubmit={formik.handleSubmit}
    //       className="bg-white shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md"
    //     >
    //       <div className="flex md:flex-row flex-col gap-3 md:gap-4">
    //         <div className="md:max-w-[515px] w-full">
    //           <SelectBanks onChange={async (opt: any) => {
    //             await formik.setFieldValue("codigoBanco", opt.codigo)
    //             // await formik.setFieldValue("id", opt.id)
    //             await formik.setFieldValue("banco", opt.nome)
    //           }} bank={{
    //             id: formik.values.id,
    //             codigo: formik.values.codigoBanco,
    //             nome: formik.values.banco
    //           }} />
    //         </div>

    //         <div className="md:max-w-[270px] w-full">
    //           <SelectAccountType onChange={formik.handleChange} value={formik.values.tipo} />
    //         </div>
    //       </div>

    //       <div className="flex md:flex-row flex-col gap-3 md:gap-4 mt-4">
    //         <div className="md:max-w-[270px] w-full">
    //           <Input
    //             name="agencia"
    //             focusPlaceholder="Agência"
    //             placeholder="Agência"
    //             type="text"
    //             onChange={formik.handleChange}
    //             value={formik.values.agencia}
    //           />
    //         </div>

    //         <div className="md:max-w-[170px] w-full">
    //           <Input
    //             name="digitoAgencia"
    //             focusPlaceholder="Digito Agência"
    //             placeholder="Digito Agência"
    //             type="text"
    //             onChange={formik.handleChange}
    //             value={formik.values.digitoAgencia}
    //             required={false}
    //           />
    //         </div>

    //         <div className="md:max-w-[270px] w-full">
    //           <Input
    //             name="conta"
    //             focusPlaceholder="Conta"
    //             placeholder="Conta"
    //             type="text"
    //             onChange={formik.handleChange}
    //             value={formik.values.conta}
    //           />
    //         </div>

    //         <div className="md:max-w-[120px] w-full">
    //           <Input
    //             name="digitoConta"
    //             focusPlaceholder="Digito Conta"
    //             placeholder="Digito Conta"
    //             type="text"
    //             onChange={formik.handleChange}
    //             value={formik.values.digitoConta}
    //           />
    //         </div>
    //       </div>

    //       <div className="flex items-baseline my-4">
    //         <h3 className="font-semibold text-gray-500 mr-2">status conta: </h3>
    //         <h6 className="text-gray-900 text-sm font-semibold" >{formik.values.status}</h6>
    //       </div>

    //       <section className="flex justify-between text-sm space-x-10">
    //         <div className="w-[30%]">
    //           <Button
    //             disabled={isNotPending()}
    //             onClick={() => activate()}
    //             loading={loadingActivate}
    //             text="Ativar"
    //             type="button"
    //             hasIcon={false}
    //           />
    //         </div>
    //         <div className="w-[30%]">
    //           <Button
    //             onClick={() => { }}
    //             loading={loading}
    //             text="Salvar"
    //             type="submit"
    //             hasIcon={false}
    //           />
    //         </div>
    //       </section>
    //     </form>
    //   )}
    // </>
  )
}
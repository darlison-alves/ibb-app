import { useFormik } from 'formik';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdPassword } from 'react-icons/md';
import { SuccessAlert } from '../Alerts/success.alert';
import { WarningAlert } from '../Alerts/warning.alert';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Title } from '../StepsTitle/StepsTitle';

interface IRecoverPasswordFormPropos {
  hasCurrentPassword: boolean;
  onSubmit: any;
  responseError: string | null;
  responseSuccess?: string | null;
  loading: boolean;
  title: string;
  description: string;
}

interface IRecoverPassword {
  currentPassword?: string;
  password: string;
  confirm: string;
}

export const RecoverPasswordForm = ({
  hasCurrentPassword = false,
  onSubmit = () => { },
  responseError = null,
  loading = false,
  responseSuccess = null,
  title = "",
  description = ""
}: IRecoverPasswordFormPropos) => {

  const formik = useFormik<IRecoverPassword>({
    initialValues: { confirm: "", password: "" },
    onSubmit(values) {
      onSubmit(values)
    },
  })

  return (
    <div className='mt-10'>
      <form name='login' onSubmit={formik.handleSubmit} className="bg-white shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md" >
        <section>
          <Title step="1" title={title} />
          <p className="text-base font-light my-3">
            {description}
          </p>
          {responseError && <WarningAlert text={responseError} />}
          {responseSuccess && <SuccessAlert text={responseSuccess} />}

          <div className='space-y-4'>

            {hasCurrentPassword && (<Input
              hasIcon={true}
              icon={
                <MdPassword
                  className="absolute top-[14px] left-[12px]"
                  color="#92979A"
                  size={20}
                />
              }
              name="currentPassword"
              value={formik.values.currentPassword}
              placeholder="Senha atual"
              type="password"
              onChange={formik.handleChange}
              focusPlaceholder="Senha Atual"
            />)}

            <Input
              hasIcon={true}
              icon={
                <MdPassword
                  className="absolute top-[14px] left-[12px]"
                  color="#92979A"
                  size={20}
                />
              }
              name="password"
              value={formik.values.password}
              placeholder="Nova Senha"
              type="password"
              onChange={formik.handleChange}
              focusPlaceholder="Nova Senha"
            />

            <Input
              hasIcon={true}
              icon={
                <MdPassword
                  className="absolute top-[14px] left-[12px]"
                  color="#92979A"
                  size={20}
                />
              }
              name="confirm"
              value={formik.values.confirm}
              placeholder="Confirmar Nova Senha"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              focusPlaceholder="Confirmar Nova Senha"
            />
          </div>
        </section>

        <section className='my-3' >

          {loading ? (<button
            type="button"
            className="bg-[#f3c2a0] text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md disabled:opacity-50"
            disabled={loading}
          >
            Processando...
            <AiOutlineLoading3Quarters className="animate-spin" />
          </button>) : <Button type="submit" text="Enviar" hasIcon={false} />}

        </section>
      </form>
    </div>
  )
}
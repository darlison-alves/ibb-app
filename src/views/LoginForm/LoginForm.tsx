import React, { useContext, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { WarningAlert } from '../../components/Alerts/warning.alert';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Title } from '../../components/StepsTitle/StepsTitle';
import { api } from '../../config/axios.base';
import { IsLoggedContext } from '../../context/IsLoggedContext';
import { login } from '../../services/auth';

import { loginSchema } from './loginSchema';

const LoginForm = () => {
  const [errors, setErrors] = useState<(string | number)[]>([]);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState("");

  const navigate = useNavigate()

  const { setIsLogged } = useContext(IsLoggedContext)

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true)
    setResponseError("")
    const validated = loginSchema.validate(loginData)

    // setErrors(validated.error?.details)

    if (validated.error?.details.length) {
      const [detail] = validated.error?.details
      setErrors(detail.path)
      setLoading(false)
    } else {
      setErrors([])
      api().post("/auth/signin", {
        ...validated.value,
        usernameOrEmail: validated.value.email
      })
        .then(res => {
          login(res.data.accessToken)
          setIsLogged(true)
          navigate("/")
        }).catch(err => {
          setResponseError(err?.response?.data?.message)
        }).finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <div className='mt-10 min-h-screen'>
      <form name='login' onSubmit={onSubmit} className="bg-white shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md" >
        <section>
          <Title step="1" title="Efetuar Login" />

          <p className="text-base font-light my-3">
            Digite seus dados de login e senha!
          </p>
          {responseError && <WarningAlert text="Usuário ou senha inválido" />}
          <Input
            hasIcon={true}
            error={errors.find((err) => err === "email") ? true : false}
            icon={
              <MdEmail
                className="absolute top-[14px] left-[12px]"
                color="#92979A"
                size={20}
              />
            }
            name="email"
            value={loginData.email}
            placeholder="Seu e-mail"
            type="text"
            onChange={(e) => setLoginData(old => ({ ...old, email: e.target.value }))}
            focusPlaceholder="E-mail"
          />
          {/* </div> */}
        </section>
        <section className='my-3'>
          <Input
            hasIcon={true}
            error={errors.find((err) => err === "password") ? true : false}
            icon={
              <MdPassword
                className="absolute top-[14px] left-[12px]"
                color="#92979A"
                size={20}
              />
            }
            name="password"
            value={loginData.password}
            placeholder="Sua senha"
            type="password"
            onChange={(e) => setLoginData(old => ({ ...old, password: e.target.value }))}
            focusPlaceholder="Senha"
          />

        </section>
        <section>

          {loading ? (<button
            type="button"
            className="bg-[#f3c2a0] text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md disabled:opacity-50"
            disabled={loading}
          >
            Processando...
            <AiOutlineLoading3Quarters className="animate-spin" />
          </button>) : <Button type="submit" text="Logar" />}

        </section>
        <Link to={'/recover-password'} >
          <p className="my-3 text-primary text-base font-light">esqueceu sua senha ?</p>
        </Link>
      </form>
    </div>
  )
}

export default LoginForm;
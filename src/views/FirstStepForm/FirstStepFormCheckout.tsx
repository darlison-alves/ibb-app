import React, { CSSProperties, useEffect, useState } from "react";
import { StepsTitle, Title, TitleSecudary } from "../../components/StepsTitle/StepsTitle";
import { MdEmail } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import { Input } from "../../components/Input/Input";
import { MaskedInput } from "../../components/InputMask/InputMask";
import axios from "axios";
import { Button } from "../../components/Button/Button";
import { FirstStepFormProps } from "./FirstStepForm.types";
import { validateMaskedInput } from "../../utils/validateMaskedInput";
import { useUpdateFirstFormData } from "../../context/FormContext";
import { statesOption } from "../../utils/optionsData";
import { useParams } from "react-router-dom";
// import { api } from "../../services/api";
import Swal from "sweetalert2";
import { api } from "../../config/axios.base";

import { getBgColorByPlanId } from "../../config/utils.color";
import { IPlan } from "../Subscription/payload.interface";
import { useQuery } from "../../hooks/useQuery";
import { DateInput } from "../../components/Input/DateInput";
import { SelectGender } from "../../components/Select/Select.Gender";
import { PasswordForm } from "../../components/Forms/Password.Form";
import { CheckBox } from "../../components/CheckBox/checkbox.form";

import politica from "../../assets/docs/politica.pdf"
import adessao from "../../assets/docs/adesao_associado.pdf"
import { SelectPlans } from "../../components/Select/Select.Plans.Promo";

const FirstStepFormCheckout = ({ nextStepForm }: FirstStepFormProps) => {
  //states for error
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [isCepDefined, setIsCepDefined] = useState(false);
  //states for store the inputs value
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Estado");
  const [cpf, setCpf] = useState("");
  const [codeIBGE, setCodeIBGE] = useState("");
  const [birth_date, setBirthDate] = useState<string>("");
  const [gender, setGenter] = useState<string>("");

  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")

  const [codigoIndicacao, setCodigoIndicacao] = useState("")

  const [aceiteContratoAdesao, setAceiteContratoAdesao] = useState<boolean>(false);
  const [politicaPrivacidade, setPoliticaPrivacidade] = useState<boolean>(false);

  const [planId, setPlanId] = useState("")
  const [plan, setPlan] = useState<IPlan>({ id: 0, name: '', price: 0, tag: '' })

  const [configStyle, setConfigStyle] = useState<CSSProperties>({})

  const updateFirstFormData = useUpdateFirstFormData();


  const { tag_plan } = useParams()

  const query = useQuery()

  useEffect(() => {
    setCodigoIndicacao(query.get("codeRecommendation") || "")
  }, [])

  useEffect(() => {
    if (planId) {
      api().get('/plans/' + planId)
        .then(res => {
          setPlan(res.data)
          setConfigStyle(getBgColorByPlanId(res.data.tag))
        })
    }
  }, [planId])

  const checkForErrors = (error: string) => {
    return errors.find((err) => err === error) ? true : false;
  };

  const validateEmailInput = (value: string) => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (value.match(pattern)) {
      return true;
    } else {
      return false;
    }
  };

  const getEmailInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateEmailInput(e.target.value)) {
      setErrors((currState) => {
        return currState.filter((err) => err !== "email");
      });
    } else {
      setErrors((currState) => [...currState, "email"]);
    }
    setEmail(e.target.value);
  };

  const getCpfValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateMaskedInput(e.target.value)) {
      setErrors((currState) => {
        return currState.filter((err) => err !== "cpf");
      });
    } else {
      setErrors((currState) => [...currState, "cpf"]);
    }
    setCpf(e.target.value);
  };

  const getCellPhoneInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateMaskedInput(e.target.value)) {
      setErrors((currState) => {
        return currState.filter((err) => err !== "phone");
      });
    } else {
      setErrors((currState) => [...currState, "phone"]);
    }
    setPhone(e.target.value);
  };

  const getTagPlan = () => {
    switch(tag_plan) {
      case 'familiar-premium':
        return 'PROTECAO_FAMILIAR_PREMIUM'
      case 'familiar-gold':
        return 'PROTECAO_FAMILIAR_GOLD'
      case 'essencial':
        return 'PROTECAO_ESSENCIAL'
      case 'especial':
        return 'PROTECAO_ESPECIAL'
      case 'compacto':
        return 'PROTECAO_COMPACTA'
      default:
        return ''
    }
  }

  const getSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "Estado") {
      setErrors((currState) => {
        return currState.filter((err) => err !== "state");
      });
    } else {
      setErrors((currState) => [...currState, "state"]);
    }
    setState(e.target.value);
  };

  const handleAutoCompleteAddress = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCep(e.target.value);

    if (validateMaskedInput(e.target.value)) {
      setErrors((currState) => {
        return currState.filter((err) => err !== "cep");
      });
    } else {
      setErrors((currState) => [...currState, "cep"]);
    }

    if (e.target.value.includes("_")) return;

    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${e.target.value}/json/`
      );

      setAddress(response.data.logradouro);
      // setComplement(response.data.complemento)
      setDistrict(response.data.bairro);
      setCity(response.data.localidade);
      setState(response.data.uf);
      setCodeIBGE(response.data.ibge);

      setIsCepDefined(true);
    } catch (err: any) {
      console.error(err);
    }
  };

  const goToNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "Estado") {
      setErrors((currState) => [...currState, "state"]);
      return;
    }
    setErrors((currState) => currState.filter((err) => err !== "state"));

    let userInfo = {
      nome: `${firstName} ${lastName}`,
      email: email,
      cpf: cpf.replace(/[.-]/g, ''),
      telefone: phone.replace(/[()-\s]/g, ''),
      planoId: planId,
      codigoIndicacao,
      dataNascimento: birth_date,
      sexo: gender,
      senha: password,
      aceiteContratoAdesao,
      politicaPrivacidade
    };


    let addressInfo = {
      cep: cep,
      logradouro: address,
      bairro: district,
      cidade: city,
      estado: state,
      codeIBGE: codeIBGE,
      numero: number
    };
    setIsPending(true);
    try {
      const userSignupInfoResponse = await api().post(
        "/auth/signup",
        userInfo
      );

      const addressUserInfoRespose = await api().post(
        `/address/${userSignupInfoResponse.data.user.id}/me`,
        addressInfo
      );

      updateFirstFormData(userSignupInfoResponse.data.user.id);
      localStorage.setItem("planId", planId)
      nextStepForm();
    } catch (err: any) {
      console.error(err?.response?.data?.message);
      setIsPending(false);
      Swal.fire({
        title: "Alguma coisa deu errado :(",
        text: err?.response?.data?.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      {/* <div
        style={configStyle}
        className={`text-[#555] text-4xl max-w-full md:max-w-[830px] w-full mx-auto shadow-sm h-[300px] object-cover relative`}
      >
      </div> */}
      <form
        onSubmit={goToNextStep}
        className="bg-white mt-5 shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md"
      >
        {/* <div className="my-5 text-center text-gray-500 space-x-2">
          <TitleSecudary title={plan.name.replace(' ', `\n`)} step="" style="justify-center" />
          <h5 className="bold font-roboto">{formatter.format(plan.price)}</h5>
        </div> */}
        <section>
          <StepsTitle step="1" title="Dados pessoais" />

          <p className="text-base font-light my-3">
            Digite seus dados pessoais abaixo para iniciar a sua assinatura.
          </p>

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
            value={email}
            placeholder="Seu e-mail"
            type="Email"
            onChange={getEmailInputValue}
            focusPlaceholder="E-mail"
          />

          <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
            <MaskedInput
              error={checkForErrors("cpf")}
              mask="999.999.999-99"
              placeholder="CPF"
              onChange={getCpfValue}
              type="text"
              value={cpf}
              focusPlaceholder="CPF"
            />

            <DateInput defaultValue={birth_date} onChange={(date: string) => {
              setBirthDate(date)
            }} />
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 my-4 gap-4">
            <Input
              placeholder="Seu nome"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              focusPlaceholder="Seu Nome"
            />

            <Input
              placeholder="Seu sobrenome"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              focusPlaceholder="Seu sobrenome"
            />

            <MaskedInput
              error={checkForErrors("phone")}
              mask="(99) 99999-9999"
              onChange={getCellPhoneInputValue}
              type="text"
              value={phone}
              placeholder="(__) _____-____"
              focusPlaceholder="Telefone"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
            <SelectGender onChange={(g: string) => setGenter(g)} value={gender} />
          </div>
        </section>

        <section className="my-3">
          <StepsTitle step="2" title="Plano" />

          <p className="text-base font-light my-3">
            escolha o plano que deseja.
          </p>

          <SelectPlans onChange={(event: any) => {
            setPlanId(event.target.value)
          }} value={planId} filterTag={getTagPlan()} />

        </section>

        <section>
          <StepsTitle step="3" title="Indicação" />

          <p className="text-base font-light my-3">
            Caso tenho código de Indicação informe aqui.
          </p>
          <div className="my-3">
            <Input
              required={false}
              placeholder="Código Indicação"
              type="text"
              onChange={(e) => setCodigoIndicacao(e.target.value)}
              value={codigoIndicacao}
              focusPlaceholder="Código indicação"
            />
          </div>
        </section>

        <section>
          <StepsTitle step="4" title="Seu endereço" />

          <p className="text-base font-light my-3">
            Digite o CEP para onde vamos enviar o seu pedido abaixo.
          </p>

          <div className="md:max-w-[252px] w-full">
            <MaskedInput
              error={checkForErrors("cep")}
              hasIcon={true}
              icon={
                <BsFillHouseFill
                  className="absolute top-[14px] left-[12px]"
                  color="#92979A"
                  size={20}
                />
              }
              mask="99999-999"
              placeholder="00000-000"
              onChange={handleAutoCompleteAddress}
              value={cep}
              type="text"
              focusPlaceholder="CEP"
            />
          </div>

          {isCepDefined && (
            <div className="my-3">
              <div className="flex md:flex-row flex-col gap-3 md:gap-4">
                <div className="md:max-w-[515px] w-full">
                  <Input
                    placeholder="Endereço (ex: rua joaquina dos santos)"
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    focusPlaceholder="Endereço"
                  />
                </div>

                <div className="md:max-w-[270px] w-full">
                  <Input
                    placeholder="Número"
                    type="text"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    focusPlaceholder="Número"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 my-3 gap-4">
                <Input
                  placeholder="Complemento"
                  type="text"
                  onChange={(e) => setComplement(e.target.value)}
                  value={complement}
                  focusPlaceholder="Complemento"
                  required={false}
                />
                <Input
                  placeholder="Bairro"
                  type="text"
                  onChange={(e) => setDistrict(e.target.value)}
                  value={district}
                  focusPlaceholder="Bairro"
                />
              </div>

              <div className="grid md:grid-cols-2 my-3 gap-4">
                <Input
                  placeholder="Cidade"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  focusPlaceholder="Cidade"
                />
                <select
                  value={state}
                  onChange={getSelectValue}
                  className={`px-3 py-3 text-base font-semibold text-secondary border rounded-[4px] w-full placeholder:text-secondary transition-colors placeholder:text-base focus:outline-none focus:ring-2  
          ${checkForErrors("state")
                      ? "border-red-700 focus:ring-red-700"
                      : "border-[#CED4DA] focus:ring-primary"
                    }`}
                >
                  <option value="Estado">Estado</option>
                  {statesOption.map((state) => {
                    return (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          )}

          <section className="my-3">
            <StepsTitle step="5" title="Definir Senha" />
            <PasswordForm handleChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              if (evt.target.name === 'password') {
                setPassword(evt.target.value)
              }

              if (evt.target.name === 'repassword') {
                setRepassword(evt.target.value)
              }

            }} password={password} repassword={repassword} />
          </section>

          <section>
            <div className="flex my-4 justify-between">
              <div className="flex space-x-2">
                <CheckBox
                  name="politicaPrivacidade"
                  htmlFor="politicaPrivacidade"
                  description="Politica de Privacidade"
                  checked={politicaPrivacidade}
                  onChange={(evt) => {
                    setPoliticaPrivacidade(evt.target.checked)
                  }}
                /> <a href={politica}
                  target="_blank"
                  download="PiliticaPrivacidade.pdf" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">clique aqui</a>
              </div>

              <div className="flex space-x-2">
                <CheckBox
                  name="aceiteContratoAdesao"
                  htmlFor="aceiteContratoAdesao"
                  onChange={(evt) => {
                    setAceiteContratoAdesao(evt.target.checked)
                  }}
                  description="Contrato de adesão"
                  checked={aceiteContratoAdesao} />
                <a
                  href={adessao}
                  target="_blank"
                  download="ContratoAdessao.pdf"
                  className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">clique aqui</a>
              </div>
            </div>
          </section>

          <section className="mt-7 flex md:flex-row flex-col items-center justify-between gap-4">
            <div className="flex text-primary items-center gap-3">
              <HiLockClosed size={30} />
              <p className="text-base font-normal">
                Você está em uma página segura
              </p>
            </div>
            <div className="md:max-w-[300px] w-full">
              {isPending ? (
                <button
                  type="button"
                  className="bg-primary text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md disabled:opacity-50"
                  disabled={isPending}
                >
                  Processando
                  <AiOutlineLoading3Quarters className="animate-spin" />
                </button>
              ) : (
                <Button type="submit" text="Continuar" />
              )}
            </div>
          </section>
        </section>
      </form>
    </>
  );
};

export default FirstStepFormCheckout;

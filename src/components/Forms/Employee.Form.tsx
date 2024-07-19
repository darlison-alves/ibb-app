import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IAddress } from "../../interfaces/address.interface";
import { IClientUser } from "../../interfaces/clientUser.iterface";
import { validateEmailInput, validateMaskedInput } from "../../utils/validateMaskedInput";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { MaskedInput } from "../InputMask/InputMask";
import { SelectActivateUser } from "../Select/Select.Activate";
import { StepsTitle } from "../StepsTitle/StepsTitle";
import { AddressForm } from "./Address.Form";
import { SelectPlans } from "../Select/select.plans.search";
import { DateInput } from "../Input/DateInput";

interface IClientFormProps {
  initiValues: IClientUser
  id?: number;
  onSubmit: any;
  loading?: boolean
}

export const EmployeeForm = ({ initiValues = {}, id, onSubmit = () => {}, loading  = false}: IClientFormProps) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [isActive, setActive] = useState(false);

  const [address, setAddress] = useState<IAddress>({})

  const [cpf, setCpf] = useState("");

  const [plan, setPlan] = useState<any>();
  const [birth_date, setBirthDate] = useState<string>("");
  const [gender, setGenter] = useState<string>("");


  useEffect(() => {
    if (initiValues) {
      setEmail(initiValues?.user?.email || "")
      setName(initiValues?.user?.name || "")
      setPhone(initiValues?.telefone || "")
      setCpf(initiValues?.cpf || "")
      setActive(initiValues?.user?.active || false)
      setBirthDate(initiValues?.dataNascimento || "")
      setGenter(initiValues.sexo || "")

    }
  }, [initiValues])

  const goToNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...address,
      email,
      nome: name,
      cpf: cpf.replace(/[.-]/g, ''),
      telefone: phone.replace(/[()-\s]/g, ''),
      ativo: isActive,
      nomeUsuario: cpf.replace(/[.-]/g, ''),
      dataNascimento: birth_date,
      planoId: plan.id,
      sexo: gender
    }
    
    onSubmit({ ...payload, id })
  }

  const checkForErrors = (error: string) => {
    return errors.find((err) => err === error) ? true : false;
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

  return (
    <form
      onSubmit={goToNextStep}
      className="bg-white shadow-sm max-w-full md:max-w-[990px] w-full mx-auto mb-10 p-5 rounded-md overflow"
    >
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

        <div className="mt-3">
          <MaskedInput
            error={checkForErrors("cpf")}
            mask="999.999.999-99"
            placeholder="CPF"
            onChange={getCpfValue}
            type="text"
            value={cpf}
            focusPlaceholder="CPF"
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
          <Input
            placeholder="Seu nome"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            focusPlaceholder="Seu Nome"
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

        <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4 mb-14">
          <DateInput defaultValue={birth_date} onChange={(date: string) => {
            setBirthDate(date)
          }} />
        </div>
      </section>

      <section>
        <StepsTitle step="2" title="Configuração" />
        <p className="text-base font-light my-3">
          Escolha o plano do usuário
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
          <SelectPlans value={plan} onChange={(plan: any) => {
            setPlan(plan)
          }} />

          <SelectActivateUser onChange={(value: boolean) => {
            setActive(value)
          } } value={isActive} />
        </div>

      </section>

      <section>
        <StepsTitle step="3" title="Seu endereço" />

        <p className="text-base font-light my-3">
          Digite o CEP:
        </p>

        <AddressForm
          errors={errors}
          setErrors={setErrors}
          initiValues={initiValues?.endereco || {}}
          onChange={(addressChanged: IAddress) => { setAddress(old => ({ ...old, ...addressChanged })) }} />

        <section className="mt-7 flex md:flex-row flex-col items-center justify-between gap-4">
          <div className="flex text-primary items-center gap-3">
            <HiLockClosed size={30} />
            <p className="text-base font-normal">
              Você está em uma página segura
            </p>
          </div>
          <div className="md:max-w-[300px] w-full">
            {loading ? (
              <button
                type="button"
                className="bg-primary text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md disabled:opacity-50"
                disabled={loading}
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
  )
}
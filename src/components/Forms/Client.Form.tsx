import { useContext, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { ToastContext } from "../../context/ToastContext";
import { IAddress } from "../../interfaces/address.interface";
import { IClientUser } from "../../interfaces/clientUser.iterface";
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum";
import { ClientService } from "../../services/client.service";
import { validateEmailInput, validateMaskedInput } from "../../utils/validateMaskedInput";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { MaskedInput } from "../InputMask/InputMask";
import { SelectActivateUser } from "../Select/Select.Activate";
import { SelectPlans } from "../Select/Select.Plans";
import { StepsTitle } from "../StepsTitle/StepsTitle";
import { AddressForm } from "./Address.Form";
import { DateInput } from "../Input/DateInput";
import { SelectGender } from "../Select/Select.Gender";
import { CheckBox } from "../CheckBox/checkbox.form";

interface IClientFormProps {
  initiValues: IClientUser
  id?: number;
}

export const ClientForm = ({ initiValues = {}, id }: IClientFormProps) => {
  const clientService = new ClientService()
  const [errors, setErrors] = useState<string[]>([]);
  const [isPending, setIsPending] = useState(false);
  //states for store the inputs value
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [planId, setPlanId] = useState(0);
  const [isActive, setActive] = useState(false);

  const [address, setAddress] = useState<IAddress>({})

  const [cpf, setCpf] = useState("");
  const [birth_date, setBirthDate] = useState<string>("");
  const [gender, setGenter] = useState<string>("");

  const [aceiteContratoAdesao, setAceiteContratoAdesao] = useState<boolean>(false);
  const [politicaPrivacidade, setPoliticaPrivacidade] = useState<boolean>(false);

  const { showToast, setType } = useContext(ToastContext)

  useEffect(() => {
    if (initiValues) {
      setEmail(initiValues?.user?.email || "")
      setName(initiValues?.user?.name || "")
      setPhone(initiValues?.telefone || "")
      setCpf(initiValues?.cpf || "")
      setPlanId(initiValues?.plan?.id || 0)
      setActive(initiValues?.user?.active || false)
      setBirthDate(initiValues?.dataNascimento || "")
      setGenter(initiValues?.sexo || "")
      setAceiteContratoAdesao(initiValues?.user?.acceptedMembershipContract || false)
      setPoliticaPrivacidade(initiValues?.user?.policyPrivacy  || false)
    }
  }, [initiValues])

  const goToNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true)
    const payload = {
      ...address,
      email,
      nome: name,
      cpf: cpf.replace(/[.-]/g, ''),
      telefone: phone.replace(/[()-\s]/g, ''),
      planoId: planId,
      ativo: isActive,
      nomeUsuario: email,
      dataNascimento: birth_date,
      sexo: gender,
      aceiteContratoAdesao,
      politicaPrivacidade
    }

    if (id) {
      clientService.update({ ...payload, id })
        .then(res => {
          console.log('res', res)
          showToast("atualizado com success")
          setType(TypeMessageEnum.success)
        }).catch(err => {
          console.log('err', err)
          showToast(err.message)
          setType(TypeMessageEnum.error)
        }).finally(() => {
          setIsPending(false)
        })
    } else {
      clientService.create(payload)
        .then(res => {
          setType(TypeMessageEnum.success)
          showToast("criado com success")
        }).catch(err => {
          console.log('err', err)
          showToast(err.message)
          setType(TypeMessageEnum.error)
        }).finally(() => {
          setIsPending(false)
        })
    }
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
      className="bg-white shadow-sm max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md"
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

        <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
          <SelectGender onChange={(g: string) => setGenter(g)} value={gender} />
        </div>
      </section>


      <section>
        <StepsTitle step="2" title="Plano" />
        <p className="text-base font-light my-3">
          Escolha o plano do usuário
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
          <SelectPlans value={planId} onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {
            setPlanId(parseInt(evt.target.value))
          }} />
          <SelectActivateUser onChange={(value: boolean) => {
            setActive(value)
          }} value={isActive} />
        </div>

      </section>

      <section>
        <StepsTitle step="3" title="Seu endereço" />

        <p className="text-base font-light my-3">
          Digite o CEP para onde vamos enviar o seu pedido abaixo.
        </p>

        <AddressForm
          errors={errors}
          setErrors={setErrors}
          initiValues={initiValues?.endereco || {}}
          onChange={(addressChanged: IAddress) => { setAddress(old => ({ ...old, ...addressChanged })) }} />

        <section>
          <div className="flex my-4 justify-between">
            <CheckBox
              name="politicaPrivacidade"
              htmlFor="politicaPrivacidade"              
              description="Politica de Privacidade"
              checked={politicaPrivacidade}
              onChange={(evt) => {
                setPoliticaPrivacidade(evt.target.checked)
              }}
            />            
            <CheckBox
              name="aceiteContratoAdesao" 
              htmlFor="aceiteContratoAdesao" 
              onChange={(evt) => {
                setAceiteContratoAdesao(evt.target.checked)
              }}
              description="Contrato de adesão"
              checked={aceiteContratoAdesao} />
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
  )
}
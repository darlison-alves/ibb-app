import React, { useEffect, useState } from "react";
import { StepsTitle } from "../../components/StepsTitle/StepsTitle";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "../../components/Button/Button";

import { CardPaymentForm } from "../../components/Forms/Card.Form";
import { ICardInfo, OrderWayEnum } from "../../interfaces/payment.interface";
import { ChoosePaymentMethod } from "../../views/SecondStepForm/ChoosePaymentMethod";
import { IPaymentStrategy } from "../../services/strategies/payment.strategy";
import { CardPaymentStrategy } from "../../services/strategies/card.payment.strategy";
import { BankSlipPaymentStrategy } from "../../services/strategies/bankslip.payment.strategy";
import { PixPaymentStrategy } from "../../services/strategies/pix.payment.strategy";
import { BuildInfoPayment } from "./Build.Info.Payment";
import { CupomService } from "../../services/cupom.service";
import { formatter } from "../../utils/price.util";
import { WarningAlert } from "../Alerts/warning.alert";

interface IPaymentFormProps {
  amount: number;
  product_name: string;
  onSubmit: (paymentStrategy: IPaymentStrategy) => {};
  code?: string;
}

const PaymentForm = ({ amount, product_name, onSubmit, code }: IPaymentFormProps) => {

  const cupomService = new CupomService()

  const [isPending, setIsPending] = useState(false);
  const [card, setCard] = useState<ICardInfo>({})
  const [orderWay, setOrderWay] = useState<OrderWayEnum | any>()

  const [hasInfo, setHasInfo] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState<any>({})
  const [resumePayment, setResumePayment] = useState<any>({})
  
  const [errorDescription, setErrorDescription] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorDescription("")
    setIsPending(true);

    try {
      const payment = await onSubmit(buildStrategy())
      console.log('payment', payment)
      setPaymentInfo(payment)
      setHasInfo(true)
    } catch (err: any) {

      setErrorDescription(err?.response?.data?.message)
      // Swal.fire({
      //   title: "Alguma coisa deu errado :(",
      //   text: `Erro: ${err.response.data.message}`,
      //   icon: "error",
      //   confirmButtonText: "OK",
      // });
      setIsPending(false);
    }
  };

  const buildStrategy = () => {
    switch (orderWay) {
      case OrderWayEnum.CC:
      case OrderWayEnum.CD:
        return new CardPaymentStrategy({ orderWay, card })
      case OrderWayEnum.BOL:
        return new BankSlipPaymentStrategy()
      case OrderWayEnum.PIX:
        return new PixPaymentStrategy()
      default:
        throw new Error('Strategy Not implemented')
    }
  }

  useEffect(() => {
    if (orderWay) {
      cupomService.getInfoPayment(code, orderWay)
        .then(res => {
          console.log('res', res.data)
          setResumePayment(res.data)
        }).catch(err => {
          console.log('dde', err)
        })
    }
  }, [orderWay, code])

  return (
    <>
      <div
        className={`text-gray-400 text-4xl max-w-full md:max-w-[830px] w-full mx-auto shadow-sm h-full object-cover`}
      >
        <h4 className="font-semibold p-10" >{product_name}</h4>
        <hr />

        <div className="pl-10 pt-5 text-sm">
          <p>+Taxa IBB: { formatter.format(resumePayment?.ibbTax) }</p>
          <p>+Taxa {}: { formatter.format(resumePayment?.cardTax) }</p>
          <p>+IR: { formatter.format(resumePayment?.incomeTax) } </p>
        </div>

        <div className="pl-10 pt-5 items-baseline text-gray-400 dark:text-white">
          <p className="text-sm">Valor a paga:</p>
          {/* <span className="text-1xl font-semibold">R$</span> */}
          <span className="text-6xl font-extrabold tracking-tight">{formatter.format(resumePayment?.amountPay?.toFixed(2))}</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-full md:max-w-[830px] w-full mx-auto mb-10 p-5 overflow-x-hidden rounded-md shadow-sm"
      >

        {
          hasInfo ?
            <BuildInfoPayment paymentInfo={paymentInfo} />
            :
            <div>
              <StepsTitle step="1" title="Pagamento" />

              <p className="text-base font-light my-3">
                Digite as informações de cobrança para finalizar.
              </p>

              <ChoosePaymentMethod onChange={setOrderWay} />
              {[OrderWayEnum.CC, OrderWayEnum.CD].includes(orderWay) && <CardPaymentForm onChange={(data) => { setCard(old => ({ ...old, ...data })) }} />}

              <div className="flex w-full mt-3">
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
                  <div className="w-full ">
                    <Button text="FINALIZAR COMPRA" type="submit" />
                  </div>
                )}
              </div>
            </div>
        }
        {
          errorDescription && (
            <div className="my-5">
              <WarningAlert text={errorDescription} />
            </div>
          )
        }
      </form>
    </>
  );
};

export default PaymentForm;

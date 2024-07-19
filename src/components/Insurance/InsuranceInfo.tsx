import { useContext, useState } from "react";
import { ToastContext } from "../../context/ToastContext";
import { IInsuranceInfo } from "../../interfaces/insurance.interface"
import { LifeInsuranceService } from "../../services/life-insurance.service";
import { getResponseError } from "../../utils/tratamento.response-error";
import { BtnPrimary } from "../Button/Button"

interface InsuranceInfoProps {
    insurance: IInsuranceInfo;
    afterSuccessCancel: Function;
    afterErrorCancel: Function;
}

export const InsuranceInfo = ({ insurance, afterSuccessCancel = () => {}, afterErrorCancel = () => {} }: InsuranceInfoProps) => {

    const lifeInsuranceService = new LifeInsuranceService();
    const [loading_cancel, setLoadingCancel] = useState(false);
    const { showToastMessange } = useContext(ToastContext)


    const onCancelContract = (operationId: number = 0) => {
        setLoadingCancel(true)
        lifeInsuranceService.cancel(operationId)
            .then(() => {
                afterSuccessCancel();
            })
            .catch(err => {
                const message = getResponseError(err);
                afterErrorCancel(message)
            }).finally(() => {
                setLoadingCancel(false)
            })
    }


    return (
        <div className="w-full bg-white font-normal shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center">
                <div className="flex-1 w-full sm:w-[400px]">
                    <p className="text-sm text-gray-900 dark:text-white">
                        Código Operação:
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {insurance?.operationId}
                    </p>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-white">
                        Apolice:
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {insurance?.apoliceId}
                    </p>
                </div>
                <div className="flex-1 w-full sm:w-[400px]">
                    <p className="text-sm text-gray-900 dark:text-white">
                        ID do Cetificado :
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {insurance?.certificateId}
                    </p>
                </div>
            </div>

            <div className="flex items-center mt-5">

                <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-white">
                        Nº Sorteio:
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {insurance?.raffleId}
                    </p>
                </div>

                <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-white">
                        Valor Seguro:
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        R$ {insurance?.amount}
                    </p>
                </div>

                <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-white">
                        Status:
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {insurance?.status}
                    </p>
                </div>
            </div>
            <div className="flex justify-end mt-6">
                <div className="w-[40%]">
                    <BtnPrimary
                        onClick={() => {
                            onCancelContract(insurance?.operationId)
                        }}
                        className="w-60 px-4" loading={loading_cancel} text="Solicitar cancelamento" hasIcon={false} type="button" />
                </div>
            </div>
        </div>
    )
}

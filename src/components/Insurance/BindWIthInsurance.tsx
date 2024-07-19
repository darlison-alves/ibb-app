import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { ToastContext } from "../../context/ToastContext";
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum";
import { IInsuranceInfo } from "../../interfaces/insurance.interface";
import { LifeInsuranceService } from "../../services/life-insurance.service";
import { getResponseError } from "../../utils/tratamento.response-error";
import { BtnPrimary } from "../Button/Button";
import { InsuranceInfo } from "./InsuranceInfo";

const lifeInsuranceService = new LifeInsuranceService();

interface IBindWithInsuranceProps {
    userId: any
}

export const BindWithInsurance = ({ userId }: IBindWithInsuranceProps) => {

    const { showToastMessange } = useContext(ToastContext)
    const { open, setOpen, setComponet, setTitle } = useContext(ModalContext)

    const [loadingInsurance, setLoadingInsurance] = useState(false);
    const [insurance, setInsurance] = useState<IInsuranceInfo>({})
    const [hasInsurance, setHasInsurance] = useState(false);


    

    const onInfoInsurance = () => {
        setTitle("Informações do Seguro")
        setOpen(!open)
        setComponet(<InsuranceInfo insurance={insurance} afterSuccessCancel={() => {
            showToastMessange("solicitado cancelamento com sucesso!", TypeMessageEnum.success)
        }} 
        afterErrorCancel={(message: string) => {
            showToastMessange(message, TypeMessageEnum.error)
        }}
        />)
    }

    const onLifeInsurance = () => {
        setLoadingInsurance(true)
        lifeInsuranceService.createInsurance(userId)
            .then(() => {
                showToastMessange("suguro vinculado", TypeMessageEnum.success)
            }).catch(err => {
                const message = getResponseError(err);
                showToastMessange(message, TypeMessageEnum.error)
            }).finally(() => {
                setLoadingInsurance(false)
                onGetLifeInsurance()
            })
    }



    const onGetLifeInsurance = () => {
        setLoadingInsurance(true)
        lifeInsuranceService.getInsurance(userId)
            .then((res) => {
                setHasInsurance(true)
                setInsurance(res.data)
            }).finally(() => {
                setLoadingInsurance(false)
            })
    }

    useEffect(() => {
        onGetLifeInsurance()
    }, [])

    return (
        <>
            {!hasInsurance &&
                <BtnPrimary
                    loading={loadingInsurance}
                    hasIcon={false}
                    text="VINCULAR SEGURO"
                    type="button"
                    onClick={() => {
                        onLifeInsurance();
                    }}
                />
            }

            {hasInsurance &&
                <BtnPrimary
                    loading={loadingInsurance}
                    hasIcon={false}
                    text="SEGURO"
                    type="button"
                    onClick={() => {
                        onInfoInsurance();
                    }}
                />
            }
        </>
    )
}
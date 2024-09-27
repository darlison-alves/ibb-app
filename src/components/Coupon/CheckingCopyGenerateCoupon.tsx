import { useContext, useEffect, useState } from "react";
import { MdOutlineCancelScheduleSend, MdEmail } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa'
import { ICoupon } from "../../interfaces/coupon.interface"
import { Button, ButtonPrimary } from "../Button/Button";
import { Input } from "../Input/Input";
import { IconButton } from "../Button/IconButton";
import { MaskedInput } from "../InputMask/InputMask";
import { removeMask } from "../../utils/validateMaskedInput";

interface ICheckingCopyGenerateCouponProps {
    coupom: ICoupon;
    amount_pay: string;
    amount_discount: string;
    loading: boolean;
    pay: Function;
    onShared: Function
}

export const CheckingCopyGenerateCoupon = ({ coupom, amount_pay, amount_discount, loading, pay, onShared = () => {} }: ICheckingCopyGenerateCouponProps) => {

    const [amount_total, setAmountTotal] = useState<number>(0);
    const [per_email, setPerEmail] = useState<boolean>(false);
    const [per_whats, setPerWhats] = useState<boolean>(false);

    const [phone, setPhone] = useState<string | undefined>('');
    const [email, setEmail] = useState<string | undefined>('');

    useEffect(() => {
        setAmountTotal(coupom?.valorCupom || 0)
    }, [coupom])


    return (
        <div className="w-full flex flex-col">
            <div className="w-96 flex justify-between px-3">
                <h1 className="text-gray-600 dark:text-gray-300">Produto</h1>
                <h1 className="text-gray-600 dark:text-gray-300">R$ {coupom?.valorCupom}</h1>
            </div>

            <div className="w-96 flex justify-between px-3 py-2">
                <h1 className="text-gray-600 dark:text-gray-300">Valor a pagar</h1>
                <h1 className="text-gray-600 dark:text-gray-300">R$ {amount_pay} </h1>
            </div>

            <div className="w-96 flex justify-between px-3 py-5">
                <h1 className="text-gray-600 dark:text-gray-300">Parabéns, Você Economizou:</h1>
                <h1 className="text-green-600 dark:text-gray-300">R$ {amount_discount}</h1>
            </div>

            <div className="text-center px-5 py-2 space-y-2">
                <Button
                    onClick={() => {
                        pay()
                    }}
                    className="py-2"
                    type='button'
                    text="Pagar"
                    hasIcon={false}
                />
            </div>
            <hr className="mx-3 my-3" />
            <label className="px-3 text-sm text-gray-500 truncate dark:text-gray-400"> Compartilhe e ganhe comissão</label>
            <div className="w-96 flex justify-between px-3 py-5">
                <h1 className="text-gray-600 dark:text-gray-300">Comissão por indicação:</h1>
                <h1 className="text-green-600 dark:text-gray-300">{coupom?.kickBackPerIndication}%</h1>
            </div>

            <div className="w-96 flex justify-between px-3">
                <h1 className="text-gray-600 dark:text-gray-300">+ 50 % do desconto é convertido em comissão caso indicação não seja cliente IBB.</h1>
            </div>

            {
                per_email && (
                    <div className="my-4 mx-3">
                        <Input type="email" placeholder="Email" focusPlaceholder="E-mail" onChange={(evt) => setEmail(evt.target.value)} />
                    </div>
                )
            }

            {
                per_whats && (
                    <div className="my-4 mx-3">
                        <MaskedInput
                            error={false}
                            mask="(99) 99999-9999"
                            onChange={(evt) => {
                                setPhone(removeMask(evt.target.value))
                            }}
                            type="text"
                            value={phone}
                            placeholder="(__) _____-____"
                            focusPlaceholder="Telefone"
                        />
                    </div>
                )
            }

            <div className="flex px-5 py-2 justify-center space-x-6">
                {
                    !per_whats && <IconButton
                        Icon={MdEmail}
                        toSend={per_email}
                        onClick={() => {
                            setPerEmail(true)
                            setPerWhats(false)
                        }}
                        loading={loading}
                        onSend={() => {
                            onShared({
                                code: coupom.codigo,
                                email,
                                type: 'EMAIL'
                            })
                        }}
                    />
                }

                {
                    !per_email && <IconButton
                        Icon={FaWhatsapp}
                        toSend={per_whats}
                        onClick={() => {
                            setPerWhats(true)
                            setPerEmail(false)
                        }}
                        loading={loading}
                        onSend={() => {
                            onShared({
                                code: coupom.codigo,
                                email,
                                type: 'WHATSAPP'
                            })
                        }}
                    />
                }

                {
                    (per_email || per_whats) && (
                        <IconButton
                            Icon={MdOutlineCancelScheduleSend}
                            toSend={false}
                            onClick={() => {
                                setPerWhats(false)
                                setPerEmail(false)
                            }}
                        />
                    )
                }


            </div>
        </div>
    )
}
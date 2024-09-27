import { Button, Modal } from 'antd';
import { BankDataForm } from '../../Forms/BankData.Form';
import { useEffect, useState } from 'react';
import { BankService } from '../../../services/bank.service';
import { useFormik } from 'formik';
import { IBankData } from '../../../interfaces/bank.interface';
import { getResponseError } from '../../../utils/tratamento.response-error';

interface BankFormModalProps {
    open: boolean;
    setOpen: (value: boolean) => void
}

const bankService = new BankService()

export const BankFormModal = ({ open, setOpen }: BankFormModalProps) => {

    const username = ""

    const [loadingActivate, setLoadingActivate] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loading_get, setLoadingget] = useState(false)
    const [initialValues, setInitialValues] = useState<IBankData>({ digitoConta: "" })

    const formik = useFormik<IBankData>({
        initialValues,
        onSubmit: (values) => {
            console.log('values', values);
            // submit(values)
        },
    })

    useEffect(() => {
        setLoadingget(true)
        if (username)
            bankService.getProfile(username)
                .then(res => {
                    formik.setValues(res.data.contaBancaria)
                }).catch(err => {
                    console.log('err', err)
                }).finally(() => {
                    setLoadingget(false);
                })
    }, [username])


    const activate = () => {
        setLoadingActivate(true)
        bankService.activateAccount(123)
            .then(res => {

            }).catch(err => {
                const message = getResponseError(err)

            }).finally(() => { setLoadingActivate(false) })
    }

    return (
        <Modal
            title={<p>Dados bancários</p>}
            loading={false}
            open={open}
            onCancel={() => setOpen(false)}
            okText="Salvar"
        >
            <BankDataForm initialValues={{ codigoBanco: "001", digitoConta: "" }} userId={1101} username='' />
        </Modal>
    )
}
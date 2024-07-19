import { Button } from "../../../components/Button/Button"
import { MdDownload } from 'react-icons/md'
import { useState } from "react"
import { DocumentService } from "../../../services/documents.service"
import { WarningAlert } from '../../../components/Alerts/warning.alert'
import { getResponseError } from "../../../utils/tratamento.response-error"
const documentService = new DocumentService();

export const DownloadPDFs = () => {

    const [loadind_certificate, setLoadindCertificate] = useState(false)
    const [error, setError] = useState("")

    const onDownloadCerficate = () => {
        setLoadindCertificate(true)
        documentService.downloadCertificate()
            .then((res) => {
                console.log(res.data)
                const file = new Blob([res.data], { type: "application/pdf" });
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL)
            }).catch(err => {
                const message = getResponseError(err)
                setError(message)
            })
            .finally(() => {
                setLoadindCertificate(false)
            })
    }

    return (
        <div className="px-20 mt-16">
            {error && <WarningAlert text={error} />}

            <Button text="Download Certificado" Icon={MdDownload} type="button" loading={loadind_certificate} onClick={() => onDownloadCerficate()} />
        </div>
    )
}
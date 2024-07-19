import { useState } from 'react';
import copy_svg from '../../assets/svgs/copy.svg';

// export async function copyTextToClipboard(text) {
//     if ('clipboard' in navigator) {
//       return await navigator.clipboard.writeText(text);
//     } else {
//       return document.execCommand('copy', true, text);
//     }
//   }

export const PixInfo = ({ payment_info }: any) => {

    const [showQRCode, setShowQRCode] = useState(false)

    return (
        <div className=''>
            <p className="text-base font-light my-3">
                Informações Boleto:
            </p>

            <p className='text-base font-light text-sm'>Linha Digitável</p>
            <div className="flex justify-between p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 mb-5" role="alert">
                <span className="font-medium">{ payment_info?.linhaDigital   } </span>
                <img src={copy_svg} width={20} />
            </div>

            <div className='flex space-x-5'>
                { showQRCode && (<img src={payment_info?.urlBoleto} width={340} />) }
                <a onClick={() => {setShowQRCode(!showQRCode)}} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">QRCODE</a>
            </div>
        </div>
    )
}
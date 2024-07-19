import copy_svg from '../../assets/svgs/copy.svg';

export const BankSlipInfo = ({ payment_info }: any) => {
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
                <h5 className='text-base font-light'>Vencimento: {payment_info?.dataVencimento} </h5>
                <a target="_blank" href={payment_info?.urlBoleto} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">BOLETO</a>
            </div>
        </div>
    )
}
import { BsInfoCircle } from 'react-icons/bs'

interface IWarningAlertProps {
  text: string;
  title?: string;
}

export const SuccessAlert = ({ title,  text }: IWarningAlertProps) => {
  return (
    <div className="flex space-x-2 items-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
      <BsInfoCircle />
      <span className="font-medium">{ title }</span> { text }.
    </div>
  )
}
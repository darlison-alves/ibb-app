import { GoAlert } from 'react-icons/go'

interface IWarningAlertProps {
  text: string;
  title?: string;
}

export const WarningAlert = ({ title,  text }: IWarningAlertProps) => {
  return (
    <div className="flex space-x-2 items-center p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
      <GoAlert />
      <span className="font-medium">{ title }</span> { text }.
    </div>
  )
}
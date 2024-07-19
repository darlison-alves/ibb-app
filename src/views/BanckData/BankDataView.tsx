import { useContext } from "react";
import { BankDataForm } from "../../components/Forms/BankData.Form"
import { ToastContext } from "../../context/ToastContext";
import { useGetInfoUser } from "../../hooks/useGetInfoUser"
import { TypeMessageEnum } from "../../interfaces/enums/errors.enum";

export const BankDataView = () => {

  const { user } = useGetInfoUser();
  const { showToast, setType } = useContext(ToastContext);

  return (
    <div className="mt-3">
      <BankDataForm
        initialValues={{ digitoAgencia: "0", digitoConta: "0" }}
        userId={user.id}
        username={user.username}
        cb_err={(msg: string) => {
          showToast(msg)
          setType(TypeMessageEnum.error)
        }}
        cb={() => {
          showToast("salvo com sucesso!")
          setType(TypeMessageEnum.success)
        }}
      />
    </div>
  )
}
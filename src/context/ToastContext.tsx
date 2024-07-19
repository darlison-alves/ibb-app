import { Alert, Box, Snackbar } from "@mui/material";
import { createContext, useState } from "react";
import { ToastAlert } from "../components/Toast/Success.toast";
import { TypeMessageEnum } from "../interfaces/enums/errors.enum";

export const ToastContext = createContext({
  message: "",
  setMessage: (message: string) => { },
  showToast: (message: string) => { },
  type: "",
  setType: (type: TypeMessageEnum) => { },
  showToastMessange: (message: string, type: TypeMessageEnum) => { }
})

export const ToastProvider = ({ children }: any) => {
  const [message, setMessage] = useState("")
  const [showed, setShowed] = useState(false)
  const [type, setType] = useState(TypeMessageEnum.info)

  const showToast = (message: string) => {
    setMessage(message)
    setShowed(true);

    setTimeout(() => {
      setMessage("")
      setShowed(false)
    }, 15000)
  }

  const showToastMessange = (message: string, type: TypeMessageEnum) => {
    setType(type)
    setMessage(message)
    setShowed(true);

    setTimeout(() => {
      setMessage("")
      setShowed(false)
    }, 5000)
  }

  return (
    <ToastContext.Provider value={{ message, setMessage, showToast, type, setType, showToastMessange }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showed}
        onClose={() => { }}
        message={message}
      >
        <Alert onClose={() => setShowed(false)} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </ToastContext.Provider>
  )
}
import { AxiosError, AxiosResponse } from "axios";

interface IAxiosResponse extends AxiosResponse {
  message: string;
  errors: []
}

export const getResponseError = (err: AxiosError<IAxiosResponse>): string => {
  let _message = "error inesperado aconteceu!"
  if (err?.response?.data?.errors) {
    const [error = { defaultMessage: "", message: "" }] = err?.response?.data?.errors;
    const { defaultMessage, message } = error

    return defaultMessage || message;
  }

  const { message } = err.response ? err.response.data : { message: _message }
  return message
}
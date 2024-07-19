import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { IoMdLock } from 'react-icons/io'
import { IconType } from 'react-icons/lib/esm'
import { MdEmail } from 'react-icons/md'
import { Loading } from '../Loading/loading.full.compoment'

interface ButtonProps {
  onClick?: () => void
  text: string
  type: 'button' | 'submit' | 'reset'
  Icon?: IconType
  hasIcon?: boolean
  className?: string
  disabled?: boolean;
  loading?: boolean;
  bg?: string
}
export const  Button = ({ text, onClick, type, Icon = IoMdLock, hasIcon = true, bg = 'bg-primary', loading = false, disabled=false }: ButtonProps) => {

  if (loading) {
    return <button
      type="button"
      className="bg-[#f3c2a0] text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md disabled:opacity-50"
      disabled={disabled}
    >
      carregando...
      <AiOutlineLoading3Quarters className="animate-spin" />
    </button>
  }

  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`${bg} text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md`}>
      {loading && <Loading />}
      {hasIcon && <Icon />}
      {text}
    </button>
  )
}

export const Btn = () => {
  <button
    type="button"
    className="text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
}

export const ButtonSecudary = ({ text, onClick, type, Icon = IoMdLock, hasIcon = true, loading = false }: ButtonProps) => {
  return (
    <button disabled={loading} type={type} onClick={onClick} className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
      {loading && <Loading />}
      {hasIcon && <Icon />}
      {text}
    </button>
  )
}

export const BtnPrimary = ({ text, onClick, type, Icon = IoMdLock, hasIcon = true, loading = false }: ButtonProps) => {
  return (
    <button disabled={loading} type={type} onClick={onClick} className="text-white bg-primary hover:text-white-500 hover:bg-primary-700 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
      {loading && <Loading />}
      {hasIcon && <Icon />}
      {text}
    </button>
  )
}

export const ButtonPrimary = ({ loading = false, disabled = false, text, onClick, type, className = "" }: ButtonProps) => {
  // [#f3c2a0]
  return (
    <button disabled={disabled || loading} type={type} onClick={onClick} className={`${loading || disabled ? 'bg-[#f3c2a0]' : 'bg-primary'} w-[100px] ${className} ${disabled && "cursor-not-allowed"} text-white font-normal flex items-center justify-center rounded-md`}>
      {loading && <AiOutlineLoading3Quarters className="animate-spin mr-3" />}
      {text}
    </button>
  )
}

export const ButtonCustom = ({ loading = false, disabled = false, text, onClick, type, className = "" }: ButtonProps) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`${className} ${disabled && "bg-secondary cursor-not-allowed"} text-white font-normal flex items-center justify-center rounded-md`}>
      {loading && <AiOutlineLoading3Quarters className="animate-spin mr-3" />}
      {text}
    </button>
  )
}

export const ButtonBank = ({ disabled = false, text, onClick, type, className = "" }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`${className} ${disabled && "bg-secondary"} text-white font-normal rounded-md`}>
      {text}
    </button>
  )
}

export const ButtonEmail = ({ text, onClick, type, Icon = MdEmail }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="bg-[#ea4335] text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md">
      <Icon />
      {text}
    </button>
  )
}

export const ButtonWhats = ({ text, onClick, type, Icon = BsWhatsapp }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="bg-[#04d361] text-white text-base font-normal py-3 w-full flex gap-3 items-center justify-center rounded-md">
      <Icon />
      {text}
    </button>
  )
}

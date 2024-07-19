import React from 'react'
import { Loading } from '../Loading/loading.full.compoment';

interface IFullButtonProps {
  loading: boolean;
  urlImg: string | null;
  text: string;
  type: 'button' | 'submit' | 'reset'
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  classname?: string
}

export const FullButton = ({ loading, urlImg, text, type, onClick = () => {}, classname = "" }: IFullButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={` ${classname} w-full ${loading ? "cursor-not-allowed" : "hover:bg-gray-light cursor-not-allowed"} bg-gray-lighter p-3 flex items-center justify-between transition`} style={{ cursor: loading ? '': 'pointer' }}>
      {text}
      {loading && <Loading />}
      {!loading && <img src={urlImg || ""} className="w-[20px]" />}
    </button>
  )
}
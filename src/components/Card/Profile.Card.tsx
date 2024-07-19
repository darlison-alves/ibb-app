import { useEffect, useState } from "react"
import { useGetInfoUser } from "../../hooks/useGetInfoUser"

export const ProfileCard = ({ user }: any) => {

  return (

    <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
      <div className="flex flex-col pb-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Nome</dt>
        <dd className="text-lg font-semibold">{ user.name }</dd>
      </div>
      
      <div className="flex flex-col pb-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
        <dd className="text-lg font-semibold">{ user.email }</dd>
      </div>
      <div className="flex flex-col py-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Endereço</dt>
        <dd className="text-lg font-semibold">Rua / Av. { user?.endereco?.logradouro }, { user?.endereco?.numero } - {user?.endereco?.bairro}, { user?.endereco?.cidade } - { user?.endereco?.estado }, { user?.endereco?.cep } </dd>
      </div>
      <div className="flex flex-col pt-3">
        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Telefone</dt>
        <dd className="text-lg font-semibold">{ user.phone }</dd>
      </div>
    </dl>

  )
}
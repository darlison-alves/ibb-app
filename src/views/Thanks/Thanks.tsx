import React from 'react'
import successIcon from '../../assets/success.png'
import { StepsTitle } from '../../components/StepsTitle/StepsTitle'
import { Tooltip } from '@mui/material'

import logoTP from '../../assets/img/logototalpass.png'
import androdStores from '../../assets/img/google-store.jpg'
import isoStore from '../../assets/img/apple-store.png'


export const Thanks = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-6 min-h-screen'>
      <div className="bg-[#D1FADF] w-[120px] h-[120px] rounded-full flex justify-center items-center">
        <img src={successIcon} alt="Icone de sucesso" />
      </div>

      <section>
        <h1 className='font-semibold text-2xl text-[#404248] text-center'>Assinatura realizada!</h1>
        <h4 className='font-semibold text-1xl text-[#999999] text-center'>Seu pagamento esta sendo processado!</h4>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 py-3 hr-h-2" />

        <section className="my-3">
          <StepsTitle step="6" title="Realize seu cadastro junto a TOTAL PASS" />

          <div className='py-4'>
            <Tooltip title="Cadastro Total Pass" placement="top" >
              <img src={logoTP} width={160} height={160} alt="cadastro total pass" className="cursor-pointer" onClick={() => {
                window.open("http://bit.ly/ibblife2023", "_blank");
              }} />
            </Tooltip>
          </div>
        </section>


        <section className="my-3">
          <StepsTitle step="7" title="Baixe o APP TOTAL PASS" />

          <section className="mt-7 flex md:flex-row justify-between gap-4 md:w-[70%]">
            <div>
              <Tooltip title="Para Android" placement="top" >
                <img src={androdStores} width={160} height={160} alt="cadastro total pass" className="cursor-pointer" onClick={() => {
                  window.open("https://play.google.com/store/apps/details?id=com.totalpassmobile", "_blank");
                }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Para IOS" placement="top" >
                <img src={isoStore} width={160} height={160} alt="cadastro total pass" className="cursor-pointer" onClick={() => {
                  window.open("https://apps.apple.com/br/app/totalpass/id1506830649", "_blank");
                }} />
              </Tooltip>
            </div>
          </section>
        </section>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 py-3 hr-h-2" />

        <p className='text-[#999999] text-sm max-w-[600px] mx-auto text-center mt-2'>Já pode acessar a plataforma com seu email e senha, nós da IBB agradecemos pela preferência.
          <br />
          <br />
          Perguntas? Sugestões? Precisa de ajuda?
          <br />
          <a className='text-[#3FA9E2] underline' href="mailto:teste@example.com">Nos envie um email</a>.</p>
      </section>
    </main>
  )
}

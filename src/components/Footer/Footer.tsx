import logo from "../../assets/img/logo-life.png"
import { SocialNetWork } from "./SocialNetwork"

export const Footer = () => {
    return (
        <footer className="bg-secudary-global-color shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="w-full" >
                <div className="md:flex justify-between md:space-x-20" >
                    <a href="https://flowbite.com/">
                        <img src={logo} className="p-3" alt="IBB" />
                    </a>
                    <div>
                        <h2 className="mb-6 text-md font-sans font-semibold text-white dark:text-gray-500">Atendimento</h2>
                        <ul className="text-white font-sans dark:text-gray-400">
                            <li className="mb-4">
                                <a href="tel:8596869679" className=" hover:underline">Atendimento <br /> (85) 9 96869679</a>
                            </li>
                            <li className="mb-4">
                                <a href="tel:8596463164" className="hover:underline">Comercial <br /> (85) 9 96463164</a>
                            </li>
                            <li className="mb-4">
                                <a href="tel:8531094521" className="hover:underline">Fixo IBB <br /> (85) 31094521</a>
                            </li>
                            <li className="mb-4">
                                <a href="comercial@ibblife.com.br" className="hover:underline">E-mail Comercial <br /> comercial@ibblife.com.br</a>
                            </li>
                            <li className="mb-4">
                                <a href="atendimento@ibblife.com.br" className="hover:underline">E-mail Atendimento <br /> atendimento@ibblife.com.br</a>
                            </li>
                            <li className="mb-4">
                                <a href="tel:08007264935" className="hover:underline">Fixo 24 horas SulAmerica <br /> 0800 726 49 35</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-md font-sans font-semibold text-white dark:text-white">Informações</h2>
                        <ul className="text-white font-sans dark:text-white-400">
                            <li className="mb-4 ml-2">
                                <a href="https://www.gov.br/susep/pt-br" className="hover:underline">SUSEP</a>
                            </li>
                            <li className="mb-4 ml-2">
                                <a href="https://portal.sulamericaseguros.com.br/home.htm" className="hover:underline">Sulamerica</a>
                            </li>
                            <li className="mb-4 ml-2">
                                <a href="https://app.flipsnack.com/editor/ti2t000jiq" className="hover:underline">Magazine IBB</a>
                            </li>
                            <li className="mb-4 ml-2">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                        <h2 className="mb-6 text-md font-sans font-semibold text-white dark:text-white">Documentação</h2>
                        <ul className="text-white dark:text-white-400">
                            <li className="mb-4 ml-2">
                                <a href="https://ibblife.com.br/condicoes-gerais/" className="hover:underline">Condições gerais</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-md font-sans font-semibold text-white dark:text-white">Empresas</h2>
                        <ul className="text-white">
                            <li className="mb-4 ml-2">
                                <a href="http://ppiconsult.com.br/home/" className="hover:underline">PPI Consult</a>
                            </li>
                            <li className="mb-4 ml-2">
                                <a href="https://www.gurgelchem.com.br/" className="hover:underline">Gurgel Chem</a>
                            </li>
                            <li className="mb-4 ml-2">
                                <a href="http://www.cmendescorretora.com.br/" className="hover:underline">C. Mendes</a>
                            </li>
                            <li className="mb-4 ml-2">
                                <a href="https://www.ementor.com.br/" className="hover:underline">Ementor</a>
                            </li>
                            <li className="mb-4 ml-2">
                                <a href="#" className="hover:underline">Ease Brasil</a>
                            </li>
                            <li className="mb-4 ml-2">
                                <a href="http://scf.inovaccio.com.br/" className="hover:underline">Scarano, Costa e Fonseca</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 py-3 hr-h-2" />

            <div className="flex justify-center">
                <div className="flow-root md:flex justify-between sm:w-[70%]">
                    <div className="text-left text-sm text-white">
                        {/* <h2 className="mb-6 text-md font-sans font-semibold text-white dark:text-white">Parceiro</h2> */}
                        <div className="">
                            <p>Boon Clube de Beneficios e Servico de Divulgacao Marketing Ltda © 2022.</p>
                            <p>Todos os direitos reservados. CNPJ: nº 34.104.415/0001-27</p>
                            <p>Av. Edilson Brasil Soares, 36</p>
                            <p>Parque Manibura – Fortaleza – CE</p>
                            <p>CEP: 60821-775</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="mb-6 text-md font-sans font-semibold text-white dark:text-white">Parceiro</h2>
                        <a href="https://portal.sulamericaseguros.com.br/home.htm" className="">
                            <div className="flex justify-center">
                                <img src="https://ibblife.com.br/wp-content/uploads/2022/10/logo-sulamerica-branco-146x83-1.png" />
                            </div>
                        </a>

                        <h2 className="mb-6 text-md font-sans font-semibold text-white dark:text-white mt-10">Fiscalização</h2>
                        <a href="https://portal.sulamericaseguros.com.br/home.htm">
                            <div className="flex justify-center">
                                <img src="https://ibblife.com.br/wp-content/uploads/2022/10/logo-susep-146.png" />
                            </div>
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center">
                            <SocialNetWork />
                        </div>
                    </div>
                </div>
            </div>
            {/* <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span> */}
        </footer>
    )
}
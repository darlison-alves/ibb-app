import { Link } from "react-router-dom"

export const CardItem = ({ text = "", onClick= () => {} }: any) => {
    return (
        <div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div x-data="{ tooltips: false }" className="pt-6 px-6 relative text-sm font-semibold">
                    { text }
                </div>
                <div className="flex flex-row justify-between px-6 py-4">
                    {/* <div className="self-center w-14 h-14 rounded-full text-pink-500 bg-pink-100 dark:bg-pink-900 dark:bg-opacity-40 relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                        </svg>
                    </div> */}
                    {/* <h2 className="self-center text-3xl">421</h2> */}
                </div>
                <div className="px-6 pb-6 flex justify-end">
                    <Link onClick={onClick} className="hover:text-indigo-500 text-sm" to="/financial-transactions/pontual" >Ir para relatório {'>>'}</Link>
                </div>
            </div>

        </div>
    )
}
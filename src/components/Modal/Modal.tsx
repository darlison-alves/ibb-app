import React from "react";
import { Modal as ModalMUI } from "@mui/material"
import { TitleSecudary } from "../StepsTitle/StepsTitle";

interface IModalProps extends React.PropsWithChildren {
    title: string;
    description?: string;
    showButtonFooder?: boolean;
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ title, showButtonFooder = false, open = false, children, setOpen, description }: IModalProps) => {
    return (
        <ModalMUI
            open={open}
            onClose={() => { setOpen(false) }}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                <div id="toast-interactive" className="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
                    <div className="flex">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                            </svg>
                            <span className="sr-only">Refresh icon</span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{title}</span>
                            <div className="mb-2 text-sm font-normal">{description}</div>
                            <div className="mb-2">
                                {children}
                            </div>
                        </div>
                        <button onClick={() => setOpen(false) } type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-interactive" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </ModalMUI>
        // <ModalMUI
        //     open={open}
        //     onClose={() => { setOpen(false) }}
        //     aria-labelledby="parent-modal-title"
        //     aria-describedby="parent-modal-description"
        // >
        //     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fff] border-none w-[100%] md:w-[auto]" >
        //         <div className="relative w-auto max-w-2xl h-full md:h-auto">

        //             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

        //                 <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        //                     <TitleSecudary step="" title={title} />

        //                     <button onClick={() => setOpen(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
        //                         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        //                         <span className="sr-only">Close modal</span>
        //                     </button>
        //                 </div>

        //                 { children }

        //                 {
        //                     showButtonFooder && (
        //                         <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        //                             <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
        //                             <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
        //                         </div>
        //                     )
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </ModalMUI>
    )
}
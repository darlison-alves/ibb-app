import { createContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal/Modal";

export const ModalContext = createContext({
    open: false,
    setOpen: (value: boolean) => {},
    setTitle: (text: string) => {},
    setComponet: (component: any) => {},
    description: "",
    setDescription: (text: string) => {}
});

export const ModalProvider = ({ children }: any) => {
    const [ open, setOpen ] = useState(false)
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ component, setComponet ] = useState(<div />)
    return (
        <ModalContext.Provider value={{ open, setOpen, setTitle, setComponet, description, setDescription }} >
            <Modal open={open} title={title} setOpen={setOpen} description={description} >
                { component }
            </Modal>
            { children }
        </ModalContext.Provider>
    )
}
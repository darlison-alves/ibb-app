import { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../services/auth";

export const IsLoggedContext = createContext({
  isLogged: false,
  setIsLogged: (isLogged: boolean) => { },
  globalMessage: "",
  setGlobalMessage: (value: string) => { }
})

export const IsLoggedProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false)
  const [globalMessage, setGlobalMessage] = useState("")

  useEffect(() => {
    setIsLogged(isAuthenticated())
  }, [])

  return (
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged, globalMessage, setGlobalMessage }}>
      {children}
    </IsLoggedContext.Provider>
  )
}
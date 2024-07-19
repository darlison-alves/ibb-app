import { useContext, useEffect, useState } from "react"
import { IsLoggedContext } from "../../context/IsLoggedContext"
import { useGetInfoUser } from "../../hooks/useGetInfoUser"
import { HeaderMenu } from "./HeaderMenu"
import { HeaderMenuAdmin } from "./HeaderMenuAdmin"
import { HeaderMenuCompany } from "./HeaderMenuCompany"

export const HeaderMenuAuth = () => {
  
  const { user, getMe } = useGetInfoUser()

  const [profile, setProfile] = useState("")
  
  const { isLogged } = useContext(IsLoggedContext)

  useEffect(() => {
    setProfile(user.perfil)
  }, [user])

  useEffect(() => {
    getMe()
  }, [isLogged])

  if(["/checkout/plan/subcritions", "/checkout"].includes(location.pathname)) {
    return <div />
  }

  if(location.pathname.includes("/checkout/plan/subcritions")) {
    return <div />
  }

  return (
    <>
      <HeaderMenuAdmin profile={profile} />
      <HeaderMenu profile={profile} />
      <HeaderMenuCompany profile={profile} />
    </>
  )
}
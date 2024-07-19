import { useEffect, useState } from "react"
import { api } from "../config/axios.base"
import { useNavigate } from "react-router-dom"

export const useGetInfoUser = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>({})


  const getMe = (cb = (data: any) => {}) => {
    setLoading(true)
    if (localStorage.getItem('@IBB_USER')) {
      const userData: any = JSON.parse(localStorage.getItem('@IBB_USER') || "{}")
      setUser((old: any) => ({...old, ...userData }))
      setLoading(false)
    } else {
      api().get('/user/me')
        .then(res => {
          setUser(res.data)
          localStorage.setItem('@IBB_USER', JSON.stringify(res.data))
          cb(res.data)
        }).catch(err => {
        }).finally(() => {
          setLoading(false)
        })
    }
  }

  

  useEffect(() => {
    getMe()
  }, [])

  return { loading, user, setLoading, getMe }

}
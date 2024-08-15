import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({} as any)

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState({})
  console.log(user)
  const auth = getAuth()
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribed = auth.onIdTokenChanged(async (user) => {
      if (user?.uid) {
        const isTokenResult = await user.getIdTokenResult()
        const accessToken = isTokenResult.token
        setUser(user)
        localStorage.setItem('accessToken', accessToken)
        return
      }
      setUser({});
      localStorage.clear()
      navigate('/login')
    })
    return () => {
      unsubscribed()
    }
  }, [auth])
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

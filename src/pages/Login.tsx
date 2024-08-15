import { AuthContext } from '@/context/AuthProvider'
import { Button, Typography } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const auth = getAuth()
  const { user } = useContext(AuthContext)

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  if (user?.uid) {
    navigate('/')
    return
  }
  
  return (
    <>
      <Typography variant='h5' sx={{ marginBottom: '10px' }}>
        Welcome to Note App
      </Typography>
      <Button variant='outlined' onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </>
  )
}

export default Login

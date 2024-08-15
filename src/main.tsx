import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { RouterProvider } from 'react-router-dom'
import router from './router/'
import '@/index.css'
import { Container } from '@mui/material'
import '@/firebase/config';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container maxWidth="lg" sx={{textAlign: 'center', marginTop: '50px'}}><RouterProvider router={router} /></Container>
  </StrictMode>,
)

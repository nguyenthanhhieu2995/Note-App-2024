import { createBrowserRouter, Outlet } from 'react-router-dom'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import AuthProvider from '@/context/AuthProvider'
import ProtectedRoute from './ProtectedRoute'
import ErrorPage from '@/pages/ErrorPage'
import NoteList from '@/components/NoteList'
import Note from '@/components/Note'
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <Home />,
            loader: async () => {
              const query = `query Folders {
                folders {
                  id
                  name
                  createdAt
                }
              }`;

              const response = await fetch('http://localhost:4000/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify({ query }),
              });
              const {data} = await response.json();
              return data;
            },
            children: [
              {
                element: <NoteList />,
                path: 'folders/:folderId',
                children: [
                  {
                    path: 'note/:noteId',
                    element: <Note />
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
])

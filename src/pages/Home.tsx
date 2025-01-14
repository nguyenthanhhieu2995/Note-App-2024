import FolderList from '@/components/FolderList'
import UserMenu from '@/components/UserMenu'
import { Box, Grid, Typography } from '@mui/material'
import { Outlet, useLoaderData } from 'react-router-dom'

function Home() {
  const data = useLoaderData()
  return (
    <>
      <Typography variant='h4' sx={{ mb: '20px' }}>
        {' '}
        Note App{' '}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
        <UserMenu  />
      </Box>

      <Grid container sx={{ height: '50vh', boxShadow: '0 0 15px 0 rgb(193 193 193 / 60%)' }}>
        <Grid item xs={3} sx={{ height: '100%' }}>
          <FolderList folders={[{ id: '1', name: 'Plan for Tet Holiday' },{ id: '2', name: 'Plan for Lunar Holiday' }]} />
        </Grid>
        <Grid item xs={9} sx={{ height: '100%' }}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  )
}

export default Home

import { AuthContext } from '@/context/AuthProvider'
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material'
import { Auth } from 'firebase/auth/web-extension'
import { useContext, useState } from 'react'

interface UserMenuProps {
  displayName?: string
  photoURL?: string
  auth: Auth
}

function UserMenu() {
  const { user } = useContext<{ user: UserMenuProps }>(AuthContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleLogout = () => {
    user.auth.signOut()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={handleClick}>
        <Typography>{user.displayName}</Typography>
        <Avatar src={user.photoURL} sx={{ width: 24, height: 24, marginLeft: '5px' }} />
      </Box>
      <Menu id='basic-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default UserMenu

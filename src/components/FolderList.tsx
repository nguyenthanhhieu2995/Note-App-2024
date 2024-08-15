import { Box, Card, CardContent, List, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
interface FolderListProps {
  folders: { name: string; id: string }[]
}

function FolderList({ folders }: FolderListProps) {
  const { folderId } = useParams()
  const [activeFolderId, setActiveFolderId] = useState(folderId)
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: '#7D9D9C',
        height: '100%',
        overflowY: 'auto',
        padding: '10px',
        textAlign: 'left'
      }}
      subheader={
        <Box sx={{ fontWeight: 'bold', color: 'white' }}>
          <Typography>Folders</Typography>
        </Box>
      }
    >
      {folders.map(({ name, id }) => {
        return (
          <Link to={`folders/${id}`} key={id} style={{ textDecoration: 'none' }} onClick={() => setActiveFolderId(id)}>
            <Card sx={{ mb: '5px' }}>
              <CardContent
                sx={{ '&:last-child': { p: '10px' }, backgroundColor: activeFolderId === id ? 'rgb(255 211 140)' : '' }}
              >
                <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Typography>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </List>
  )
}

export default FolderList

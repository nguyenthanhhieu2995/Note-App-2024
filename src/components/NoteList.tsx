import { Box, Card, CardContent, Grid, List, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

function NodeList() {
  const folder = {
    notes: [{ id: '1', content: 'This is new note' }]
  }
  const { noteId } = useParams()
  const [activeNoteId, setActiveNoteId] = useState(noteId)

  return (
    <Grid container sx={{ height: '100%', boxShadow: '0 0 15px 0 rgb(193 193 193 / 60%)' }}>
      <Grid
        item
        xs={4}
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: '#F0EBE3',
          height: '100%',
          overflowY: 'auto',
          padding: '10px',
          textAlign: 'left'
        }}
      >
        <List
          subheader={
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>Notes</Typography>
            </Box>
          }
        >
          {folder.notes.map(({ id, content }) => {
            return (
              <Link to={`note/${id}`} key={id} style={{ textDecoration: 'none' }} onClick={() => setActiveNoteId(id)}>
                <Card sx={{ mb: '5px', backgroundColor: activeNoteId === id ? 'rgb(255 211 140)' : '' }}>
                  <CardContent sx={{ '&:last-child': { p: '10px' } }}>
                    <div
                      style={{ fontSize: 14, fontWeight: 'bold' }}
                      dangerouslySetInnerHTML={{ __html: `${content.substring(0, 30) || 'Empty'}` }}
                    />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default NodeList

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const FooterTile: React.FC<{ title: string; subtitle?: string; href?: string }> = ({ title, subtitle, href }) => (
  <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    )}
    {href && (
      <Box sx={{ mt: 1 }}>
        <Link href={href} underline="hover">
          Open
        </Link>
      </Box>
    )}
  </Paper>
)

const DashboardFooter: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        py: 2,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        zIndex: 'tooltip'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="inherit" align="center">
          © {year} Enterprise MUI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default DashboardFooter

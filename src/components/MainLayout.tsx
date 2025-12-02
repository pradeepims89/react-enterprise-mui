import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import AppHeader from './AppHeader'
import DashboardFooter from './DashboardFooter'

const MainLayout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Container maxWidth="lg" sx={{ py: 4, pb: 10 }}>
        <Outlet />
      </Container>
      <DashboardFooter />
    </>
  )
}

export default MainLayout
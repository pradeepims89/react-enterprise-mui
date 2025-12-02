import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleIcon from '@mui/icons-material/People'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LoginIcon from '@mui/icons-material/Login'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { useAuth } from '../features/auth/authContext'

const AppHeader: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [usersMenuAnchor, setUsersMenuAnchor] = useState<null | HTMLElement>(null)
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [notificationCount] = useState(3) // Example count, replace with real data

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value)
  }

  const openUsersMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUsersMenuAnchor(event.currentTarget)
  }

  const closeUsersMenu = () => {
    setUsersMenuAnchor(null)
  }

  const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget)
  }

  const closeUserMenu = () => {
    setUserMenuAnchor(null)
  }

  const handleLogout = async () => {
    await logout()
    closeUserMenu()
    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Mobile drawer button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'inline-flex', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            PGW
          </Typography>

          {/* Left side menu items */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>

            {user && (
              <Button
                color="inherit"
                endIcon={<ExpandMoreIcon />}
                onClick={openUsersMenu}
                aria-controls={usersMenuAnchor ? 'users-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={usersMenuAnchor ? 'true' : undefined}
              >
                Users
              </Button>
            )}
          </Box>

          {/* Right side menu items */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center', ml: 'auto' }}>
            {user && (
              <IconButton color="inherit" size="large">
                <Badge badgeContent={notificationCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            )}

            {user ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                }}
                onClick={openUserMenu}
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.dark' }}>
                  {user.userId?.charAt(0).toUpperCase() || 'U'}
                </Avatar>
                <Typography color="inherit">{user.userId}</Typography>
              </Box>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            )}
          </Box>

          {/* Menus */}
          <Menu
            id="users-menu"
            anchorEl={usersMenuAnchor}
            open={Boolean(usersMenuAnchor)}
            onClose={closeUsersMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <MenuItem 
              onClick={() => {
                navigate('/users')
                closeUsersMenu()
              }}
            >
              Manage Users
            </MenuItem>
          </Menu>

          {/* User profile menu */}
          <Menu
            id="user-menu"
            anchorEl={userMenuAnchor}
            open={Boolean(userMenuAnchor)}
            onClose={closeUserMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                Logout
              </ListItemText>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Menu</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            {!user ? (
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/login">
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to="/users">
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Users" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>

      {/* Toolbar spacer so page content is not hidden under the fixed AppBar */}
      <Toolbar />
    </Box>
  )
}

export default AppHeader

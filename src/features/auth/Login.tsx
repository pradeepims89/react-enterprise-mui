import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Container from '@mui/material/Container'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import { useAuth } from './authContext'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ userId?: string; password?: string }>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [apiError, setApiError] = useState('')
  
  // Get the page user tried to visit or default to home
  const from = (location.state?.from?.pathname as string) || '/'

  const validate = () => {
    const e: { userId?: string; password?: string } = {}
    if (!userId.trim()) e.userId = 'User ID is required'
    if (!password.trim()) e.password = 'Password is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError('')
    if (!validate()) return
    setLoading(true)
    try {
      // Mock credentials check
      if (userId === 'admin' && password === 'admin123') {
        await login(userId, password) // Updates auth context
        setSuccess(true)
        // Redirect to dashboard or requested page after success message
        setTimeout(() => {
          navigate(from, { replace: true })
        }, 1000)
      } else {
        throw new Error('Invalid credentials. Try admin/admin123')
      }
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 12,
            },
            maxHeight: '80vh',
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                p: { xs: 3, md: 5 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                },
              }}
            >
              <Box sx={{ textAlign: 'center', position: 'relative' }}>
                <Typography
                  variant="h3"
                  component="div"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    mb: 3,
                  }}
                >
                  Welcome Back
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Sign in to access the user directory and manage users.
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                p: { xs: 3, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  mb: 2,
                  bgcolor: 'primary.main',
                  width: 56,
                  height: 56,
                  boxShadow: 2,
                }}
              >
                <LockOutlinedIcon fontSize="large" />
              </Avatar>
              
              <Typography
                variant="h4"
                gutterBottom
                sx={{ mb: 3, fontWeight: 500 }}
              >
                Sign in
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                }}
              >
                {apiError && (
                  <Alert
                    severity="error"
                    sx={{
                      mb: 2,
                      boxShadow: 1,
                      animation: 'fadeIn 0.5s ease-in',
                    }}
                  >
                    {apiError}
                  </Alert>
                )}

                <TextField
                  label="User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  error={!!errors.userId}
                  helperText={errors.userId}
                  fullWidth
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password}
                  fullWidth
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 1.5,
                  }}
                >
                  <Link
                    href="#add-user"
                    underline="none"
                    sx={{
                      color: 'primary.main',
                      '&:hover': {
                        color: 'primary.dark',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Register new user
                  </Link>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      boxShadow: 2,
                      '&:hover': {
                        boxShadow: 4,
                      },
                    }}
                  >
                    {loading ? 'Signing in...' : 'Sign in'}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

export default Login

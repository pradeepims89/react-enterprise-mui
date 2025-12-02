import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { getUsers } from './usersSlice'
import UserCard from '../../components/UserCard'

const UsersList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users, loading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (loading) return <CircularProgress />

  if (error) return <Alert severity="error">{error}</Alert>

  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UsersList

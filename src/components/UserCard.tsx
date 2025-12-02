import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { User } from '../types/User'

interface Props {
  user: User
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {user.company.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserCard

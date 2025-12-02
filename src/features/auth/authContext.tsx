import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface User {
  userId: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (userId: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>(null!)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const login = async (userId: string, password: string) => {
    // TODO: Replace with real authentication API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsAuthenticated(true)
    setUser({ userId })
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  const value = { isAuthenticated, user, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
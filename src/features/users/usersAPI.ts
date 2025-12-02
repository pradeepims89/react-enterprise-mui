import axios from 'axios'
import { User } from '../../types/User'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL)
  return response.data
}

export const postUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await axios.post<User>(API_URL, user)
  return response.data
}

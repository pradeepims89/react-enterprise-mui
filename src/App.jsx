import React from 'react';     
import { useSelector, useDispatch } from 'react-redux';
 import { increment, decrement, incrementByAmount } from './features/counters/counterSlice';
 import { loginUser, logout } from './features/auth/authSlice';
import { fetchTodos } from './features/todo/todoSlice';
// import './index.css';

import AddTask from './components/TodoTask/AddTask';
import TaskList from './components/TodoTask/TaskList';
import CounterTimer from './components/CounterTimer/CounterTimer';
// import Quiz from './components/mcq/Quiz'
import AuthForm from './components/LoginForm/AuthForm';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Header from './components/ContactManager/Header';  
import AddContacts from './components/ContactManager/AddContacts';
import ContactList from './components/ContactManager/ContactList';
import Counter2 from './features/counter2/Counter2';
import Todo from './features/todos/Todo';
import Products from './features/products/Products';
import  Card from './features/cart/Cart';

import DemoUseState from './components/Hooks/usestate'

import Demo from './components/Hooks/demo';



function App() {
  const dispatch = useDispatch();

  // Counter State
  const counter = useSelector(state  => state.counter.value);

  // // Auth State
   const auth = useSelector(state => state.auth);

  // // Todo State
   const todos = useSelector(state => state.todos);

  return (
    // <div style={{ padding: 20 }}>
    //   <h1>Redux Toolkit Multi Reducer Example</h1>

    //   {/* Counter */}
    //   <h2>Counter: {counter}</h2>

    //   <button onClick={() => dispatch(increment())}>+</button>
    //   <button onClick={() => dispatch(decrement())}>-</button>
    //   <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

    //  {/* Auth */}
    //   <h2>User: {auth.isLoggedIn ? auth.user.name : "Guest"}</h2>
    //   {!auth.isLoggedIn ? (
    //     <button onClick={() => dispatch(loginUser())}>
    //       Login (Async)
    //     </button>
    //   ) : (
    //     <button onClick={() => dispatch(logout())}>Logout</button>
    //   )}

    //   {/* Todos */}
    //   <h2>Todos</h2>
    //   <button onClick={() => dispatch(fetchTodos())}>
    //     Load Todos
    //   </button>

    //   {todos.loading && <p>Loading...</p>}
    //   <ul>
    //     {todos.items.map(todo => (
    //       <li key={todo.id}>{todo.title}</li>
    //     ))}
    //   </ul>
     
    // </div>

  // <div className='container'> 
  //           {/* <h1>Task Manager</h1>
  //    <AddTask />  
  //    <TaskList /> */}

  //    <CounterTimer />
  //   </div>
  // <div>
  //     <Quiz />
  //   </div>
  // <div>
  //     <AuthForm />
  //   </div>
  // <div>
  //     <TicTacToe />
  //   </div>  

  //  <div>
  //     <Header />
  //      <AddContacts />  
  //      <ContactList />
  //  </div>

  //  <div>
  //     <Counter2></Counter2>
  //  </div>

  // <div>
  // <Todo></Todo>
  // <Products></Products>
  // <Card></Card>
  // </div>
  // <DemoUseState></DemoUseState>
  <Demo></Demo>

  );
}

export default App;


// import React from 'react'
// import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
// import { AuthProvider, PrivateRoute } from './features/auth/authContext'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Divider from '@mui/material/Divider'
// import Grid from '@mui/material/Grid'
// import Paper from '@mui/material/Paper'
// import PeopleIcon from '@mui/icons-material/People'
// import PersonAddIcon from '@mui/icons-material/PersonAdd'
// import AssessmentIcon from '@mui/icons-material/Assessment'
// import InsightsIcon from '@mui/icons-material/Insights'
// import SettingsIcon from '@mui/icons-material/Settings'
// import HelpCenterIcon from '@mui/icons-material/HelpCenter'
// import UsersList from './features/users/UsersList'
// import AddUser from './features/users/AddUser'
// import Login from './features/auth/Login'
// import Reports from './features/reports/Reports'
// import Analytics from './features/analytics/Analytics'
// import Settings from './features/settings/Settings'
// import Support from './features/support/Support'
// import MainLayout from './components/MainLayout'


// const tiles = [
//   { title: 'Add User', subtitle: 'Create a new user', to: '/users/add', Icon: PersonAddIcon },
//   { title: 'Reports', subtitle: 'View reports', to: '/reports', Icon: AssessmentIcon },
//   { title: 'Analytics', subtitle: 'Usage analytics', to: '/analytics', Icon: InsightsIcon },
//   { title: 'Settings', subtitle: 'Application settings', to: '/settings', Icon: SettingsIcon },
//   { title: 'Support', subtitle: 'Help & documentation', to: '/support', Icon: HelpCenterIcon },
// ]

// const Home: React.FC = () => (
//   <Box sx={{ mb: 6 }}>
//     <Grid container spacing={3}>
//       {tiles.map((t) => {
//         const Icon = t.Icon
//         return (
//             <Grid key={t.title} item xs={12} sm={6} md={4}>
//             <Paper
//               component={Link}
//               to={t.to}
//               aria-label={t.title}
//               elevation={3}
//               sx={{
//                 p: 3,
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 transition: 'transform 0.18s ease, box-shadow 0.18s ease',
//                 '&:hover': {
//                   transform: 'translateY(-6px)',
//                   boxShadow: 6,
//                 },
//                 '&:focus': {
//                   outline: (theme) => `2px solid ${theme.palette.primary.main}`,
//                 },
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Icon color="primary" sx={{ fontSize: 36 }} />
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
//                     {t.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {t.subtitle}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Paper>
//           </Grid>
//         )
//       })}
//     </Grid>
//   </Box>
// )

// const UserManagement = () => (
//   <>
//     <Box sx={{ mb: 6 }}>
//       <Typography variant="h5" component="h2" gutterBottom>
//         Add New User
//       </Typography>
//       <AddUser />
//     </Box>

//     <Divider sx={{ my: 4 }} />

//     <Box>
//       <Typography variant="h5" component="h2" gutterBottom>
//         Users List
//       </Typography>
//       <UsersList />
//     </Box>
//   </>
// )

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           {/* <Route path="/login" element={<Login />} /> */}
//             <Route path="/Analytics" element={<Analytics />} />
          
//           <Route path="/" element={
//             <PrivateRoute>
//               <MainLayout />
//             </PrivateRoute>
//           }>
//             <Route index element={<Home />} />
//             <Route path="users" element={<UserManagement />} />
//             <Route path="users/add" element={<AddUser />} />
//             <Route path="reports" element={<Reports />} />
//             <Route path="analytics" element={<Analytics />} />
//             <Route path="settings" element={<Settings />} />
//             <Route path="support" element={<Support />} />
//           </Route>

//           <Route path="*" element={<Navigate to="/Analytics" replace />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   )
// }

// export default App




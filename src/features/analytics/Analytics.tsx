import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import  { increment,decrement,incrementByAmount} from '../counters/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
const Analytics: React.FC = () => {

//  const count = useSelector((state) => state.counters.value)
//  const dispatch = useDispatch()

const count =useSelector((state: any) => state.counter.name1);
const dispatch = useDispatch();

 console.log('Current count from Redux store:', count);
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Analytics count
         <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={()=>dispatch(increment())} >Increment</button>&nbsp;
      <button onClick={()=>dispatch(decrement())} >Decrement</button>&nbsp;
      <button  onClick={()=>dispatch(incrementByAmount(5))} >Increment by 5</button>
    </div>
      </Typography>
      <Typography color="text.secondary">Placeholder for analytics.</Typography>
    </Box>
  )
}

export default Analytics

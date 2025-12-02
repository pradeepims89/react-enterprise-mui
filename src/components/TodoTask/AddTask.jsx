import React from 'react'
import { useDispatch } from 'react-redux';
import { addTask, toggleTask, setFilter } from '../../features/task/tasksSlice';  

const AddTask = () => {

    const dispatch = useDispatch(); // Placeholder for dispatch function

  const [text, setText] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) return;
   // console.log("Task Added:", text);
    dispatch(addTask(text));
    setText('');
  }

    return (
            <form  className='form' onSubmit={handleSubmit}>
                <input 
                    type="text"
                   placeholder="Input task here..." 
                  value={text}  onChange={(e) => setText(e.target.value)}
                  className='input'
                 />
                <button type="submit" className='button' >Add Task</button>
            </form>
    )
}     

export default AddTask
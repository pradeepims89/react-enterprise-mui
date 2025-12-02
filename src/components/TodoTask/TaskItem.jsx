import { useDispatch } from "react-redux";
import { toggleTask ,deleteTask} from "../../features/task/tasksSlice";
const TaskItem = ({ task}) => {
 const dispatch = useDispatch();
    const onToggle = (id) => {
        // Dispatch toggle action
       dispatch(toggleTask(id));
    };

    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="todo-item"> 
             <span className="todo-text">{task.title}</span> 
            <button onClick={() => onToggle(task.id)}
                className="button" >
                {task.completed ? 'Undo' : 'Done'}
            </button>
            <button className="button delete"
               onClick={()=>dispatch(deleteTask(task.id))}  >
                Delete
            </button>
        </li>
    );
}

export default TaskItem;
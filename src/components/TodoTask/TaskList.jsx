import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { Filter } from "@mui/icons-material";
import FilterTask from "./FilterTask";
const TaskList = () => {
    const { items, filters } = useSelector(state => state.tasks);

     console.log("items in tasklist", filters)
    // const filteredItems = () => {
    //     if (filters === 'all') {
    //         return items;       
    //     } else if (filters === 'completed') {
    //         return items.filter(task => task.completed);
    //     }       
    //     return items;
    // }   
    
    const filteredItems = filters === 'all' ? items : items.filter(task => task.completed); 
    return (
        <ul className="todo-list" >
            <FilterTask />  
            {filteredItems.map(task => (task.title &&
                    <TaskItem key={task.id} task={task} />
            ))}
            {/* <ul>
            {items.map(task => (task.title &&
                <li key={task.id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}> 
                        {task.title}
                    </span>
                    <span>{task.id}</span>
                </li>
            ))}
        </ul>        */}

        </ul>
    )
};

export default TaskList;
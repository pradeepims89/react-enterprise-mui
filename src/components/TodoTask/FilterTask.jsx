import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../features/task/tasksSlice";
const FilterTask = () => {
    const filters = useSelector(state => state.tasks.filters)
    const dispatch = useDispatch();
    return (
        <div className="filter" >
            <button onClick={()=>dispatch(setFilter('all'))}
             className={`button ${filters === 'all' ? 'active' : ''}`} >All</button>
            <button onClick={()=>dispatch(setFilter('completed'))}  className={`button ${filters === 'completed' ? 'active' : ''}`} >Completed</button>
        </div>
    )
}
export default FilterTask;   
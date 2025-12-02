
import { useState } from "react";

const Demo = () => {
   const [count, setCount] = useState(0);
   const [user, setUser] = useState({ name: "Pradip", age: 25 });
   const [items, setItems] = useState([1, 2, 3]);
   const [users, setUsers] = useState([
      { id: 1, name: "A", age:22, active: false },
      { id: 2, name: "B",age:24, active: true }
   ]);



   // const setCounter=()=>
   // {
   //      setCount(
   //        prev=> prev+5
   //      )
   // }
   // const updateAge=()=>
   // {
   //      setUser(
   //        prev=>(

   //          {
   //             ...prev, age:30
   //          }
   //        )
   //      )
   // }
   // const updateArray=()=>
   // {
   //      setItems(
   //        prev=>[...prev, 6]
   //      )
   // }
   // const RemoveArray=()=>
   // {
   //      setItems( prev=>prev.filter(i=>i!=2)
   //      )
   // }

   const updateUser = () => {
      setUsers(prev => prev.map(u => u.id == 2 ? { ...u, name: 'update' } : u

      )


      )
   }
   const AddUser = () => {
      setUsers(prev => [...prev, { id: 3, name: 'sk' }])
   }

   const RemoveUser = () => {
      setUsers(prev => prev.filter(x => x.id != 1))
   }

   const ActiveUser = () => {
      setUsers(prev => prev.map(x => x.id === 1 ? { ...x, active: !x.active } : x))
   }
   
   const IncreaseUserage = () => {
     setUsers(prev=>prev.map(item=>({...item, age:item.age+1 }))
     )
   }




   return (
      // <>
      //  <div>
      //      <h1>Q1. </h1>  <h1>{count}</h1>  
      //      <button className="button"  onClick={setCounter}>Counter</button>   
      //  </div>
      //  <div>
      //      <h1>Q2. </h1>  <h1>{user.name}--{user.age}</h1>  
      //      <button className="button"  onClick={updateAge}>Age</button>   
      //  </div>
      //   <div>
      //      <h1>Q3. </h1>  <h1>
      //       {items.map(item=>item)}</h1>  
      //      <button className="button"  onClick={updateArray}>update Array</button>   
      //  </div>
      //    <div>
      //      <h1>Q4. </h1>  <h1>
      //       {items.map(item=>item)}</h1>  
      //      <button className="button"  onClick={RemoveArray}>update Array</button>   
      //  </div>

      // </>




      <>

         <div>
            {
               users.map(item => (
                  <div>{item.id}--{item.name}---{item.age}--{item.active ? 'true' : 'false' }</div>
               ))
            }
         </div>


          <button onClick={IncreaseUserage} >Increase age</button>
          <button onClick={ActiveUser}>Active</button>

         <button onClick={ActiveUser}>Active</button>
         <button onClick={AddUser}>Add</button>
         <button onClick={updateUser}>Update</button>
         <button onClick={RemoveUser}>RemoveUser</button>

      </>
   )
}


export default Demo; 
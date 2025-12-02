import React, { useState } from "react";
import { use } from "react";

const DemoUseState = () => {

     // const handleClick = () => {

     //      setCount(count+1)

     // }
function Lazy()
 {  
     console.log("lazy loading..")
     return 10;
 }
 const [log, setLog] = useState(()=>Lazy());
     const [count, setCount] = useState(0);
     const [user, setUser]=useState({
        firstname:'pradeep',
        lasrname:'Kumar',
        subjects:
        {
             subject1:'.Net',
             subject2:'azure',
             subject3:'DB'

        }
     })

     const updatename=()=>
        {
            setUser(prev=>(

                {
                    ...prev,
                    firstname:'PK',
                    subjects:
                    {
                        ...prev,
                        subject1:'pe'
                    }
                }

            ))
        }

        const updatevalue=()=>
        {
            setList(pre=>

                
                    (
                        [...pre, 5]
                    )
                    
                
            
               
            )
        }

        const RemoveItem=()=>
        {
            setItems(prev=>prev.filter(prev=>prev!=2))
        }

    const [list, setList]=useState([1,2,3])

    const [items, setItems] = useState([1, 2, 3]);

    
      const updateArray=()=>
      {
        setItems(
            prev=>[...prev, 4]
        )
      }


     return (
        //   <div>
        //        <h2>use state hook demos</h2>
        //        <h2>{count}</h2>
        //        <button onClick={(e) => setCount(
        //            (prev)=> prev + 1
               
        //        )
        //             }> click</button>
        //         <h1>lazy count {log}</h1>
        //             <button onClick={()=>setLog(log+1)} >Lazy click</button>

        //             <h3>
                        
        //                         <div>{user.firstname}</div>
        //                          <div>{user.lasrname}</div>
        //                          <div>{user.subjects.subject1}</div>
        //                         <div>{user.subjects.subject2}</div>
        //             </h3>
        //             <button onClick={updatename} >update</button>

        //             <div>List</div>
        //               {
        //                 list.map(x=>(

        //                     <div key={x}>{x}</div>
        //                 ))
        //               }

        //               <button onClick={updatevalue}>update arrya</button>

        //   </div>

          <div>
           2. Updating an Array in React
            {
                items.map(i=>(
                  
                    <div key={i}>{i}</div>
                )
            )}

           <button onClick={updateArray}>update </button><br></br>
            <button onClick={RemoveItem}>update </button>

           2.Remove item from array

          </div>

          
     )
}

export default DemoUseState;


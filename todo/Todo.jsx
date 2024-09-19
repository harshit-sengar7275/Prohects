import { MdCheck, MdDeleteForever  } from "react-icons/md";
import { useState } from "react";
import "./todo.css";
export const Todo = () => {
 
  const [inputValue, setInputValue] = useState("");
  // hme ek variable ki need hai jo user se data input lekr array me store kr de ___ ek esa veriable jiski value constently change  hoti rhegi. eske liye we need states
const [task, setTask] = useState([]); // yha ek array liya hai useState([]) me jesse esme input values store kra ske

const [dateTime, setDateTime] = useState("");


  const handleInputChange = (value) => {
    setInputValue(value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(!inputValue) return; //ager mera input value empty hai then return means velue ya data ko store mt krna
  
    if(task.includes(inputValue)){
        setInputValue(""); //wapas se input box ko empty kr dega
         return;
    }
    setTask((prevTask) => [...prevTask, inputValue])//previous data ko get ya access krne ki power updated function me hoti hai eski help se hum jo current states ke jo data hai use chod kr update state ke sare data ko access kr skte hain
    setInputValue(""); 
}
  
//Date and Time
const getDateTime = () => {
const now = new Date();
const formattedDate = now.toLocaleDateString();
const formattedTime = now.toLocaleTimeString();
setDateTime(`${formattedDate} - ${formattedTime}`)
};

setInterval(() => {
     getDateTime();
}, 1000)

//handleTodo delete function define
const handleDeleteTodo = () =>{
     console.log(task);
}
    return(
         <section className="todo-container">
              <header>
                   <h1>Todo List</h1>
                  <h2 className="date-time">{dateTime}</h2>
              </header>
              <section className="form">
                   <form onSubmit={handleFormSubmit}>
                       <div> 
                            <input type="text" 
                            className="todo-input" 
                            autoComplete="off"                             
                             value={inputValue}
                             onChange={(event) => handleInputChange(event.target.value)}
                            />
                       </div>
                       <div>
                            <button type="submit" className="todo-btn">
                                Add Task
                            </button>
                       </div>
                   </form>      
              </section>
              <section className="myUnOrdList">
                       <ul>
                          {
                               task.map((curTask, index) => {
                                   return(
                                      <>
                                         <li key={index} className="todo-item">
                                               <span>{curTask}</span>
                                               <button className="check-btn">
                                                     <MdCheck/>
                                               </button>
                                               <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                                                     <MdDeleteForever/>
                                               </button>
                                         </li>
                                      </>
                                   )
                                   
                               })
                          }
                       </ul>
              </section>
         </section>
    )
}
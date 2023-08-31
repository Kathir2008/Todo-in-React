import React, { useEffect, useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
  
    const handleTaskInputChange = (event) => {
      setTaskInput(event.target.value);
    };
  
    const handleTaskSubmit = (e) => {
      e.preventDefault()
      if (taskInput.trim() !== '') {
        setTasks([...tasks, taskInput]);
        setTaskInput('');
      }
    };
    const handleTaskDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      };
      const checked=()=>{
        document.getElementById('task').style.textDecoration="line-through";
        document.getElementById('checkedbox').disabled = true;
      }
      
    return (
        <div className="container mt-5">
          <h1 className="text-center mb-4">Todo List</h1>
          <form className="d-flex align-items-center mb-3" onSubmit={handleTaskSubmit}>
            <input
              type="text"
              className="form-control mr-2 col-6"
              value={taskInput}
              onChange={handleTaskInputChange}
              placeholder="Enter a task"
            />
            <button className="btn btn-primary" >
              +
            </button>
          </form>
          <div>
            {tasks.map((task, index) => (
              <div className="alert alert-dark " key={index} style={{marginRight:"200px",marginLeft:"200px"}}>
                <input type="checkbox" className='form-check-input' onClick={checked} id='checkedbox' style={{float:"left",width:"20px",height:"20px",marginTop:"7px"}}/>
                <p id='task'>{task}</p>
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => handleTaskDelete(index)}
              style={{marginTop:"-30px"}}
            >
              Delete
            </button>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Todo;

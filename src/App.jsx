import React,{memo, useState,useCallback} from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskList=memo(function TaskList({tasks,onRemove}){
  return (
    <>
    <ul className='mb-4'>
        {tasks.map((task)=>(
          <li className='font-bold flex gap-4 mb-4' key={task.id}>{task.text}
          <button onClick={()=>onRemove(task.id)} className='bg-amber-300 text-red-500 rounded-b-lg px-2 py-0.5'>Remove task</button>
          </li>
))}
      </ul>
      </>
  )
})

function App() {
  const [tasks,setTasks]=useState([
    {id:1,
      text:"task one"
    },
    {id:2,
      text:"task two"
    },
  ])
  const [newTask,setNewTask]=useState('')
  const addTask=()=>{
    if(newTask.trim()==="") return
    setTasks((prev)=>[...prev,{id:uuidv4(),text:newTask}])
    setNewTask("")
  }
  const removetask=useCallback((id)=>{
    setTasks((prev)=>prev.filter(ta=>ta.id!==id))
  },[])

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col gap-3 justify-center'>
      <h1 className='text-2xl text-lime-300 underline mb-4'>Task Manager</h1>
      <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} className='border-2 border-emerald-400'/>
      <button className='text-purple-500 bg-gray-400 font-bold' onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} onRemove={removetask} />
    </div>
    </div>
  )
}
export default App

import React,{useState} from 'react';

function App() {
  const [task,setTask]=useState([
    {id:1,
      text:"task one"
    },
    {id:1,
      text:"task one"
    },
  ])
  const [newTask,setNewTask]=useState('')

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col gap-3 justify-center'>
      <h1 className='text-2xl text-lime-300 underline mb-4'>Task Manager</h1>
      <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} className='border-2 border-emerald-400'/>
      <button className='text-purple-500 bg-gray-400 font-bold'>Add Task</button>
    </div>
    </div>
  )
}
export default App

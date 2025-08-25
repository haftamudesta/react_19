import React,{useState} from 'react';
import axios from 'axios';
import { useFormStatus } from 'react-dom';
import StopTimer from "./components/useRef/StopTimer"

function App() {
  const [response,setResponse]=useState(null)
  const {pending}=useFormStatus();

  async function submitLogin(formData){
    const username=formData.get("username").trim();
    const password=formData.get("password").trim();
    if (!username || !password) {
    setResponse({ error: "Username and password are required" });
    return;
  }
    try {
      const res = await axios.post(
        'https://dummyjson.com/auth/login',{ username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

    console.log('Login successful:', res.data);
    setResponse(res.data);
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = "Login failed";
    
    if (error.response) {
      errorMessage = error.response.data?.message || `Server error: ${error.response.status}`;
    } else if (error.request) {
      errorMessage = "No response from server. Please check your connection.";
    } else {
      errorMessage = error.message || "An unexpected error occurred";
    }
    setResponse({ error: errorMessage });
  }
  }
  return (
    <div className='flex justify-center items-center flex-col'>
    <div className='bg-gray-300 rounded-3xl flex flex-col justify-center items-center w-[50%] mt-3 mb-4'>
      <h1 className="text-2xl text-teal-400 text-center mt-3 underline">React 19 Form Actions</h1>
      <form action={submitLogin} className='flex flex-col gap-4 items-start bg-sky-700 p-8 mt-2 mb-3'>
        <input type="text" name='username' placeholder='User Name' className='border-2 border-sky-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300' />
        <input type="password" name='password' placeholder='password' className='border-2 border-sky-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300'  />
        <button className='bg-pink-400 rounded-4xl px-4 py-1 cursor-pointer' disabled={pending}>{pending?"Loging In":"Log In"}</button>
      </form>
      {response && (
        <div>
          {response?.error?(
            <p className='text-red-500 text-center'>{response.error}</p>
          ):(
            <div>
              <p>Log In Successfull</p>
            </div>
          )}
        </div>
      )}
    </div>
    <StopTimer />
    </div>
  )
}
export default App

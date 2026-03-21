import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FaHeart, FaCat} from "react-icons/fa";


function App() {
  const [data,setData]=useState("");

  const  handleClick=async ()=>{
      

       const image=await fetch("https://cataas.com/cat?json=true");
       const jsonimage= await image.json();
       setData(jsonimage);
       

   }

   return(
    <>
    <div className='flex flex-col bg-white items-center h-screen w-screen gap-5 mt-20'>
     
     <h1 className="text-3xl font-bold mb-10 -400 bg-gradient-to-r from-yellow-200 to-yellow-300 bg-[length:100%_40%] bg-no-repeat bg-bottom">Cat Random Image Generator</h1>

    {data && (
     
      <div className='border h-100 w-100 flex flex-col shadow-2xl items-center pt-20 rounded-2xl'>
      <img className="h-60 w-60 shadow-md rounded-2xl" src={data.url} alt="image"/>
      <div className='flex mt-7 mr-65'>
      <FaCat className="text-gray-700 text-3xl mr-4" />
      <FaHeart className="text-red-500 text-3xl" /> 
      </div>
      </div>
      
    )}

    <button className='border rounded-3xl px-4 py-3 font-bold bg-gray-300 shadow-2xl' onClick={handleClick} >click</button>
    </div>
    
    </>
   )
  }

export default App

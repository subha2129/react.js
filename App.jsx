import React, {useEffect, useState} from 'react'

function App() {
  const[user,setUser]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>setUser(data))

  },[])
  return (
    <div className='container'>
      <h1 className='title'>UserDetails</h1>
      <div className='user-list'>
        {user.map((Details)=>(
            <div key={user.id}> 
            <p>name:{Details.name}</p>
            <p>user email:{Details.email}</p>
            
            </div>

        ))}
      </div>
    </div>
  )
}

export default App
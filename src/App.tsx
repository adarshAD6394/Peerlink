import {} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'

function App() {
  const user = {
    id: 1,
    avatar: "https://example.com/avatar.jpg",
    name: "John Doe",
    lastSeen: "2 minutes ago",
    lastText: "Hello, how are you?"
  };
  return (
    
      <div className='flex flex-row'>
        <div className='flex-none w-20'>
          <Navbar></Navbar>
        </div>
        <div className='m-2 flex-auto w-54'>
          <UserCard user={user}></UserCard>
        </div>
        <div className='m-2 flex-init w-26'>
            <h2> Group Info</h2>
        </div>
      </div>
  
  )
}

export default App

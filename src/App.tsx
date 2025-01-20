import {} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ChatList from './pages/ChatList'
import ChatSection from './pages/ChatSection'

function App() {
  return (
    
      <div className='flex flex-row h-screen'>
        <div className='flex-none w-20'>
          <Navbar></Navbar>
        </div>
        <div className='m-2 flex flex-auto flex-row bg-userCard rounded-xl'>
          <div>
            <ChatList></ChatList>
          </div>
          <div className='m-2 flex-auto'>
              <ChatSection></ChatSection>
          </div>
        </div>
        <div className='mr-2 my-2 pr-2 flex-init w-80 bg-userCard rounded-xl'>
            <h2 className=' font-bold text-xl text-userCardText1 m-2'> Group Info</h2>
        </div>
      </div>
  
  )
}

export default App

import {} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ChatList from './pages/ChatList'
import ChatSection from './pages/ChatSection'
import GroupInfo from './components/GroupInfo'
import Members from './components/Members'

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
        <div>
          <div className='mr-3 my-2 pr-2 flex flex-col flex-init w-60 bg-userCard rounded-xl h-fit'>
              <GroupInfo></GroupInfo>
          </div>
          <div className='mr-3 my-2 pr-2 flex flex-col flex-init w-60 bg-userCard rounded-xl h-fit'>
            <Members></Members>
          </div>
        </div>
        {/* <div>
          <UserVideo></UserVideo>
        </div> */}
      </div>
  
  )
}

export default App

import React, { useState } from 'react'
import ChatBar from '../components/ChatBar'


const ChatSection: React.FC = () => {

    return(
        <div className='flex flex-col h-full'>
            <div>
                <ChatBar></ChatBar>
            </div>
            <div className='messageSection flex-grow'>
                <MessageSection></MessageSection>
            </div>
        </div>
    )
}

const MessageSection:React.FC = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        msg: "Hello, how are you?"
    })
    return(
        <div className='flex flex-col h-full'>
            <div className='flex-grow p-2 space-y-2'>
                <div className='flex flex-col space-y-2'>
                    <div className='flex flex-row justify-end'>
                        <div className='bg-sendText p-2 rounded-xl'>
                            <h4 className='text-userCardText1'>{user.name}</h4>
                            <p className='text-MessageText1 text-userCardText1'>{user.msg}</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div className='bg-recieveText p-2 rounded-xl'>
                            <h4 className='text-userCardText1'>{user.name}</h4>
                            <p className='text-MessageText2 text-userCardText1'>I am fine, thank you. How are you?</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <div className='bg-Message1 p-2 rounded-xl'>
                            <p className='text-MessageText1 text-userCardText1'>I am good too. Thanks for asking.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TypeChat></TypeChat>
            </div>
        </div>
    )
}

const TypeChat: React.FC = () => {
    return(
        <div className='bg-Barbg rounded-xl p-2 h-12 flex items-center'>
                <div className='flex flex-grow space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-Icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                        </svg>
                        <input 
                            type="text" 
                            placeholder='Your Message' 
                            className=' flex-grow bg-Barbg outline-none sm text-Icon'/>
                </div>
                <div className='flex flex-row space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-Icon">
                            <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                            <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-Icon">
                            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                        </svg>
                </div>  
        </div>
    )
}


export default ChatSection
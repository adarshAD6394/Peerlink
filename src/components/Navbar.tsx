import React, { useState } from 'react';
// import './Navbar.css';

const Navbar: React.FC = () => {
    const [categories, setCategories] = useState([
        {name:"All Chat", icons:"chat", href:'#AllChats'},
        {name:"Work", icons:"briefcase", href:'#Work'},
        {name:"Friend", icons:"user-group", href:'#Friend'},
        {name:"Archive", icons:"archive", href:'#Archive'},
    ]);
    const getIcon = (icon:string) =>{
        switch(icon){
            case "chat":
                return(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a1a1aa" className="size-8">
                        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                    </svg>
                );
            case "briefcase":
                return(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a1a1aa" className="size-8">
                        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                    </svg>
                );
            case "user-group":
                return( 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a1a1aa" className="size-8">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
    );
            case "archive":
                return(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a1a1aa" className="size-8">
                        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                        <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return null;
        }
    }
    
    return (
        <nav className='p-2 fixed h-full bg-navBg flex flex-col'>
            <div className='logo p-1'>
                <img src="src\assets\messenger.png" alt="logo" className='w-14' />
            </div>
            <div className='p-1 h-full flex flex-col justify-between'>
                
                <div className='ChatSection pt-5'>
                    <ul className=' py-3 space-y-5'>
                        {categories.map((category) => 
                            <li key={category.name} >
                                <div className='bg-zinc-900 p-2 rounded-lg hover:bg-navIconHover flex  justify-center'>
                                    <a href={category.href} className='hover:navTextHover'>
                                        <span className='hover:text-navTextHover'> {getIcon(category.icons)}</span>
                                        <h6 className='text-xs text-navText hover:navTextHover'>{category.name}</h6>
                                    </a>    
                                </div>  
                            </li>
                        )}
                    </ul>
                </div>
                {/* <div className='sepetaor'>
                    <h4 className='text-zinc-400'>_____</h4>
                </div> */}
                <div className='UserSection space-y-3 flex flex-col justify-center'>
                    <div className='userProfile ' >
                        <ul className='py-3 p-2'>
                            <a href="#Profile" className='items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a1a1aa" className="size-8">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                                <h6 className='text-zinc-400 -indent-1'>Profile</h6>
                            </a>
                        </ul>
                    </div>
                    <div className='Log-out'>
                        <button className='space-y-1 p-2  items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a1a1aa" className="size-8">
                                <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            <h6 className='text-zinc-400 -indent-2'>Log out</h6>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


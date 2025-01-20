
import UserCard from "../components/UserCard";  


const ChatList = () => {
    const user = {
        id: 1,
        avatar: "src/assets/johndoe.jpeg",
        name: "John Doe",
        lastSeen: "2m",
        lastText: "Hello, how are you?"
      };
    return (
        <div className='flex flex-col h-full'>
            <div className="m-2 rounded-xl">
                <SearchBar/>
            </div>
            <div className='m-2'>
                <UserCard user={user}></UserCard>
            </div>
        </div>
    )
}


export const SearchBar = () => {
    return (
        <div className="flex items-center bg-Barbg rounded-xl w-full h-8 px-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-Icon mr-2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
            <input
                type="text"
                placeholder="Search or Start a new chat"
                className="flex-grow bg-transparent outline-none sm text-Icon"
            />
        </div>
    );
};


export default ChatList;
import React, {} from "react";

interface userdetails{
    id: number;
    name: string;
    avatar: string;
    lastSeen: string;
    lastText: string;
}
interface user{
    user: userdetails;
}

const UserCard: React.FC<user> = ({user, }) => { 
    return(
        <div className="userCard flex flex-row p-2 bg-userCard rounded-xl w-30 hover:bg-userCardHover transition-colors duration-300 delay-70">
            <div>
                <img
                src={user.avatar}
                alt={`${user.name}'s avatar`} 
                className="user-avatar w-16 h-16 rounded-xl "
                />
            </div>
            <div className="flex flex-col justify-center">
                <div className="user-info flex flex-row justify-between">
                    <div className="info">
                        <h3 className="userName px-3.5 font-bold text-userCardText1">{user.name}</h3>
                    </div>
                    <div>
                        <h5 className="lastSeen font-light text-userCardText2">{user.lastSeen}</h5>
                    </div>
                </div>
                    <div className="lastText">
                        <h3 className="text px-3.5 font-light text-userCardText2">{user.lastText}</h3>
                    </div>
            </div>
           
        </div>
    )
}

export default UserCard;
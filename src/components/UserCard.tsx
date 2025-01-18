import React from "react";

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
        <div className="userCard">
            <img
             src={user.avatar}
             alt={`${user.name}'s avatar`} 
             className="user-avatar"
            />
            <div className="user-info">
                <div className="info">
                    <h3 className="userName ">{user.name}</h3>
                    <h5 className="lastSeen">{user.lastSeen}</h5>
                </div>
                <div className="lastText">
                    <h3 className="text">{user.lastText}</h3>
                </div>

            </div>
        </div>
    )
}

export default UserCard;
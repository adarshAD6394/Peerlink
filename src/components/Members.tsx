import React from "react";
import UserCard from "./UserCard";

const Members = () => {
    const user = {
        id: 1,
        avatar: "src/assets/johndoe.jpeg",
        name: "John Doe",
        lastSeen: "2m",
        lastText: "Hello, how are you?"
      };
    return(
        <div className="bg-userCard rounded-xl p-2">
            <div className="my-4">
                <span className="m-2 text-l font-bold text-userCardText1"> 23 Members</span>
            </div>
            <div className="">
                <UserCard user={user}></UserCard>
            </div>
        </div>
    );
}
export default Members;
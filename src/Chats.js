import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="User 1"
        message="Hey ! adipisicing"
        timeStamp="35 min ago"
        profilePic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Chat
        name="User 2"
        message="Hi ! loerm adipisicing"
        timeStamp="5 secs ago"
        profilePic="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"
      />
      <Chat
        name="User 3"
        message="!!ok adipisicing.........."
        timeStamp="1 hr ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxVlka3ABSpJWJ2LoyPxgIpOarH_kYMZ1S_AexbSqwWa-491bvkeH4vdhJ9fHyN7YdcA&usqp=CAU"
      />
    </div>
  );
};

export default Chats;

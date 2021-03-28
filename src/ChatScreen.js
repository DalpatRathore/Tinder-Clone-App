import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "user 1",
      image:
        "https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg",
      message: "elit adipisicing voluptatum",
    },
    {
      name: "user 2",
      image:
        "https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg",
      message: "adipisicing elit. Voluptatum, est?",
    },
    {
      message: "Lorem ipsum dolor sit amet consectetur ",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timeStamp">You Matched.....</p>
      {messages.map(message =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            ></Avatar>
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__text chatScreen__text--user">
              {message.message}
            </p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          type="text"
          className="chatScreen__inputField"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="chatScreen__inputButton">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;

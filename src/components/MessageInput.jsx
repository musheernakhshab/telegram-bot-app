import React from "react";

const MessageInput = ({ message, setMessage, sendMessage }) => (
    <div style={{ marginTop: "20px" }}>
        <input
            type="text"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "300px", padding: "10px" }}
        />
        <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "10px" }}>
            Send
        </button>
    </div>
);

export default MessageInput;

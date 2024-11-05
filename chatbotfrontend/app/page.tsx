"use client";

import { useState } from "react";
import { ChatCompletion } from "./chat-completion.interface";
import createChatCompletion from "./createChatCompletion";

export default function Home() {
  const [messages, setMessages] = useState<ChatCompletion[]>([]);
  const [message, setMessage] = useState("");
  const handleMessage = async () => {
    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];
    setMessages(updatedMessages);
    setMessage("");
    const reponse = (await createChatCompletion(updatedMessages)).choices[0]
      ?.message;
    setMessages([...messages, reponse]);
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-10 container mx-auto pl-4 pt-6 pr-4">
      <div className="flex flex-col gap-3 h-[75%] overflow-scroll w-full">
        {messages.map((message, index) => (
          <div key={index} className={""}>
            {message.role === "user" && (
              <div className="chat-start">
                <p className="text-sm">{message.role == "user" && "YOu"}</p>
                <div className="text-sm chat-start chat-bubble">
                  {message.content}
                </div>
              </div>
            )}
            {message.role === "assistant" && (
              <div className="chat-end">
                <p className="text-sm">{message.role}</p>
                <div className="text-sm chat-end chat-bubble">
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={async (event) => {
          if (event.key === "Enter") {
            await handleMessage();
          }
        }}
        className="input input-bordered w-full m-10"
      />
    </div>
  );
}

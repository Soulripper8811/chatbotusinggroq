"use server";

import { ChatCompletion } from "./chat-completion.interface";

export default async function createChatCompletion(messages: ChatCompletion[]) {
  const repsonse = await fetch(`${process.env.API_URL}/groq/chatCompletion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
    }),
  });
  return repsonse.json();
}

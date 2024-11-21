"use client";

import { chatReducer } from "@/reducers/chatReducer";
import { ChatContextProperties } from "@/types/Context";
import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";



export const ChatContext = createContext<ChatContextProperties | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, dispatch] = useReducer(chatReducer, []);
  const addMessage = (user: string, text: string) =>
    dispatch({
      switchAction: {
        type: "add",
        payload: { user, text },
      },
    });
  return (
    <ChatContext.Provider value={{ chat, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);

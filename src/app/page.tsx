import Chat from "@/components/Chat";
import { ChatProvider } from "@/contexts/Chat";
import { UserProvider } from "@/contexts/User";
import React, { FC } from "react";


const ChatSimples: FC = () => {
  
  return (
    <div className="h-screen bg-gradient-to-tr to-gray-400 from-slate-900  flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-lg px-2">
        <UserProvider>
          <ChatProvider>
            <h2 className="text-3xl my-3 text-center text-white">Chat Simples</h2>

            <Chat/>
          </ChatProvider>
        </UserProvider>
      </div>
      
    </div>
  );
};

export default ChatSimples;

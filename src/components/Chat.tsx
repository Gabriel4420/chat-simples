"use client";
import { useUser } from "@/contexts/User";
import NameInput from "./NameInput";
import ChatInput from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

const Chat: React.FC = () => {
  const userCTX = useUser();

  if (!userCTX) {
    return null;
  } else if (!userCTX.user) {
    return <NameInput />;
  } else {
    return (
      <div className=" rounded-md">
        <div className="h-96 p-3 overflow-y-scroll scrollbar-thin scrollbar-track-blue-900 scrollbar-thumb-slate-500 scrollbar-">
          <ChatMessages />
        </div>
        <div className="border-t border-t-white/30 py-3 my-3">
          <ChatInput name={userCTX.user} />
        </div>
        <div className="p3">
          <ChatInput name={"bot"} />
        </div>
      </div>
    );
  }
};

export default Chat;

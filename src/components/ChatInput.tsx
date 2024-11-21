import { useChat } from "@/contexts/Chat";
import handlers from "@/helper/handleKeyUp";
import { InputProps } from "@/types/Input";
import React, { FC, useState } from "react";

const Input: FC<InputProps> = ({ name }) => {
  const chatCtx = useChat();

  const [textInput, setTextInput] = useState("");

  return (
    <input
      value={textInput}
      onChange={(e) => setTextInput(e.target.value)}
      onKeyUp={(e) =>
        handlers({
          chatCtx,
          textInput,
          setTextInput,
          name,
        }).handleKeyUpActionChat(e)
      }
      className="flex-1 border border-white/30 rounded-full px-4 py-3 w-full text-white bg-transparent outline-none"
      placeholder={`${name}, digite uma mensagem e aperte enter `}
    />
  );
};

export default Input;

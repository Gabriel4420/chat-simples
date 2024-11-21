import { ChatContextProperties, UserContextProperties } from "@/types/Context";
import { Dispatch, KeyboardEvent, SetStateAction } from "react";

interface handlersProps {
  textInput?: string;
  chatCtx?: ChatContextProperties | null;
  nameInput?: string;
  userCtx?: UserContextProperties | null;
  setTextInput?: Dispatch<SetStateAction<string>>;
  name?: string;
}

const handlers = ({
  textInput,
  chatCtx,
  name,
  nameInput,
  setTextInput,
  userCtx,
}: handlersProps) => {
  function handleKeyUpActionUser(event: KeyboardEvent<HTMLInputElement>): void {
    if (nameInput) {
      if (event.code.toLowerCase() === "enter") {
        if (nameInput.trim() !== "" && nameInput !== "bot") {
          userCtx?.setUser(nameInput.trim());
        }
      }
    }
  }

  function handleKeyUpActionChat(e: KeyboardEvent<HTMLInputElement>) {
    if (name && textInput && setTextInput) {
      if (e.code.toLowerCase() === "enter" || e.keyCode == 176) {
        if (textInput.trim() !== "") {
          chatCtx?.addMessage(name, textInput.trim());
          setTextInput("");
        }
      }
    }
  }

  return { handleKeyUpActionUser, handleKeyUpActionChat };
};

export default handlers;

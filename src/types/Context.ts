import { Message } from "./Message";

export type UserContextProperties = {
  user:string,
  setUser: (newUser:string) => void
}

export type ChatContextProperties = {
  chat: Array<Message>;
  addMessage: (user: string, text: string) => void;
};
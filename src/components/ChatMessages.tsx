import { useChat } from "@/contexts/Chat";
import { useUser } from "@/contexts/User";

export const ChatMessages = () => {
  const chatCtx = useChat();
  const userCtx = useUser();

  return (
    <div className="flex flex-col gap-3">
      {chatCtx?.chat.map((i) => (
        <div className={`border border-white/20 rounded-lg p-2 text-sm  ${i.user === userCtx?.user ? 'self-end bg-white/10' : 'self-start bg-white/5'} `} key={i.id}>
          <div className="font-bold">{i.user}</div>
          <p>{i.text}</p>
        </div>
      ))}
    </div>
  );
};

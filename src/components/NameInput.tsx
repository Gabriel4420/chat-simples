"use client";

import { useUser } from "@/contexts/User";
import handlers from "@/helper/handleKeyUp";
import { FC, useState, KeyboardEvent } from "react";

const NameInput: FC = () => {
  const userCtx = useUser();
  const [nameInput, setNameInput] = useState("");

  return (
    <div className="mt-14">
      <p className="text-xl mb-4">Qual o seu nome ?</p>
      <div className="flex gap-3 items-center text-lg">
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyUp={(e) =>
            handlers({ nameInput, userCtx }).handleKeyUpActionUser(e)
          }
          className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none"
        />
      </div>
    </div>
  );
};

export default NameInput;

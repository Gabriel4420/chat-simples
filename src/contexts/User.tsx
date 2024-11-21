"use client"

import { createContext, ReactNode, useContext, useState } from "react"
import { UserContextProperties } from "@/types/Context";


export const UserContext = createContext<UserContextProperties | null>(null)

export const UserProvider = ({children}:{children:ReactNode}) => {
  const [user, setUser] =  useState('')

  return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
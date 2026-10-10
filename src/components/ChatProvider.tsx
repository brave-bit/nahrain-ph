"use client";

import { createContext, useContext, useState } from "react";

type Ctx = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const ChatCtx = createContext<Ctx | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ChatCtx.Provider value={{ open, setOpen }}>{children}</ChatCtx.Provider>
  );
}

export function useChatBox() {
  const ctx = useContext(ChatCtx);
  if (!ctx) throw new Error("ChatProvider missing");
  return ctx;
}

export function ChatBtn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useChatBox();
  return (
    <button type="button" className={className} onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}

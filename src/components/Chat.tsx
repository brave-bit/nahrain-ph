"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { useChatBox } from "./ChatProvider";

type Msg = { role: "user" | "assistant"; content: string };

export default function Chat() {
  const { open, setOpen } = useChatBox();
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content: "هلا، شنو تريد تعرف؟ خدمات، أوقات، لو العنوان.",
    },
  ]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [showBadge, setShowBadge] = useState(true);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("nahrain_welcome_closed") === "1") {
      setShowWelcome(false);
      setShowBadge(false);
    }
  }, []);

  useEffect(() => {
    if (open && box.current) {
      box.current.scrollTop = box.current.scrollHeight;
    }
  }, [msgs, open, loading]);

  function closeWelcome() {
    setShowWelcome(false);
    setShowBadge(false);
    sessionStorage.setItem("nahrain_welcome_closed", "1");
  }

  function openChat() {
    setOpen(true);
    setShowWelcome(false);
    setShowBadge(false);
    sessionStorage.setItem("nahrain_welcome_closed", "1");
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const q = text.trim();
    if (!q || loading) return;

    const next = [...msgs, { role: "user" as const, content: q }];
    setMsgs(next);
    setText("");
    setLoading(true);
    setErr("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "خطأ");
      setMsgs([...next, { role: "assistant", content: data.reply }]);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "صار خطأ");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        dir="ltr"
        className="fixed bottom-6 left-6 z-50 flex max-w-[min(18rem,calc(100vw-2rem))] flex-col items-start"
      >
        {showWelcome && !open && (
          <div
            dir="rtl"
            className="relative mb-3 w-[min(16rem,calc(100vw-4.5rem))] rounded-2xl bg-slate-900/95 px-4 py-3 text-sm text-white shadow-xl shadow-slate-950/50 backdrop-blur sm:w-[18rem]"
          >
            <button
              type="button"
              onClick={closeWelcome}
              className="absolute left-2 top-2 rounded-md p-1 text-white/70 hover:bg-white/10 hover:text-white"
              aria-label="إغلاق"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="pl-5 leading-relaxed">
              هلا 👋 أنا{" "}
              <span className="font-bold text-amber-300">مساعد النهرين</span>.
              تريد شي من الصيدلية؟
            </p>
            <span
              className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 bg-slate-900/95"
              aria-hidden
            />
          </div>
        )}

        <div className="relative">
          {showBadge && !open && (
            <span className="animate-badge-pulse absolute -right-0.5 -top-0.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-amber-950 ring-2 ring-white">
              1
            </span>
          )}

          <button
            type="button"
            onClick={() => (open ? setOpen(false) : openChat())}
            className="animate-float-bob flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-700 text-white shadow-[0_12px_28px_rgba(15,23,42,0.55)] ring-4 ring-cyan-200/30 transition hover:scale-105"
            title="مساعد النهرين"
            aria-label={open ? "إغلاق المساعد" : "فتح المساعد"}
          >
            {open ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          dir="rtl"
          className="fixed bottom-24 left-6 z-50 flex h-[min(26rem,70dvh)] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-emerald-950/20"
        >
          <div className="flex items-center justify-between bg-[#0b132b] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold">مساعد النهرين</p>
                <p className="text-[11px] text-cyan-200/80">متصل الآن</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1.5 hover:bg-white/10"
              aria-label="إغلاق"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={box} className="flex-1 space-y-2 overflow-y-auto bg-slate-50 p-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-tr-md bg-emerald-600 text-white"
                      : "rounded-tl-md border border-slate-200 bg-white text-slate-800"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left text-xs text-slate-500">يكتب...</div>
            )}
            {err && (
              <div className="rounded-lg bg-red-50 p-2 text-center text-xs text-red-600">
                {err}
              </div>
            )}
          </div>

          <form onSubmit={send} className="flex gap-2 border-t border-slate-200 bg-white p-2.5">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="اكتب سؤالك..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-base outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !text.trim()}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3.5 text-white transition hover:bg-emerald-700 disabled:opacity-50"
              aria-label="إرسال"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

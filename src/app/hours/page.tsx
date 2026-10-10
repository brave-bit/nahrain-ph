import type { Metadata } from "next";
import { ChatBtn } from "@/components/ChatProvider";
import { hours } from "@/lib/data";

export const metadata: Metadata = { title: "أوقات العمل" };

export default function HoursPage() {
  return (
    <div>
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <h1 className="fade-up text-3xl font-bold text-slate-900">أوقات العمل</h1>
        <p className="fade-up delay-1 mt-2 text-slate-600">مواعيد فتح الصيدلية خلال الأسبوع</p>

        <ul className="fade-up delay-2 mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {hours.map((h) => (
            <li
              key={h.day}
              className="flex justify-between border-b border-slate-100 px-5 py-3.5 last:border-b-0"
            >
              <span className="font-semibold text-slate-900">{h.day}</span>
              <span className="text-slate-600">{h.time}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <ChatBtn className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-400">
            اسأل اذا مفتحين الحين
          </ChatBtn>
        </div>
      </div>
    </div>
  );
}

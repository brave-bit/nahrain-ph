import type { Metadata } from "next";
import Image from "next/image";
import {
  Baby,
  FileText,
  HeartPulse,
  Pill,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { ChatBtn } from "@/components/ChatProvider";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "الخدمات" };

const icons = [Pill, FileText, Stethoscope, HeartPulse, Baby, Sparkles];

export default function ServicesPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <h1 className="fade-up text-3xl font-bold text-slate-900 sm:text-4xl">
          الخدمات
        </h1>
        <p className="fade-up delay-1 mt-2 max-w-xl text-slate-600">
          هاي الخدمات المتوفرة بالصيدلية — أو اسأل المساعد لأي تفصيل
        </p>

        <div className="fade-up delay-2 mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i] || Pill;
            return (
              <div
                key={s.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-teal-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-slate-900">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-[#0b132b] px-6 py-8 text-center text-white">
          <p className="mb-4 text-lg font-semibold">عندك سؤال عن خدمة؟</p>
          <ChatBtn className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400">
            افتح المساعد
          </ChatBtn>
        </div>
      </div>
    </div>
  );
}

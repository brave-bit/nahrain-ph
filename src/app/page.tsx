import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  FileText,
  Pill,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { ChatBtn } from "@/components/ChatProvider";
import { pharmacy, services } from "@/lib/data";

const serviceIcons = [Pill, FileText, Stethoscope];

const heroImage =
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1800&q=80";

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden text-white">
        <Image
          src={heroImage}
          alt="صيدلية النهرين"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0b132b]/80" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-l from-[#0b132b]/90 via-[#0b132b]/55 to-[#064e3b]/35"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(16,185,129,0.22),transparent_50%),radial-gradient(ellipse_at_15%_80%,rgba(34,211,238,0.12),transparent_45%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#f8fafc]/80 to-[#f8fafc]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl -translate-y-5 items-center gap-8 px-4 pt-16 pb-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-28 md:-translate-y-12">
          <div>
            <span className="fade-up inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
              مدعوم بالذكاء الاصطناعي
            </span>

            <h1 className="fade-up delay-1 mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {pharmacy.name}
            </h1>

            <p className="fade-up delay-2 mt-5 max-w-md text-base leading-relaxed text-slate-200/90 sm:text-lg">
              اعرف الخدمات وأوقات العمل والعنوان فوراً — بدون ما تنتظر الموظف.
            </p>

            <div className="fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
              <ChatBtn className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-[1.03] hover:bg-emerald-400">
                <Bot className="h-4 w-4" />
                ابدأ المحادثة
              </ChatBtn>
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                الخدمات
              </Link>
            </div>
          </div>

          <div className="fade-up delay-4 relative mx-auto w-full max-w-sm">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-transparent blur-2xl"
              aria-hidden
            />
            <div className="relative rounded-3xl border border-white/15 bg-slate-900/60 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-md shadow-emerald-500/30">
                    <Bot className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">مساعد النهرين</p>
                    <p className="text-xs text-slate-400">متصل للدردشة</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  متصل الآن
                </span>
              </div>

              <div className="space-y-3 rounded-2xl bg-slate-950/70 p-3">
                <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3 py-2 text-sm text-slate-800">
                  هلا، شنو تريد تعرف؟
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-emerald-500 px-3 py-2 text-sm text-white">
                  شنو أوقات العمل؟
                </div>
                <div className="mr-auto max-w-[90%] rounded-2xl rounded-tl-md bg-white px-3 py-2 text-sm text-slate-800">
                  من السبت للخميس 9 ص لـ 10 م، والجمعة من 2 م لـ 9 م.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-2 pb-20 sm:px-6 sm:pt-6 md:pt-10">
        <div className="fade-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">خدماتنا</h2>
          <p className="mt-2 text-slate-600">
            أبرز ما نقدّمه في الصيدلية — واضغط للمزيد من التفاصيل
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => {
            const Icon = serviceIcons[i] || Pill;
            const delays = ["delay-1", "delay-2", "delay-3"];
            return (
              <div
                key={s.id}
                className={`fade-up ${delays[i]} group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent" />
                </div>
                <div className="p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-teal-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition group-hover:gap-2"
                  >
                    اعرف أكثر
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="fade-up delay-4 mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex font-semibold text-slate-800 underline-offset-4 hover:text-teal-700 hover:underline"
          >
            عرض كل الخدمات
          </Link>
        </div>
      </section>
    </div>
  );
}

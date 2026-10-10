import type { Metadata } from "next";
import { faqs, pharmacy } from "@/lib/data";

export const metadata: Metadata = { title: "عن الصيدلية" };

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <h1 className="fade-up text-3xl font-bold text-slate-900">
          عن {pharmacy.name}
        </h1>
        <p className="fade-up delay-1 mt-4 leading-7 text-slate-700">{pharmacy.description}</p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">سنة الفتح</p>
            <p className="mt-1 text-xl font-bold text-slate-900">
              {pharmacy.year}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">العنوان</p>
            <p className="mt-1 font-bold text-slate-900">{pharmacy.address}</p>
          </div>
        </div>

        <h2 className="mt-12 text-xl font-bold text-slate-900">أسئلة شائعة</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

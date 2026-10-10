import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ChatBtn } from "@/components/ChatProvider";
import { pharmacy } from "@/lib/data";

export const metadata: Metadata = { title: "تواصل" };

export default function ContactPage() {
  return (
    <div>
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <h1 className="fade-up text-3xl font-bold text-slate-900">تواصل معنا</h1>
        <p className="fade-up delay-1 mt-2 text-slate-600">معلومات الاتصال بـ {pharmacy.name}</p>

        <div className="fade-up delay-2 mt-8 space-y-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm text-slate-500">العنوان</p>
                <p className="font-semibold text-slate-900">{pharmacy.address}</p>
                <a
                  href={pharmacy.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-teal-700 hover:underline"
                >
                  فتح الخريطة
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm text-slate-500">هاتف</p>
                <a
                  href={`tel:${pharmacy.phone}`}
                  className="font-semibold text-slate-900 hover:text-teal-700"
                >
                  {pharmacy.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm text-slate-500">ايميل</p>
                <a
                  href={`mailto:${pharmacy.email}`}
                  className="font-semibold text-slate-900 hover:text-teal-700"
                >
                  {pharmacy.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm text-slate-500">واتساب</p>
                <a
                  href={`https://wa.me/${pharmacy.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-900 hover:text-teal-700"
                >
                  +{pharmacy.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <ChatBtn className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-400">
            أو اسأل المساعد
          </ChatBtn>
        </div>
      </div>
    </div>
  );
}

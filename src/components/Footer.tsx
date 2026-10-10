import Link from "next/link";
import { Cross, Mail, MapPin, Phone } from "lucide-react";
import { pharmacy } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0b132b] text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600">
              <Cross className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <p className="text-lg font-bold">{pharmacy.name}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            صيدلية موثوقة في الجادرية مع مساعد ذكي يجاوبك عن الخدمات وأوقات
            العمل فوراً.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-cyan-200">روابط سريعة</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/services" className="hover:text-emerald-300">
                الخدمات
              </Link>
            </li>
            <li>
              <Link href="/hours" className="hover:text-emerald-300">
                أوقات العمل
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-300">
                عن الصيدلية
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-300">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-cyan-200">تواصل</p>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>{pharmacy.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
              <a href={`tel:${pharmacy.phone}`} className="hover:text-white">
                {pharmacy.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
              <a href={`mailto:${pharmacy.email}`} className="hover:text-white">
                {pharmacy.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-4 text-center text-xs text-slate-500">
        © 2026 {pharmacy.name} — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}

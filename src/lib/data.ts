// معلومات الصيدلية - عدل من هنا

export const pharmacy = {
  name: "صيدلية النهرين",
  tagline: "مساعد ذكي يجاوبك عن الخدمات وأوقات العمل فوراً",
  description:
    "صيدلية النهرين في الجادرية - بغداد، نوفر أدوية واستشارات صيدلانية وقياس ضغط وسكر. الموقع يساعد الزبون يعرف الخدمات وأوقات العمل بدون ما يسأل الموظف كل مرة.",
  phone: "0719450201",
  whatsapp: "9647719450201",
  email: "nahrain.pharmacy@gmail.com",
  address: "الجادرية - بغداد",
  mapUrl: "https://ul.waze.com/ul?venue_id=29098317.290852096.25459773&overview=yes&utm_campaign=live_map&utm_source=waze_website&utm_medium=lm_share_location",
  year: 2019,
};

export const hours = [
  { day: "السبت", time: "9 ص - 10 م" },
  { day: "الأحد", time: "9 ص - 10 م" },
  { day: "الاثنين", time: "9 ص - 10 م" },
  { day: "الثلاثاء", time: "9 ص - 10 م" },
  { day: "الأربعاء", time: "9 ص - 10 م" },
  { day: "الخميس", time: "9 ص - 10 م" },
  { day: "الجمعة", time: "2 م - 9 م" },
];

export const services = [
  {
    id: "1",
    title: "أدوية بدون وصفة",
    desc: "مسكنات وفيتامينات وأدوية بسيطة متوفرة عندنا.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "صرف الوصفات",
    desc: "نصرف الوصفة ونشرح لك طريقة الاستخدام.",
    image:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "استشارة صيدلاني",
    desc: "تگدر تسأل الصيدلاني عن الدواء والجرعة.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "قياس الضغط والسكر",
    desc: "خدمة قياس داخل الصيدلية.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "مستلزمات أطفال",
    desc: "حليب وحفاظات ومستحضرات للأطفال.",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    title: "عناية وبشرة",
    desc: "كريمات وواقي شمس ومنتجات عناية.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
  },
];

export const faqs = [
  {
    q: "عندكم توصيل؟",
    a: "حالياً لا، الاستلام من الصيدلية. گدر تتصل قبل ما تجي تتأكد من الدواء.",
  },
  {
    q: "تقبلون وصفة إلكترونية؟",
    a: "نعم، الورقية والإلكترونية. الأفضل تجيب الوصفة الأصلية.",
  },
  {
    q: "أكو صيدلاني؟",
    a: "نعم، موجود خلال أوقات العمل.",
  },
  {
    q: "شلون أدفع؟",
    a: "كاش أو بطاقة إذا الجهاز شغال.",
  },
];

// نص ينرسل للـ AI حتى يعرف معلومات الصيدلية
export function pharmacyInfoText() {
  let text = `الاسم: ${pharmacy.name}
الوصف: ${pharmacy.description}
الهاتف: ${pharmacy.phone}
واتساب: +${pharmacy.whatsapp}
الايميل: ${pharmacy.email}
العنوان: ${pharmacy.address}
سنة الفتح: ${pharmacy.year}

أوقات العمل:
`;
  hours.forEach((h) => {
    text += `${h.day}: ${h.time}\n`;
  });

  text += "\nالخدمات:\n";
  services.forEach((s) => {
    text += `- ${s.title}: ${s.desc}\n`;
  });

  text += "\nأسئلة شائعة:\n";
  faqs.forEach((f) => {
    text += `س: ${f.q}\nج: ${f.a}\n\n`;
  });

  return text;
}

export const COMPANY_INFO = {
  name: "Atasa Danışmanlık",
  shortName: "Atasa",
  phone: "+90 850 308 69 98",
  email: "support@atasa.tr",
  emailAlt: "info@atasa.tr",
  website: "https://www.atasakurumsal.com.tr",
  foundedYear: 2012,
  experienceYears: 12,
  founder: "Ömer Habib",
  offices: {
    istanbul: {
      city: "İstanbul",
      address: "Mecidiyeköy mah. Raşit Rıza sk. Ahmet Esin İş Merkezi NO:4 K:2 D:7 Şişli/İstanbul",
      phone: "+90 850 308 69 98",
      googleMapsUrl: "https://www.google.com/maps/place/Atasa+Dan%C4%B1%C5%9Fmanl%C4%B1k+Hizmetleri+LTD.+%C5%9ET%C4%B0./@41.067297,28.9998846,17z/data=!4m6!3m5!1s0x14cab746724d84fd:0x1f99dbde2ff1d769!8m2!3d41.0672466!4d28.9998853!16s%2Fg%2F11rfcycng9",
    },
    askabat: {
      city: "Aşkabat",
      address: "Berkararlyk etrap / G.Kuliyev köçe/ Beyençli N70, Gat 3 309, Ashgabat, Türkmenistan",
      phone: "+993 637 816 52",
      googleMapsUrl: "",
    },
    baku: {
      city: "Bakü",
      address: "Tivi Plaza, Əhməd Rəcəbli Küçəsi, 1/10 Nəriman Nərimanov, Baku 1006, Azərbaycan",
      phone: "+994 51 823 44 10",
      googleMapsUrl: "",
    },
  },
  hours: {
    weekday: "09:00 - 18:00",
    saturday: "10:00 - 13:00",
    sunday: "Kapalı",
  },
  social: {
    youtube: "https://www.youtube.com/@atasa_tr",
    instagram: "https://www.instagram.com/atasa_tr/",
    tiktok: "https://www.tiktok.com/@atasa_tr",
    facebook: "https://www.facebook.com/atasa.consultancy",
  },
  stats: {
    workPermits: 1321,
    corporateClients: 1220,
    internationalReferences: 7,
    googleRating: 4.9,
    googleReviews: 150,
    youtubeFollowers: "100K+",
    instagramFollowers: "50K+",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const SERVICES = [
  {
    id: "calisma-izni",
    title: "Yabancı Çalışma İzni",
    description: "Şirketiniz için yabancı personel çalışma izni başvurularını profesyonelce yönetiyoruz.",
    icon: "Briefcase",
    href: "/calisma-izni",
    color: "blue",
  },
  {
    id: "calisma-izni-uzatma",
    title: "Çalışma İzni Uzatma",
    description: "Mevcut çalışma izinlerinizin süresini zamanında ve sorunsuz uzatıyoruz.",
    icon: "RefreshCw",
    href: "/calisma-izni-uzatma",
    color: "emerald",
  },
  {
    id: "calisma-izni-transferi",
    title: "Çalışma İzni Transferi",
    description: "Personellerinizin şube veya işyeri değişikliğinde çalışma izni transferini hızla gerçekleştiriyoruz.",
    icon: "ArrowRightLeft",
    href: "/calisma-izni-transferi",
    color: "orange",
  },
  {
    id: "toplu-basvuru",
    title: "Kurumsal Toplu Başvuru",
    description: "50+ yabancı personel istihdam eden şirketlere özel toplu başvuru yönetimi.",
    icon: "Building",
    href: "/toplu-basvuru",
    color: "slate",
  },
  {
    id: "ikamet-izni",
    title: "İkamet İzni",
    description: "Türkiye'de uzun veya kısa dönem ikamet izni başvuru süreçlerinde yanınızdayız.",
    icon: "Home",
    href: "/ikamet-izni",
    color: "cyan",
  },
  {
    id: "vatandaslik",
    title: "Vatandaşlık İşlemleri",
    description: "Yatırım yoluyla veya istisnai vatandaşlık başvurularında hukuki destek sağlıyoruz.",
    icon: "Flag",
    href: "/vatandaslik",
    color: "red",
  },
] as const;

export const HERO_PHRASES = [
  "Çalışma İzni Alın",
  "Çalışma İzni Uzatın",
  "Çalışma İzni Transferi",
  "Toplu Başvuru Yapın",
  "Yasal Olarak Çalışın",
] as const;

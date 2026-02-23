export const COMPANY_INFO = {
  name: "Atasa Kurumsal Danışmanlık",
  shortName: "Atasa Kurumsal",
  phone: "+90 850 308 69 98",
  email: "info@atasakurumsal.com",
  emailAlt: "bilgi@atasakurumsal.com",
  website: "https://www.atasakurumsal.com.tr",
  foundedYear: 2012,
  experienceYears: 12,
  founder: "Ömer Habib",
  offices: {
    istanbul: {
      city: "İstanbul",
      address: "İstiklal Cd. No 187 Beyoğlu İş Merkezi Kat:1 D:133 Beyoğlu / İstanbul",
    },
    ankara: {
      city: "Ankara",
      address: "Kızılırmak Mahallesi Next Level Loft Ofis No: 4/27 Kat: 9 Çankaya / Ankara",
    },
  },
  hours: {
    weekday: "10:00 - 19:00",
    saturday: "Kapalı",
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

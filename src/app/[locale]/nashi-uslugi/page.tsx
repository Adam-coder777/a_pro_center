import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Award,
  BookOpen,
  Download,
  Languages,
  Users,
} from "lucide-react";

interface Certificate {
  id: number;
  image: string;
  pdf: string;
  title: string;
  description: string;
}

const iconMap: Record<string, typeof BookOpen> = {
  "coaching-military": BookOpen,
  "expert-pro": Award,
  "healthy-team": Users,
  "confident-english": Languages,
};

const accentMap: Record<string, string> = {
  "coaching-military": "from-[#fbbf24] to-[#f59e0b]",
  "expert-pro": "from-[#22543d] to-[#2d6a4f]",
  "healthy-team": "from-[#14b8a6] to-[#0f766e]",
  "confident-english": "from-[#60a5fa] to-[#2563eb]",
};

const detailRouteMap: Record<string, string> = {
  "expert-pro": "expert-pro",
  "confident-english": "confident-english",
  "coaching-military": "coaching-military",
  "healthy-team": "healthy-team",
};

export default async function NashiUslugiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("NashiUslugi");

  const heroTitle = t("hero.title");
  const heroSubtitle = t("hero.subtitle");
  const ctaShort = t("cta.short");

  const courseCards = t.raw("courses.cards") as Array<{
    id: string;
    label: string;
    title: string;
  }>;

  const certificatesData = t.raw("certificates.items") as Array<{
    title: string;
    description: string;
  }>;

  const certificates: Certificate[] = [
    {
      id: 1,
      image: "/фото 1.jpeg",
      pdf: "/Свидетельство А.Ишимгалиева_ОбучКурс.pdf",
      title: certificatesData[0]?.title || "",
      description: certificatesData[0]?.description || "",
    },
    {
      id: 2,
      image: "/фото2.jpeg",
      pdf: "/Свидетельство_Коучинг_общ метод_А.Ишимгалиева_А.Тусупканова_А.Абай.pdf",
      title: certificatesData[1]?.title || "",
      description: certificatesData[1]?.description || "",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7ede2] via-[#fef3c7] to-[#f7ede2]">
      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#22543d] drop-shadow-lg">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-2xl text-[#22543d]/80 leading-relaxed">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {courseCards.map((course) => {
              const Icon = iconMap[course.id] || BookOpen;
              const accent = accentMap[course.id] || "from-[#fbbf24] to-[#f59e0b]";
              const detailRoute = detailRouteMap[course.id];
              const href = detailRoute
                ? `/${locale}/nashi-uslugi/${detailRoute}`
                : `#${course.id}`;
              return (
                <a
                  key={course.id}
                  href={href}
                  target={detailRoute ? "_blank" : undefined}
                  rel={detailRoute ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-3xl border-2 border-[#fbbf24]/50 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br ${accent}`}
                  ></div>
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-full bg-[#fef3c7] px-4 py-2 text-sm font-semibold text-[#9a3412]">
                      <Icon className="w-4 h-4" />
                      {course.label}
                    </div>
                    <h3 className="text-2xl font-black text-[#22543d] group-hover:text-white transition">
                      {course.title}
                    </h3>
                    <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#fbbf24] px-5 py-2 text-sm font-semibold text-[#be6a00] transition group-hover:border-white group-hover:text-white">
                      {ctaShort}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-[#22543d] to-[#2d6a4f] p-3 rounded-full">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#22543d] mb-4">
              {t("certificates.title")}
            </h2>
            <p className="text-xl text-[#22543d]/70 max-w-2xl mx-auto">
              {t("certificates.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl shadow-xl border-2 border-[#fbbf24] overflow-hidden hover:scale-105 transition-transform duration-300 group"
              >
                <a
                  href={cert.pdf}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-64 bg-gradient-to-br from-[#f7ede2] to-[#fef3c7] flex items-center justify-center cursor-pointer block"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-[#fbbf24] text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-[#22543d]/90 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {t("certificates.downloadHint")}
                  </div>
                </a>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#22543d] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-[#22543d]/70 text-sm">
                    {cert.description}
                  </p>
                  <a
                    href={cert.pdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-5 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    {t("certificates.downloadButton")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ru" },
    { locale: "kz" },
  ];
}

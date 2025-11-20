import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Users } from "lucide-react";

export default async function HealthyTeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("NashiUslugi");

  const courseDetails = t.raw("courses.details") as Array<{
    id: string;
    label: string;
    title: string;
    lead: string;
    meta: Array<{ label: string; value: string }>;
    extras: string[];
    links: Array<{ label: string; href: string }>;
  }>;

  const courseCards = t.raw("courses.cards") as Array<{
    id: string;
    label: string;
    title: string;
  }>;

  const course = courseDetails.find((c) => c.id === "healthy-team");
  const card = courseCards.find((c) => c.id === "healthy-team");
  const ctaLong = t("cta.long");

  if (!course) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7ede2] via-[#fef3c7] to-[#f7ede2]">
      <div className="container mx-auto px-4 py-20">
        <article className="max-w-4xl mx-auto rounded-3xl border-4 border-[#fbbf24] bg-white/95 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-[#fef3c7] px-4 py-2 text-sm font-semibold text-[#9a3412] mb-4">
                <Users className="w-4 h-4" />
                {card?.label}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#22543d] mt-4">
                {course.title}
              </h1>
            </div>

            {/* Lead */}
            <p className="text-xl text-[#22543d]/80 leading-relaxed">
              {course.lead}
            </p>

            {/* Meta */}
            {course.meta.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {course.meta.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#fef3c7]/70 p-6 border-2 border-[#fbbf24]/30"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#be6a00] mb-2">
                      {item.label}
                    </p>
                    <p className="text-base text-[#22543d] leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Extras */}
            {course.extras.length > 0 && (
              <div className="space-y-3">
                {course.extras.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-base text-[#22543d]/80 leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="text-center pt-6 border-t-2 border-[#fbbf24]/30">
              <a
                href="https://wa.me/77781309977"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] px-8 py-4 text-lg font-bold text-white shadow-lg whitespace-pre hover:shadow-xl transition-all duration-300"
              >
                {ctaLong}
              </a>
            </div>

            {/* Back */}
            <div className="pt-4">
              <Link
                href={`/${locale}/nashi-uslugi`}
                className="inline-flex items-center gap-2 text-[#22543d] hover:text-[#1b3e32] font-medium transition"
              >
                ← {t("back")}
              </Link>
            </div>
          </div>
        </article>
      </div>
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


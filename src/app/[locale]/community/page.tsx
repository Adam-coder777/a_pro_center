import { useTranslations } from "next-intl";
import { Sparkles, Users, Target, Heart } from "lucide-react";
import Link from 'next/link';
const benefits = [
  { icons: ['🚴‍♂️', '🚴‍♂️', '🚴‍♂️', '🚴‍♂️', '🚴‍♂️'], text: 'Интервизия-обмен\nэкспертностью/Нетворкинг' },
  { icons: ['🏠', '🏠', '🏠', '🏠', '🏠'], text: 'Возможность\nпроведения своих\nмастер-классов, игр\nодин раз в месяц' },
  { icons: ['💵', '💵', '💵', '💵', '💵', '💵', '💵'], text: 'Помощь в публикации\nэкспертных статей и\nразмещении их в интернете,\nплюс редакция согласно нормам\nконтроля' },
  { icons: ['🚗', '🚗', '🚗', '🚗', '🚗'], text: 'Доступ к международным тренингам\nгруппа единомышленников,\nгрупповые поездки' },
  { icons: ['✈️', '✈️', '✈️', '✈️', '✈️'], text: 'Трекинги\nи мастер-майнды' },
  { icons: ['⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐'], text: 'Доступ к спикерам\nмеждународного масштаба' },
  { icons: ['💻', '💻', '💻', '💻', '💻', '💻'], text: 'Записи мастер-\nклассов, тренингов в\nрамках клуба' },
  { icons: ['🌐', '🌐', '🌐', '🌐', '🌐', '🌐'], text: 'Помощь с\nпрезентацией своих\nмастер-классов' },
  { icons: ['⏰', '⏰', '⏰', '⏰', '⏰', '⏰'], text: 'Доступ к экспертам и обмен\nопытом' },
];

export default function CommunityPage() {
  const t = useTranslations("Community");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7ede2] via-[#fef3c7] to-[#f7ede2]">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] p-4 rounded-full shadow-2xl">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#22543d] mb-8 drop-shadow-lg leading-tight">
              {t("title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 rounded-3xl shadow-2xl p-12 border-4 border-[#fbbf24] backdrop-blur-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbbf24]/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#fbbf24]/10 rounded-full -ml-20 -mb-20"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <Sparkles className="w-12 h-12 text-[#fbbf24]" />
                </div>
                <blockquote className="text-center">
                  <p className="text-2xl md:text-4xl font-bold text-[#22543d] mb-8 italic leading-relaxed">
                    {t("quote")}
                  </p>
                  <footer className="text-xl md:text-2xl font-semibold text-[#fbbf24]">
                    — {t("author")}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 border-2 border-[#fbbf24] backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#22543d] mb-4">Сотрудничество</h3>
              <p className="text-[#22543d]/80 leading-relaxed">Объединяем экспертов из разных областей для обмена опытом и создания инновационных решений</p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 border-2 border-[#fbbf24] backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#22543d] mb-4">Развитие</h3>
              <p className="text-[#22543d]/80 leading-relaxed">Постоянное профессиональное развитие и поддержка амбициозных целей каждого участника сообщества</p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 border-2 border-[#fbbf24] backdrop-blur-md hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#22543d] mb-4">Поддержка</h3>
              <p className="text-[#22543d]/80 leading-relaxed">Создаем атмосферу взаимопомощи и поддержки, где каждый может реализовать свой потенциал</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center mb-8">
                <div className="flex justify-center mb-2 space-x-1">
                  {item.icons.map((icon, i) => (
                    <span key={i} className="text-3xl md:text-4xl opacity-40">{icon}</span>
                  ))}
                </div>
                <div className="text-black text-xl md:text-lg whitespace-pre-line mt-2">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#22543d] to-[#2d6a4f] rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto text-center border-4 border-[#fbbf24]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Присоединяйтесь к нашему сообществу!
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Станьте частью поддерживающего сообщества экспертов, где ваши мечты превращаются в реальность
            </p>
            <Link
  href="/contacts"
  className="inline-block bg-[#fbbf24] hover:bg-[#f59e0b] text-[#22543d] font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
>
  Связаться с нами
</Link>

          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }, { locale: 'kz' }];
}
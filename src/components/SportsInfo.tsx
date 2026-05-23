import { useTranslation } from 'react-i18next';

export default function SportsInfo() {
  const { t } = useTranslation();

  const articles = [
    {
      title: "Düzenli Egzersizin Faydaları",
      content: "Düzenli fiziksel aktivite, kalp hastalıkları riskini azaltır, kan basıncını düzenler ve genel ruh halinizi iyileştirir. Ayrıca uyku kalitenizi artırır ve stresi azaltmaya yardımcı olur.",
      titleEn: "Benefits of Regular Exercise",
      contentEn: "Regular physical activity reduces the risk of heart disease, regulates blood pressure, and improves overall mood. It also enhances sleep quality and helps reduce stress.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Antrenman Öncesi Beslenme",
      content: "Egzersiz öncesi doğru beslenmek, performansınızı en üst düzeye çıkarır. Antrenmandan 2-3 saat önce kompleks karbonhidratlar ve hafif protein tüketimi önerilir.",
      titleEn: "Pre-Workout Nutrition",
      contentEn: "Proper nutrition before exercise maximizes your performance. Consuming complex carbohydrates and light protein 2-3 hours before a workout is recommended.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Esneme ve Isınma Hareketleri",
      content: "Antrenman öncesi ısınmak ve sonrasında esnemek kas sakatlıklarını önlemenin en iyi yoludur. Dinamik esneme antrenman öncesi, statik esneme ise antrenman sonrası yapılmalıdır.",
      titleEn: "Stretching and Warm-up Exercises",
      contentEn: "Warming up before training and stretching afterward is the best way to prevent muscle injuries. Dynamic stretching should be done pre-workout, while static stretching is best post-workout.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Su Tüketiminin Önemi",
      content: "Egzersiz sırasında terle kaybedilen sıvının yerine konması şarttır. Dehidrasyon performans düşüklüğüne ve yorgunluğa neden olabilir.",
      titleEn: "Importance of Hydration",
      contentEn: "Replacing fluids lost through sweat during exercise is essential. Dehydration can lead to decreased performance and fatigue.",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="h-48 w-full overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t('Hesapla') === 'Hesapla' ? article.title : article.titleEn}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('Hesapla') === 'Hesapla' ? article.content : article.contentEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

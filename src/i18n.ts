import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      "Sağlıklı yaşama ve spora ilk adımı atın. İstanbul genelinde 100 farklı ücretsiz spor yerlerini keşfedin!": "Sağlıklı yaşama ve spora ilk adımı atın. İstanbul genelinde 100 farklı ücretsiz spor yerlerini keşfedin!",
      "Giriş Yap": "Keşfetmeye Başla",
      "Spor Rehberi": "Spor Rehberi",
      "Harita": "Harita",
      "Vücut Kitle İndeksi": "Vücut Kitle İndeksi",
      "Spor Bilgileri": "Spor Bilgileri",
      "Açık Alanlar": "Açık Alanlar",
      "Kapalı Alanlar": "Kapalı Alanlar",
      "Tümü": "Tümü",
      "Mekan Türü": "Mekan Türü",
      "İlçe": "İlçe",
      "Adres": "Adres",
      "Çalışma Saatleri": "Çalışma Saatleri",
      "Hesapla": "Hesapla",
      "Kilo (kg)": "Kilo (kg)",
      "Boy (cm)": "Boy (cm)",
      "Yaş": "Yaş",
      "Sonucunuz": "Sonucunuz",
      "Zayıf": "Zayıf",
      "Normal": "Normal",
      "Fazla Kilolu": "Fazla Kilolu",
      "Obez": "Obez",
      "Lütfen tüm alanları doldurun": "Lütfen tüm alanları doldurun",
      "Hakkımızda": "Hakkımızda",
      "about_p1": "Biz, Üsküdar Üniversitesi Yeni Medya ve İletişim Bölümü’nde öğrenim gören üç arkadaş olarak; sporu hayatının bir parçası haline getirmek isteyen herkese rehberlik etmek amacıyla bu platformu oluşturduk. Üçüncü sınıf öğrencileri olarak dijital dünyadaki bilgi birikimimizi, sporun enerjisiyle birleştirerek sizlere en faydalı içerikleri sunmayı hedefliyoruz.",
      "about_p2": "Bu platformu kurma amacımız; spora yeni başlayanlardan deneyimli sporculara kadar herkesin ihtiyaç duyabileceği temel bilgileri, doğru ekipman seçimlerini ve antrenman tekniklerini tek bir çatı altında toplamaktır. Karmaşık bilgilerden uzak, tamamen sizin gelişiminize ve sağlığınıza yardımcı olacak pratik noktaları bir araya getirerek spor yolculuğunuzu kolaylaştırmak istiyoruz.",
      "about_p3_strong": "Sizler İçin Ne Hazırladık?",
      "about_p3": " Sadece bilgi vermekle kalmadık; İstanbul’un farklı noktalarında spora erişimi kolaylaştırmak için bir de harita oluşturduk. Haritamızda, şehrin çeşitli ilçelerinde yer alan ve ücretsiz olarak faydalanabileceğiniz belediye spor tesislerini ve alanlarını sizler için tek tek işaretledik. Amacımız, bütçe kaygısı gütmeden sporu her an ulaşılabilir kılmanıza destek olmak.",
      "about_team": "Ekibimiz;",
      "about_footer1": "'dan oluşmaktadır.",
      "about_footer2": "Üç arkadaşın ortak emeğiyle hazırlanan bu rehberde, sizlere daha sağlıklı ve aktif bir yaşam için eşlik etmekten mutluluk duyuyoruz. Spora dair aradığınız her noktada yanınızdayız!"
    }
  },
  en: {
    translation: {
      "Sağlıklı yaşama ve spora ilk adımı atın. İstanbul genelinde 100 farklı ücretsiz spor yerlerini keşfedin!": "Take the first step to healthy living and sports. Discover 100 different free sports locations across Istanbul!",
      "Giriş Yap": "Start Exploring",
      "Spor Rehberi": "Sports Guide",
      "Harita": "Map",
      "Vücut Kitle İndeksi": "Body Mass Index",
      "Spor Bilgileri": "Sports Info",
      "Açık Alanlar": "Open Areas",
      "Kapalı Alanlar": "Closed Areas",
      "Tümü": "All",
      "Mekan Türü": "Venue Type",
      "İlçe": "District",
      "Adres": "Address",
      "Çalışma Saatleri": "Working Hours",
      "Hesapla": "Calculate",
      "Kilo (kg)": "Weight (kg)",
      "Boy (cm)": "Height (cm)",
      "Yaş": "Age",
      "Sonucunuz": "Your Result",
      "Zayıf": "Underweight",
      "Normal": "Normal",
      "Fazla Kilolu": "Overweight",
      "Obez": "Obese",
      "Lütfen tüm alanları doldurun": "Please fill all fields",
      "Hakkımızda": "About Us",
      "about_p1": "As three friends studying at Üsküdar University New Media and Communication Department, we created this platform to guide anyone who wants to make sports a part of their life. As third-year students, we aim to combine our digital knowledge with the energy of sports to provide you with the most useful content.",
      "about_p2": "Our goal in establishing this platform is to gather basic information, proper equipment choices, and training techniques that everyone from beginners to experienced athletes might need under one roof. We want to simplify your sports journey by keeping away from complex information and bringing together practical points that will solely help your development and health.",
      "about_p3_strong": "What Have We Prepared For You?",
      "about_p3": " We didn't just provide information; we also created a map to make it easier to access sports in different parts of Istanbul. On our map, we have marked municipal sports facilities and areas in various districts of the city where you can benefit for free. Our goal is to support you in making sports accessible at any time without budget concerns.",
      "about_team": "Our team consists of:",
      "about_footer1": "",
      "about_footer2": "In this guide prepared with the joint effort of three friends, we are happy to accompany you for a healthier and more active life. We are by your side at every point you are looking for regarding sports!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || "tr",
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

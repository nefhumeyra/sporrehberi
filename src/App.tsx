import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Info, Activity, Moon, Sun, Globe, Music, Instagram, Users } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Map from './components/Map';
import BmiCalculator from './components/BmiCalculator';
import SportsInfo from './components/SportsInfo';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';

type Tab = 'map' | 'info' | 'bmi';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('map');
  const [filterType, setFilterType] = useState('all');
  const [showMusicPlayer, setShowMusicPlayer] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2.5 rounded-xl shadow-md">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 select-none">
                {t('Spor Rehberi')}
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={toggleLanguage}
                className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-all flex items-center justify-center font-bold text-sm"
                title="Change Language"
              >
                <Globe className="h-5 w-5 md:mr-1.5" />
                <span className="hidden md:inline">{language.toUpperCase()}</span>
              </button>
              <button 
                onClick={toggleTheme}
                className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-all"
                title="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
              <button 
                onClick={() => setShowMusicPlayer(!showMusicPlayer)}
                className={`p-2 rounded-full transition-all ${showMusicPlayer ? 'text-white bg-indigo-600 shadow-md' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700'}`}
                title="Toggle Music Player"
              >
                <Music className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'map' 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent shadow-sm'
              }`}
            >
              <MapPin className="w-5 h-5 mr-2" />
              {t('Harita')}
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'info' 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent shadow-sm'
              }`}
            >
              <Info className="w-5 h-5 mr-2" />
              {t('Spor Bilgileri')}
            </button>
            <button
              onClick={() => setActiveTab('bmi')}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'bmi' 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent shadow-sm'
              }`}
            >
              <Activity className="w-5 h-5 mr-2" />
              {t('Vücut Kitle İndeksi')}
            </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="text-gray-800 dark:text-gray-200 font-bold whitespace-nowrap">{t('Mekan Türü')}:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filterType === 'all'
                      ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {t('Tümü')}
                </button>
                <button
                  onClick={() => setFilterType('open')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filterType === 'open'
                      ? 'bg-indigo-600 text-white shadow-md transform scale-105 shadow-indigo-600/30'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50'
                  }`}
                >
                  {t('Açık Alanlar')}
                </button>
                <button
                  onClick={() => setFilterType('closed')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filterType === 'closed'
                      ? 'bg-purple-600 text-white shadow-md transform scale-105 shadow-purple-600/30'
                      : 'bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50'
                  }`}
                >
                  {t('Kapalı Alanlar')}
                </button>
              </div>
            </div>
            
            <Map filterType={filterType} />
          </div>
        )}

        {activeTab === 'info' && <SportsInfo />}
        {activeTab === 'bmi' && <BmiCalculator />}

        {/* About Us Section */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                {t('Hakkımızda')}
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              <p>{t('about_p1')}</p>
              
              <p>{t('about_p2')}</p>
              
              <p>
                <strong className="text-gray-900 dark:text-white font-bold">{t('about_p3_strong')}</strong>
                {t('about_p3')}
              </p>
            </div>

            <div className="mt-12 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about_team')}
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-2 rounded-full text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <a href="https://www.instagram.com/melisa.comer?igsh=MWdmdjJhcGVlZDV0eg==" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Melisa Çömer <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">(230401057)</span>
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-2 rounded-full text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <a href="https://www.instagram.com/nefmeyra?igsh=MXYzd2hsMjBwOHpqMg==" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Nefise Hümeyra Özsoy <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">(230401013)</span>
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-2 rounded-full text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <a href="https://www.instagram.com/_benmina?igsh=ZXNsNGRzYmRvMmsw" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Mina Naz Sivrikaya <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">(230401059)</span>
                  </a>
                </li>
              </ul>
              
              {t('about_footer1') && (
                <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">
                  {t('about_footer1')}
                </p>
              )}
            </div>

            <div className="mt-8 text-center bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-2xl">
              <p className="text-lg text-indigo-900 dark:text-indigo-200 font-medium italic">
                {t('about_footer2')}
              </p>
            </div>
          </div>
        </div>

        {/* Floating Spotify Player */}
        <div className={`fixed bottom-6 right-6 z-50 w-full max-w-[340px] shadow-2xl rounded-[14px] overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 origin-bottom-right ${showMusicPlayer ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-8 pointer-events-none'}`}>
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: "12px", border: 0 }} 
            src="https://open.spotify.com/embed/playlist/0N8UMpVMsUPl6RAlsaJvLW?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            allowFullScreen={true} 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="block w-full"
          >
          </iframe>
        </div>

      </main>
    </div>
  );
}

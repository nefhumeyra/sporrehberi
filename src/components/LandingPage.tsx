import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Moon, Sun, Globe } from 'lucide-react';

export default function LandingPage({ onEnter }: { onEnter: () => void }) {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-hidden">
      {/* Settings Toggles */}
      <div className="absolute top-6 right-6 z-50 flex items-center space-x-3">
        <button 
          onClick={toggleLanguage}
          className="p-2.5 text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg transition-all hover:scale-105 flex items-center justify-center font-bold text-sm"
          title="Change Language"
        >
          <Globe className="h-5 w-5 mr-1.5" />
          {language.toUpperCase()}
        </button>
        <button 
          onClick={toggleTheme}
          className="p-2.5 text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg transition-all hover:scale-105"
          title="Toggle Theme"
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 blur-3xl rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-block"
        >
          <span className="px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide text-indigo-700 bg-indigo-100 dark:text-indigo-300 dark:bg-indigo-900/40 uppercase shadow-sm">
            {t('Spor Rehberi')}
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('Spor Rehberi')}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-medium leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('Sağlıklı yaşama ve spora ilk adımı atın. İstanbul genelinde 100 farklı ücretsiz spor yerlerini keşfedin!')}
        </motion.p>
        
        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xl font-bold shadow-xl shadow-indigo-600/30 transition-all w-full sm:w-auto"
        >
          {t('Giriş Yap')}
        </motion.button>
      </motion.div>
    </div>
  );
}

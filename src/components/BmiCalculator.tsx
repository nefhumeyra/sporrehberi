import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BmiCalculator() {
  const { t } = useTranslation();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBmi = () => {
    if (!weight || !height || !age) {
      alert(t('Lütfen tüm alanları doldurun'));
      return;
    }

    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const calculatedBmi = w / (h * h);
      setBmi(calculatedBmi);
      
      if (calculatedBmi < 18.5) setCategory(t('Zayıf'));
      else if (calculatedBmi < 24.9) setCategory(t('Normal'));
      else if (calculatedBmi < 29.9) setCategory(t('Fazla Kilolu'));
      else setCategory(t('Obez'));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t('Vücut Kitle İndeksi')}</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('Kilo (kg)')}</label>
          <input 
            type="number" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm p-2"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('Boy (cm)')}</label>
          <input 
            type="number" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('Yaş')}</label>
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm p-2"
          />
        </div>

        <button
          onClick={calculateBmi}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {t('Hesapla')}
        </button>

        {bmi && (
          <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-md">
            <p className="text-center text-lg text-gray-900 dark:text-white">
              {t('Sonucunuz')}: <span className="font-bold text-indigo-600 dark:text-indigo-400">{bmi.toFixed(1)}</span>
            </p>
            <p className="text-center text-md font-medium text-gray-700 dark:text-gray-300 mt-1">
              {category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

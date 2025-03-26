'use client';

import { useState } from 'react';
import { useLocale } from '@/src/lib/i18n/client';
import { Locale } from '@/src/lib/i18n/types/i18n';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

const LANGUAGES: Record<Locale, string> = {
  en: 'language.english',
  zh: 'language.chinese'
};

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
    
    const pathSegments = pathname.split('/').filter(Boolean);
    let newPath;
    
    if (Object.keys(LANGUAGES).includes(pathSegments[0])) {
      pathSegments[0] = newLocale;
      newPath = '/' + pathSegments.join('/');
    } else {
      newPath = `/${newLocale}${pathname}`;
    }
    
    // 使用Next.js的router.push进行客户端导航，避免页面完全刷新
    router.push(newPath);
  };
  
  return (
    <div className="relative ml-2">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-secondary-600 hover:bg-secondary-100 hover:text-primary-600 focus:outline-none"
        aria-expanded={isOpen}
      >
        <Globe className="h-5 w-5" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          {Object.entries(LANGUAGES).map(([key, value]) => (
            <button
              key={key}
              onClick={() => changeLanguage(key as Locale)}
              className={`block w-full px-4 py-2 text-left text-sm ${
                locale === key
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-secondary-700 hover:bg-secondary-50'
              }`}
            >
              {t(value)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
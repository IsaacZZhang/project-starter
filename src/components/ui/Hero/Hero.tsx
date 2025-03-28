'use client';

import Button from '@/src/components/ui/Button';
import Image from 'next/image';
import { useLocale } from '@/src/lib/i18n/client';

export default function Hero() {
  const { t } = useLocale();
  return (
    <section className="bg-white">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {t('hero.subtitle')}
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center text-gray-600">
                <svg className="h-5 w-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('hero.feature1')}
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="h-5 w-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('hero.feature2')}
              </li>
            </ul>
            <div className="mt-8">
              <Button
                variant={'outline'}
                type="button"
              >
                {t('hero.getStarted')}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/home.png" 
                alt="LaTeX conversion example" 
                width={600} 
                height={400} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
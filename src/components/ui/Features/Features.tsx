'use client';

import { useLocale } from '@/src/lib/i18n/client';

export default function Features() {
  const { t } = useLocale();
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-800 sm:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-zinc-800">{t('features.simplemath.title')}</h3>
              <p className="mt-2 text-zinc-600">
                {t('features.simplemath.description')}
              </p>
            </div>
            <div className="p-1">
              <img 
                src="/demo.png" 
                alt="Feature image" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-zinc-800">{t('features.complexmath.title')}</h3>
              <p className="mt-2 text-zinc-600">
                {t('features.complexmath.description')}
              </p>
            </div>
            <div className="p-1">
              <img 
                src="/demo.png" 
                alt="Feature image" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-zinc-800">{t('features.handwrittenmath.title')}</h3>
              <p className="mt-2 text-zinc-600">
                {t('features.handwrittenmath.description')}
              </p>
            </div>
            <div className="p-1">
              <img 
                src="/demo.png" 
                alt="Feature image" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
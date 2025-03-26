import { Metadata } from 'next';
import Footer from '@/src/components/ui/Footer';
import Navbar from '@/src/components/ui/Navbar';
import { Toaster } from '@/src/components/ui/Toasts/toaster';
import { Suspense } from 'react';
import { getURL } from '@/src/utils/helpers';
import 'styles/main.css';
// laguages
import { LocaleProvider } from '@/src/lib/i18n/client';
import { getServerTranslations } from '@/src/lib/i18n/server';
import { Locale } from '@/src/lib/i18n/types/i18n';

const title = 'Next.js Subscription Starter';
const description = 'Brought to you by Vercel, Stripe, and Supabase.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}
export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = params;
  
  // 获取服务器端翻译数据
  const { t, translations } = await getServerTranslations(locale, ['common', 'hero']);
  return (
    <html lang={locale}>
      <body className="bg-white">
        <LocaleProvider initialLocale={locale} initialTranslations={translations}>
          {/* <LocationProvider> */}
            <Navbar />
            <main
              id="skip"
              className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
            >
              {children}
            </main>
            <Footer />
            <Suspense>
              <Toaster />
            </Suspense>
        </LocaleProvider>
      </body>
    </html>
  );
}

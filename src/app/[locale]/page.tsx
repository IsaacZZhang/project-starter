import Hero from '@/src/components/ui/Hero';
import Features from '@/src/components/ui/Features';
import Testimonials from '@/src/components/ui/Testimonials';
import { createClient } from '@/src/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/src/utils/supabase/queries';

export default async function HomePage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}

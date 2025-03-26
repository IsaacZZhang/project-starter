import Pricing from '@/src/components/ui/Pricing/Pricing';
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
      <Pricing
        user={user}
        products={products ?? []}
        subscription={subscription}
      />
    </>
  );
}

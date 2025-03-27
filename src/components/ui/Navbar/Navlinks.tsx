'use client';

import Link from 'next/link';
import { handleRequest } from '@/src/utils/auth-helpers/client';
import Logo from '@/src/components/icons/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/src/utils/auth-helpers/settings';
import LanguageSwitcher from '../LangurageSwitcher';
import { SignOut } from '@/src/utils/auth-helpers/server';
import { useLocale } from '@/src/lib/i18n/client';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './navigation-menu';
import Button from '@/src/components/ui/Button';
import { buttonVariants } from '@/src/components/ui/Button';
import React from 'react';
interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;
  const { t } = useLocale();
  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link href="/" className="cursor-pointer rounded-full transform duration-100 ease-in-out" aria-label="Logo">
          <Logo />
        </Link>
        <nav className="ml-6 space-x-4 lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t('navbar.docs')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* <Link href="/" className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-gray-800 rounded-md p-1 hover:text-gray-600 focus:outline-none focus:text-gray-600 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
            Docs
          </Link>
          <Link href="/pricing" className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-gray-800 rounded-md p-1 hover:text-gray-600 focus:outline-none focus:text-gray-600 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
            Pricing
          </Link>
          <Link href="/" className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-gray-800 rounded-md p-1 hover:text-gray-600 focus:outline-none focus:text-gray-600 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
            About
          </Link> */}
          {user && (
            <Link href="/account" className={buttonVariants({ variant: "outline" })}>
              Account
            </Link>
          )}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={typeof window !== 'undefined' ? window.location.pathname : '/'} />
            <Button 
              type="submit" 
              >
              Sign out
            </Button>
          </form>
        ) : (
          <Link href="/signin" 
            className={buttonVariants({ variant: "outline" })}>
            Sign In
          </Link>
        )}
        <LanguageSwitcher />
      </div>
    </div>
  );
}

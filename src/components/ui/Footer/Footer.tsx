import Link from 'next/link';

import Logo from '@/src/components/icons/Logo';
import GitHub from '@/src/components/icons/GitHub';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-gray-100">
      <div className="grid grid-cols-1 gap-8 py-12 text-gray-800 transition-colors duration-150 border-b lg:grid-cols-12 border-gray-300 bg-gray-100">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2 border rounded-full border-gray-300">
              <Logo />
            </span>
            <span>ACME</span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-600"
              >
                Home
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-600"
              >
                About
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-600"
              >
                Careers
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-600"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold text-gray-800 transition duration-150 ease-in-out hover:text-gray-600">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-600"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-600"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start col-span-1 text-gray-800 lg:col-span-6 lg:justify-end">
          <div className="flex items-center h-10 space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/vercel/nextjs-subscription-payments"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row bg-gray-100">
        <div>
          <span>
            &copy; {new Date().getFullYear()} ACME, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-800">Crafted by</span>
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="inline-block h-6 ml-4 text-gray-800"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

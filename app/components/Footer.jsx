'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      {/* Main Footer Content */}
      <div className="flex items-start justify-between px-4 py-12">
        {/* Left side: Brand and navigation */}
        <div className="flex flex-col items-start space-y-2">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-black dark:border-zinc-800 dark:bg-black dark:text-white">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5">
                <polygon points="12 4, 22 20, 2 20" />
              </svg>
            </div>
            <span className="font-extrabold text-sm tracking-wider uppercase text-black dark:text-white">Acme Store</span>
          </Link>
          <nav className="flex flex-col gap-2 pl-[160px]">
            {[ 
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Shipping & Return Policy", href: "/shipping" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "FAQs", href: "/faqs" },
            ].map((link) => (
              <Link key={link.href} href={link.href} replace className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors" onClick={() => window.scrollTo(0,0)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center pr-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-black dark:text-white">
              <polygon points="12 4, 22 20, 2 20" />
            </svg>
          </div>
          <Link href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="flex h-9 items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-black hover:bg-zinc-50 transition-colors dark:border-zinc-800 dark:bg-black dark:text-white dark:hover:bg-zinc-900">
            Deploy
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-zinc-200 dark:border-zinc-800 py-6 px-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Left: copyright + view source */}
          <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span>© 2023-2026 ACME, Inc. All rights reserved.</span>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <Link href="https://github.com/vercel/commerce" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              View the source
            </Link>
          </div>
          {/* Right: Created by Vercel */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <span>Created by</span>
            <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold text-black hover:opacity-70 dark:text-white transition-opacity">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-3 w-3">
                <polygon points="12 4, 22 20, 2 20" />
              </svg>
              Vercel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

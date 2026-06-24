export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-white dark:bg-black">
      <div className="max-w-3xl text-center px-4">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">About</h1>
        <p className="text-lg text-left text-black dark:text-white leading-relaxed space-y-4">
          This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront.
          <br /><br />
          Support for real-world commerce features including:
          <br /><br />
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Out of stocks</li>
            <li>Order history</li>
            <li>Order status</li>
            <li>Cross variant / option availability (aka. Amazon style)</li>
            <li>Hidden products</li>
            <li>Dynamically driven content and features via Shopify (ie. collections, menus, pages, etc.)</li>
            <li>Seamless and secure checkout via Shopify Checkout</li>
            <li>And more!</li>
          </ul>
          <br />
          This template also allows us to highlight newer Next.js features including:
          <br /><br />
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Next.js App Router</li>
            <li>Optimized for SEO using Next.js's Metadata</li>
            <li>React Server Components (RSCs) and Suspense</li>
            <li>Server Actions for mutations</li>
            <li>Edge runtime</li>
            <li>New Next.js 13 fetching and caching paradigms</li>
            <li>Dynamic OG images</li>
            <li>Styling with Tailwind CSS</li>
            <li>Automatic light/dark mode based on system settings</li>
            <li>And more!</li>
          </ul>
          <br />
          This document was last updated on July 18, 2023.
        </p>
      </div>
    </div>
  );
}

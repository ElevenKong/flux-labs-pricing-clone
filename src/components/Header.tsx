import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Announcement Banner */}
      <div className="gradient-purple text-white py-3 px-4 text-center text-sm">
        <span className="inline-flex items-center gap-2">
          ✨ Introducing new UGC Video feature.
          <Link href="#" className="underline hover:no-underline">
            Try it now!
          </Link>
        </span>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
          ✕
        </button>
      </div>

      {/* Header */}
      <header className="px-4 lg:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://ext.same-assets.com/441099875/3964920078.svg"
              alt="Flux Labs"
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors">
                AI Tools
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <Link href="/discover" className="text-white/90 hover:text-white transition-colors">
              Discover
            </Link>
            <Link href="/pricing" className="text-white font-medium">
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/auth/signin"
            className="bg-white text-black px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm lg:text-base"
          >
            Start Creating
          </Link>
        </div>
      </header>
    </>
  );
}

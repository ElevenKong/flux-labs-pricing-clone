import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="https://ext.same-assets.com/441099875/3964920078.svg"
                alt="Flux Labs"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Generate images with Flux image models or train them to create your own custom images.
            </p>
            <p className="text-white/50 text-sm">
              © 2024 Flux Labs AI
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Features
              </Link>
              <Link href="/pricing" className="block text-white/70 hover:text-white transition-colors text-sm">
                Pricing
              </Link>
              <Link href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Roadmap
              </Link>
              <Link href="/blog" className="block text-white/70 hover:text-white transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              <Link href="/privacy-policy" className="block text-white/70 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="block text-white/70 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="https://www.zeniteq.com/" className="block text-white/70 hover:text-white transition-colors text-sm">
                Zeniteq, Inc.
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Feature request
              </Link>
              <Link href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Changes log
              </Link>
              <Link href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

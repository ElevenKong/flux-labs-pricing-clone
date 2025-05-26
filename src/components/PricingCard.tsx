interface Feature {
  icon: string;
  text: string;
  isNew?: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  icon: string;
  credits: string;
  customModels: string;
  features: Feature[];
  isPopular?: boolean;
}

export default function PricingCard({
  name,
  price,
  icon,
  credits,
  customModels,
  features,
  isPopular = false
}: PricingCardProps) {
  return (
    <div className={`pricing-card p-6 lg:p-8 relative ${isPopular ? 'lg:scale-105' : ''}`}>
      {/* Plan Name and Icon */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <img src={icon} alt={name} className="w-8 h-8" />
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-purple-400">${price}</span>
          <span className="text-white/70">/month</span>
        </div>
      </div>

      {/* Credits and Models */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
            <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white font-medium">{credits}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
            <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white font-medium">{customModels}</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={`${feature.text}-${index}`} className="flex items-center gap-3">
            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
              <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white/90 text-sm flex-1">{feature.text}</span>
            {feature.isNew && (
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                New
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Commercial Use */}
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
        <div className="w-2 h-2 bg-green-400 rounded-full" />
        <span className="text-green-400 text-sm font-medium">Commercial use</span>
      </div>

      {/* CTA Button */}
      <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:scale-105">
        Get the plan →
      </button>

      {/* Blur decoration */}
      <img
        src="https://ext.same-assets.com/441099875/3751822611.svg"
        alt=""
        className="absolute -bottom-4 -right-4 w-16 h-16 opacity-30 pointer-events-none"
      />
    </div>
  );
}

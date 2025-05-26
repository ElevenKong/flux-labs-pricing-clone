'use client';

import { useState } from 'react';
import PricingCard from './PricingCard';

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);

  const pricingPlans = [
    {
      name: 'Pro',
      price: isMonthly ? '9.99' : '9.99',
      icon: 'https://ext.same-assets.com/441099875/1400743564.svg',
      credits: '200 total credits',
      customModels: '1 custom model',
      features: [
        {
          icon: 'https://ext.same-assets.com/441099875/2113435065.svg',
          text: 'Generate up to 4 UGC Videos',
          isNew: true
        },
        {
          icon: 'https://ext.same-assets.com/441099875/1232070068.svg',
          text: '200 Basic quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/2712404983.svg',
          text: '100 Better quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/2544589676.svg',
          text: '66 High-quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/3760178121.svg',
          text: '50 Ultra HD images',
          isNew: true
        },
        {
          icon: 'https://ext.same-assets.com/441099875/2520537136.svg',
          text: 'Commercial use'
        }
      ]
    },
    {
      name: 'Premium',
      price: isMonthly ? '19.99' : '19.99',
      icon: 'https://ext.same-assets.com/441099875/3194045959.svg',
      credits: '500 total credits',
      customModels: '3 custom models',
      isPopular: true,
      features: [
        {
          icon: 'https://ext.same-assets.com/441099875/3967213481.svg',
          text: 'Generate up to 10 UGC Videos',
          isNew: true
        },
        {
          icon: 'https://ext.same-assets.com/441099875/3607034810.svg',
          text: '500 Basic quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/2138437421.svg',
          text: '250 Better quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/3122146608.svg',
          text: '166 High-quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/2957396701.svg',
          text: '125 Ultra HD images',
          isNew: true
        },
        {
          icon: 'https://ext.same-assets.com/441099875/3210984291.svg',
          text: 'Commercial use'
        }
      ]
    },
    {
      name: 'Enterprise',
      price: isMonthly ? '49.99' : '49.99',
      icon: 'https://ext.same-assets.com/441099875/441725075.svg',
      credits: '1500 total credits',
      customModels: '5 custom models',
      features: [
        {
          icon: 'https://ext.same-assets.com/441099875/171772406.svg',
          text: 'Generate up to 30 UGC Videos',
          isNew: true
        },
        {
          icon: 'https://ext.same-assets.com/441099875/3007687129.svg',
          text: '1,500 Basic quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/2296890955.svg',
          text: '750 Better quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/275549852.svg',
          text: '500 High-quality images'
        },
        {
          icon: 'https://ext.same-assets.com/441099875/4078902689.svg',
          text: '375 Ultra HD images',
          isNew: true
        },
        {
          icon: 'https://ext.same-assets.com/441099875/75100215.svg',
          text: 'Commercial use'
        }
      ]
    }
  ];

  return (
    <section className="px-4 lg:px-6 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2 rounded-md transition-all ${
                isMonthly
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2 rounded-md transition-all ${
                !isMonthly
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              One month
            </button>
          </div>
        </div>

        {/* Savings Text */}
        <div className="text-center mb-12">
          <p className="text-green-400 font-medium">
            Save up to 33% with monthly subscription
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-4">Don't see what you need?</p>
          <a
            href="mailto:jimclydegm@gmail.com?subject=Flux%20Labs%20AI%20Partnership"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-lg text-white transition-colors"
          >
            Contact us
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

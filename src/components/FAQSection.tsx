'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What is Flux Labs AI?',
      answer: 'Flux Labs is a platform for generating AI images using the most capable open-weights image models from Black Forest Labs, Flux. It also allows you to train Flux image models for various purposes, including portraits, products, pets, and brand assets.'
    },
    {
      question: 'How long does it take to train a custom AI model?',
      answer: 'Training Flux image models can take between 15-30 minutes. Once finished, you can generate custom images with it in less than 15 seconds.'
    },
    {
      question: 'How many images do I need to train a custom model?',
      answer: 'You need at least 4 high-quality images to train a Flux image model. It\'s important to use enough number of images for best results.'
    },
    {
      question: 'How do I get the best results?',
      answer: '- Use photos with the subject centered in the frame. - Make sure to include only one subject per image - Avoid accessories that cover the face like sunglasses or hats - Make sure that the subject is clearly visible in all input images - Make sure the subject has varying angles in the photos for better results'
    },
    {
      question: 'Can I use the generated images commercially?',
      answer: 'Yes, all our subscription tiers give you full commercial ownership of the images you generate. This means you can use the AI-generated images for your business needs without any restrictions.'
    },
    {
      question: 'Does the unused credits get rolled over the next month?',
      answer: 'Credits will reset each month, so it\'s better to consume all remaining credits before it auto-renews.'
    },
    {
      question: 'What if I have more questions?',
      answer: 'For any other questions, feel free to reach out to me: jimclydegm@gmail.com'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 lg:px-6 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img
              src="https://ext.same-assets.com/441099875/3499334473.svg"
              alt="FAQ Icon"
              className="w-6 h-6"
            />
            <span className="text-white/70">Questions About Flux Labs?</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium text-lg pr-4">
                  {faq.question}
                </span>
                <img
                  src={openIndex === index
                    ? "https://ext.same-assets.com/441099875/4120408021.svg"
                    : "https://ext.same-assets.com/441099875/3367339449.svg"
                  }
                  alt="Toggle"
                  className="w-6 h-6 flex-shrink-0"
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="text-white/80 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

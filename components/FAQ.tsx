"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to complete KYC?",
      answer: "No, you don't. We never require KYC verification sign up with just your email.",
    },
    {
      question: "What cryptocurrencies can I deposit?",
      answer: "You can deposit Bitcoin, Ethereum, and 13+ other major cryptocurrencies.",
    },
    {
      question: "Do you support 3DS authentication?",
      answer: "Yes, all our cards come with 3DS authentication for secure online payments.",
    },
    {
      question: "Can I pay in currencies other than USD, like EUR?",
      answer: "Currently, we only support USD. Support for other currencies is coming soon.",
    },
  ];

  const rightFaqs = [
    {
      question: "What cryptocurrencies can I deposit?",
      answer: "You can deposit Bitcoin, Ethereum, and 13+ other major cryptocurrencies.",
    },
    {
      question: "Do you support 3DS authentication?",
      answer: "Yes, all our cards come with 3DS authentication for secure online payments.",
    },
    {
      question: "Can I pay in currencies other than USD, like EUR?",
      answer: "Currently, we only support USD. Support for other currencies is coming soon.",
    },
    {
      question: "Do I need to complete KYC?",
      answer: "No, you don't. We never require KYC verification sign up with just your email.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-white text-[32px] sm:text-[40px] md:text-[80px] font-bold font-eudoxus text-center mb-10 md:mb-20">
        What People Ask Us?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-200 rounded-[20px] p-4 sm:p-6 md:p-8 cursor-pointer transition-all"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white text-base sm:text-lg md:text-2xl font-bold font-eudoxus flex-1">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronDown className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                )}
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#FAFAFA] text-base font-gordita mt-4">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {rightFaqs.map((faq, index) => (
            <div
              key={index + 10}
              className="bg-dark-200 rounded-[20px] p-4 sm:p-6 md:p-8 cursor-pointer transition-all"
              onClick={() => setOpenIndex(openIndex === index + 10 ? null : index + 10)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white text-base sm:text-lg md:text-2xl font-bold font-eudoxus flex-1">
                  {faq.question}
                </h3>
                {openIndex === index + 10 ? (
                  <ChevronDown className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                )}
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index + 10
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#FAFAFA] text-base font-gordita mt-4">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

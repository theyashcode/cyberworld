"use client";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "PAN card कितने दिन में बनता है?",
    answer: "PAN card सामान्यतः 7–10 दिन में बन जाता है।",
  },
  {
    question: "Aadhaar update same day होता है?",
    answer: "कुछ updates same day हो जाते हैं, लेकिन biometric update में 2–3 दिन लग सकते हैं।",
  },
  {
    question: "Printout का क्या charge है?",
    answer: "Black & White ₹5/page और Color ₹10/page है।",
  },
  {
    question: "Online form भरने में कितना समय लगता है?",
    answer: "ज्यादातर forms 10–15 मिनट में fill हो जाते हैं।",
  },
];

const Section3 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0f172a] text-white py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-400">
          ❓ Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-xl overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 sm:px-5 py-3 sm:py-4 flex justify-between items-center bg-white/10 hover:bg-white/20 transition"
              >
                <span className="font-medium text-sm sm:text-base">
                  {faq.question}
                </span>
                <span className="text-lg">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

    
              <div
                className={`px-4 sm:px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 py-3 sm:py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section3;
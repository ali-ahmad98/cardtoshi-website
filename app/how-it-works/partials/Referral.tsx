import Image from "next/image";
import React from "react";

const Referral = () => {
  const benefits = [
    {
      title: "Give $5",
      description:
        "Your referrals gets a $5 bonus after creating their first card paid by us. Everyone wins!",
      opacity: 1,
    },
    {
      title: "$1 Per Referral",
      description: "Earn an additional $1 for each person who signs up using your referral link.",
      opacity: 0.7,
    },
    {
      title: "Earn $5 Per Card",
      description:
        "Get $5 for every virtual card purchased by your referrals. Premium users can earn up to $7 per card.",
      opacity: 0.7,
    },
    {
      title: "Milestone Payouts",
      description:
        "Reach 25 referrals to unlock your first $25 payout. Every 25 additional referrals earns another $25.",
      opacity: 0.7,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 md:gap-10 items-start">
        <div className="md:col-span-5">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold font-eudoxus leading-[1.2] sm:leading-tight mb-4 sm:mb-6">
            Earn $$$ While You Share
          </h2>
          <p className="text-[#FAFAFA] text-base sm:text-lg md:text-2xl font-gordita mb-6 sm:mb-8 md:mb-12 max-w-[90%] sm:max-w-full">
            Turn your network into income. Our referral program rewards you for every person you
            bring to Cardtoshi.
          </p>

          <div className="rounded-[30px] overflow-hidden relative w-full h-[265px] sm:h-[315px] md:h-[365px]">
            <Image
              src="/images/how-it-works-banner.png"
              alt="Contact Us"
              fill
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        <div className="md:col-span-3 space-y-8 md:space-y-12 py-4 pl-10 border-l border-white relative">
          <div className="absolute -left-[2px] top-0 bg-white w-[4px] h-32" />

          {benefits.map((benefit, index) => (
            <div key={index} style={{ opacity: benefit.opacity }}>
              <h3 className="text-white text-xl sm:text-2xl md:text-[32px] font-bold font-eudoxus leading-6 sm:leading-7 mb-2 sm:mb-3 md:mb-4">
                {benefit.title}
              </h3>
              <p className="text-[#FAFAFA] text-sm sm:text-base md:text-[19px] font-gordita leading-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Referral;

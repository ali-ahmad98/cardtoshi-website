import Image from "next/image";
import VirtualCards from "./VirtualCards";

export default function CardBenefits() {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-white text-[32px] font-bold font-eudoxus mb-5 max-w-[522px]">
          The Cardtoshi Virtual Crypto Card
        </h2>
        <p className="text-[#FAFAFA] text-2xl font-gordita leading-[30px] max-w-[466px] mb-20">
          Instantly turn your crypto into a secure USD Mastercard, ready to spend anywhere online.
          No KYC required. Fully reloadable and 3DS secured.
        </p>

        <div className="relative h-[450px]">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center text-nowrap opacity-10 text-white text-[100px] lg:text-[220px] font-bold font-eudoxus uppercase leading-none">
            <h3>Cardtoshi</h3>
            <h3>Virtual Card</h3>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <VirtualCards />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-dark-200 rounded-[30px] p-12 text-center">
            <p className="text-white text-[32px] font-bold font-gordita leading-tight">
              Use worldwide at <span className="font-bold">40M+</span> merchants 🌍
            </p>
          </div>
          <div className="bg-dark-200 rounded-[30px] p-12 text-center">
            <p className="text-white text-[32px] font-gordita leading-tight">
              Issued instantly with <span className="font-bold">No</span> wait time
            </p>
          </div>
          <div className="bg-dark-200 rounded-[30px] p-12 text-center">
            <p className="text-white text-[32px] font-gordita leading-tight">
              Secure <span className="font-bold">3DS</span> payments for all online sites
            </p>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto py-20">
          <h2 className="text-white text-[40px] font-bold font-eudoxus text-center mb-12">
            Spend Anywhere
          </h2>
          <p className="text-[#EBEBEB] text-[32px] font-gordita text-center max-w-[897px] mx-auto mb-16">
            Use your virtual card at 40+ million{" "}
            <span className="text-[#EBEBEB]">merchants worldwide</span> 🌍 including the{" "}
            <span className="text-[#EBEBEB]">worlds</span> most popular platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-24 grayscale">
            <Image
              src="/images/wise.png"
              alt="Wise"
              width={90}
              height={38}
              className="opacity-25"
            />
            <Image src="/images/amazon.png" alt="Amazon" width={90} height={27} />
            <Image src="/images/discord.png" alt="Discord" width={90} height={38} />
            <Image src="/images/netflix.png" alt="Netflix" width={90} height={38} />
            <Image src="/images/stripe.png" alt="Stripe" width={90} height={38} />
            <Image src="/images/airbnb.png" alt="Airbnb" width={90} height={38} />
          </div>
        </div>
      </div>
    </section>
  );
}

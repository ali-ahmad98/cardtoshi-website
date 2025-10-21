import Image from "next/image";

const StartIcon = <Image src="/icons/star.svg" alt="Globe icon" width={20} height={20} />;

const IconBox = ({ path, className }: { path: string; className?: string }) => (
  <div
    className={`absolute w-[55px] h-[55px] md:w-[65px] md:h-[65px] lg:w-[77px] lg:h-[77px] rounded-[12px] md:rounded-[14px] lg:rounded-[15px] bg-white shadow-lg flex items-center justify-center ${className}`}
  >
    <Image
      src={path}
      alt="Globe icon"
      width={30}
      height={30}
      className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]"
    />
  </div>
);

export default function Hero() {
  return (
    <section className="container mx-auto px-4 relative pt-24 md:pt-32 lg:pt-48 pb-10 md:pb-16 lg:pb-20 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-end items-center gap-2 text-center md:text-left">
        {StartIcon}
        <span className="text-[#FEFEFE] text-sm md:text-base lg:text-lg font-gordita">
          Now Supporting Monero and 15+ Cryptocurrencies
        </span>
        {StartIcon}
      </div>

      <h1 className="max-w-[1350px] mx-auto font-eudoxus font-bold text-5xl md:text-7xl lg:text-9xl text-[#FAFAFA] mb-4 md:mb-6 lg:mb-8 leading-[60px] md:leading-[90px] lg:leading-[120px] flex flex-col gap-4 md:gap-5 lg:gap-6">
        {/* Swap */}
        <div className="relative flex flex-col md:flex-row items-center gap-2 md:gap-3 lg:gap-4">
          <span>Swap</span>
          <span className="w-[200px] md:w-[240px] lg:w-[295px] h-[60px] md:h-[75px] lg:h-[90px] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] bg-gradient-to-r from-[#2B2B2B] to-[#434343] backdrop-blur-[10px] flex items-center justify-center">
            <IconBox
              path="/icons/crypto-icons/bch.svg"
              className="hidden lg:flex md:-top-28 -left-20 rotate-23"
            />
            <IconBox
              path="/icons/crypto-icons/bnb.svg"
              className="flex top-3 left-12 md:-top-8 md:left-16 lg:-top-10 lg:left-20 rotate-[-8deg] md:rotate-[-12deg] lg:rotate-[-18deg]"
            />
          </span>
        </div>

        {/* Crypto into */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 items-center justify-center">
          <IconBox path="/icons/crypto-icons/eth.svg" className="hidden md:flex static" />
          <span>crypto into</span>
          <IconBox path="/icons/crypto-icons/eth.svg" className="hidden md:flex static" />
        </div>

        {/* Virtual Cards */}
        <div className="flex flex-col md:flex-row items-center md:items-end md:justify-end">
          <div className="w-[200px] md:w-[220px] lg:w-[262px] h-[60px] md:h-[75px] lg:h-[90px] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] bg-gradient-to-r from-black to-[#2F2F2F] backdrop-blur-[10px]">
            <IconBox
              path="/icons/crypto-icons/ltc.svg"
              className="flex -bottom-2 right-6 md:-bottom-8 md:right-8 lg:-bottom-10 lg:right-10 rotate-[12deg] md:rotate-[18deg] lg:rotate-23"
            />
          </div>
          <span>virtual cards</span>
        </div>
      </h1>

      <div className="mt-6 md:mt-8 lg:mt-10 relative flex flex-col md:flex-row flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex items-center gap-2">
          {StartIcon}
          <span className="text-[#FEFEFE] text-sm md:text-base lg:text-lg font-gordita">
            Instant Issued
          </span>
        </div>
        <div className="flex items-center gap-2">
          {StartIcon}
          <span className="text-[#FEFEFE] text-sm md:text-base lg:text-lg font-gordita">
            No KYC
          </span>
        </div>
        <div className="flex items-center gap-2">
          {StartIcon}
          <span className="text-[#FEFEFE] text-sm md:text-base lg:text-lg font-gordita">
            3DS Enabled Cards
          </span>
        </div>
        <div className="flex items-center gap-2">
          {StartIcon}
          <span className="text-[#FEFEFE] text-sm md:text-base lg:text-lg font-gordita">
            Reloadable Cards
          </span>
        </div>

        <IconBox
          path="/icons/crypto-icons/sol.svg"
          className="flex -bottom-12 right-8 md:-bottom-16 md:right-16 lg:-bottom-24 lg:right-20 rotate-[20deg] md:rotate-[28deg] lg:rotate-36"
        />
      </div>

      <div className="mt-16 md:mt-20 lg:mt-28 text-center md:text-left">
        <p className="text-[#FAFAFA] text-lg md:text-lg lg:text-xl font-gordita leading-[24px] md:leading-[28px] lg:leading-[30px] max-w-[759px]">
          Deposit cryptocurrency, get instant USD cards and spend your crypto anywhere Mastercards
          are accepted.
        </p>

        <button className="mt-6 px-6 md:px-8 lg:px-10 py-4 md:py-4 lg:py-5 rounded-[24px] md:rounded-[30px] lg:rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black text-sm md:text-base lg:text-base font-medium font-gordita hover:opacity-90 transition-opacity">
          Get Your Virtual Card Now
        </button>
      </div>
    </section>
  );
}

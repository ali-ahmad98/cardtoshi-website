import Image from "next/image";

const StartIcon = <Image src="/icons/star.svg" alt="Globe icon" width={20} height={20} />;

export default function Features() {
  return (
    <section id="features" className="bg-dark-100">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="rounded-[20px] backdrop-blur-[10px]">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              {StartIcon}
              <span>Features</span>
              {StartIcon}
            </div>
            <h2 className="text-[40px] md:text-[80px] lg:text-[140px] font-bold font-eudoxus bg-gradient-to-r from-white to-[#525151] bg-clip-text text-transparent">
              All in one place
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2 bg-dark rounded-[30px] p-6 md:p-8 lg:p-12 pr-6 md:pr-0 flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-1">
                <h3 className="max-w-[290px] text-white text-2xl md:text-3xl lg:text-[40px] font-bold font-eudoxus mb-4 lg:mb-6">
                  Multi-Crypto Deposits
                </h3>
                <p className="max-w-[460px] text-[#7A7A7A] text-lg md:text-xl lg:text-[32px] font-gordita leading-[1.2]">
                  Deposit{" "}
                  <span className="text-[#7A7A7A] md:text-[#EBEBEB]">Bitcoin, Ethereum,</span> and
                  13+ other cryptocurrencies with automatic{" "}
                  <span className="text-[#7A7A7A] md:text-[#EBEBEB]">USD conversion</span>
                </p>
              </div>
              <Image
                src="/images/crypto-wallet.png"
                alt="Crypto Wallet"
                width={343}
                height={370}
                className="w-[180px] md:w-[260px] lg:w-[343px] h-auto m-auto"
              />
            </div>

            <div className="bg-dark rounded-[30px] p-6 md:p-8 lg:p-12">
              <h3 className="text-white text-2xl font-bold font-eudoxus mb-4">
                Instant Virtual Cards
              </h3>
              <p className="text-[#7A7A7A] text-lg font-gordita mb-8 max-w-[365px]">
                Create virtual Mastercards instantly with custom names and secure 3DS PIN protection
              </p>

              <Image
                src="/images/virtual-card.png"
                alt="Virtual Card"
                width={280}
                height={180}
                className="w-[200px] md:w-[240px] lg:w-[280px] h-auto m-auto"
              />
            </div>

            <div className="bg-dark rounded-[30px] p-12 relative">
              <h3 className="text-white text-2xl font-bold font-eudoxus mb-4">Referral Rewards</h3>
              <p className="text-[#7A7A7A] text-lg font-gordita mb-8 max-w-[365px]">
                Earn $5 per card created by your referrals and give $5 to your referral paid by us
              </p>
              <Image
                src="/images/crypto-gift-box.png"
                alt="Crypto Wallet"
                width={246}
                height={226}
                className="w-[180px] md:w-[200px] lg:w-[246px] h-auto m-auto"
              />
            </div>

            <div className="bg-dark rounded-[30px] p-12 text-center">
              <h3 className="text-white text-2xl font-bold font-eudoxus mb-4 text-center">
                3DS Payments
              </h3>
              <p className="text-[#7A7A7A] text-2xl font-gordita leading-[1.2] max-w-[465px] mx-auto">
                Use your <span className="text-[#EBEBEB]">Cardtoshi</span> anywhere online where
                Mastercard is accepted even at <span className="text-[#EBEBEB]">3DS-secured</span>{" "}
                sites. With 3DS enabled, your card wont get declined again.
              </p>
            </div>

            <div className="bg-dark rounded-[30px] p-12 text-center">
              <h3 className="text-white text-2xl font-bold font-eudoxus mb-4">No KYC</h3>
              <p className="text-[#7A7A7A] text-2xl font-gordita leading-[1.2] max-w-[465px] mx-auto">
                Create <span className="text-[#EBEBEB]">Virtual Crypto</span> Cards without any
                personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

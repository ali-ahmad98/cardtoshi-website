import Image from "next/image";

export default function Cryptocurrencies() {
  const cryptos = [
    {
      name: "AVAX",
      icon: "/icons/crypto-icons/avax.svg",
      network: "Arbitrum, Binance Smart Chain, Ethereum",
    },
    {
      name: "BCH",
      icon: "/icons/crypto-icons/bch.svg",
      network: "Bitcoin Cash",
    },
    {
      name: "BNB",
      icon: "/icons/crypto-icons/bnb.svg",
      network: "Binance Smart Chain",
    },
    {
      name: "BTC",
      icon: "/icons/crypto-icons/btc.svg",
      network: "Bitcoin",
    },
    {
      name: "CGPT",
      icon: "/icons/crypto-icons/cgpt.svg",
      network: "Ethereum, BNB Chain",
    },
    {
      name: "DAI",
      icon: "/icons/crypto-icons/dai.svg",
      network: "Ethereum, Polygon, BNB Chain",
    },
    {
      name: "DASH",
      icon: "/icons/crypto-icons/dash.svg",
      network: "Dash",
    },
    {
      name: "DOGE",
      icon: "/icons/crypto-icons/doge.svg",
      network: "Dogecoin",
    },
    {
      name: "ETH",
      icon: "/icons/crypto-icons/eth.svg",
      network: "Ethereum",
    },
    {
      name: "HMSTR",
      icon: "/icons/crypto-icons/hmstr.svg",
      network: "Ton",
    },
    {
      name: "LTC",
      icon: "/icons/crypto-icons/ltc.svg",
      network: "Litecoin",
    },
    {
      name: "POL",
      icon: "/icons/crypto-icons/pol.svg",
      network: "Polygon",
    },
    {
      name: "SHIB",
      icon: "/icons/crypto-icons/shib.svg",
      network: "Ethereum",
    },
    {
      name: "SOL",
      icon: "/icons/crypto-icons/sol.svg",
      network: "Solana",
    },
    {
      name: "TON",
      icon: "/icons/crypto-icons/ton.svg",
      network: "Ton",
    },
    {
      name: "TRX",
      icon: "/icons/crypto-icons/trx.svg",
      network: "Tron",
    },
    {
      name: "USDC",
      icon: "/icons/crypto-icons/usdc.svg",
      network: "Ethereum, Polygon, BNB Chain, Solana",
    },
    {
      name: "USDT",
      icon: "/icons/crypto-icons/usdt.svg",
      network: "Ethereum, Tron, BNB Chain, Polygon",
    },
    {
      name: "VERSE",
      icon: "/icons/crypto-icons/verse.svg",
      network: "Ethereum",
    },
    {
      name: "XMR",
      icon: "/icons/crypto-icons/xmr.svg",
      network: "Monero",
    },
  ];

  return (
    <section className="bg-dark-100">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-center bg-gradient-to-r from-white to-[#525151] bg-clip-text text-transparent text-[40px] md:text-[80px] font-bold font-eudoxus">
          Supported Cryptocurrencies
        </h2>
        <p className="mt-4 text-[#7A7A7A] text-2xl font-gordita text-center max-w-[758px] mx-auto">
          Deposit directly using the native networks of the cryptocurrencies listed below.
        </p>

        <div className="mt-16 relative py-4 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {cryptos.map((crypto, index) => (
              <div
                key={index}
                className="h-38 md:h-28 flex flex-col justify-center md:flex-row md:justify-start items-center gap-3 px-3 md:px-6 rounded-[20px] border border-[#EDEDED]/5 bg-gradient-to-b from-white/[0.03] to-transparent shadow-[0_-5px_13px_0_rgba(255,255,255,0.15)]"
              >
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image src={crypto.icon} alt={crypto.name} fill className="object-contain" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-white text-md md:text-2xl font-bold font-gordita">
                    {crypto.name}
                  </h3>
                  <p className="text-[#7A7A7A] text-sm md:text-md font-gordita">{crypto.network}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[486px] bg-gradient-to-r from-dark-100 to-transparent pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[486px] bg-gradient-to-l from-dark-100 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

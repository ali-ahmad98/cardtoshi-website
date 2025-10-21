import { ArrowRight, ArrowUpRight, CreditCard } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-dark-200 rounded-2xl p-6 md:p-12 mb-8 md:mb-12 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
          <div>
            <h3 className="text-[#F9FAFB] text-2xl md:text-[28px] font-medium font-eudoxus mb-2.5 text-center md:text-left">
              Swap Crypto into Virtual Cards
            </h3>
            <p className="text-[#F9FAFB]/60 font-gordita max-w-[491px] text-center md:text-left">
              Join thousands of users who are already spending their crypto with our secure, instant
              card platform.
            </p>
          </div>
          <Link
            href="https://app.cardtoshi.com"
            className="w-full md:w-auto flex items-center justify-center md:justify-start gap-4 text-lg font-gordita px-6 py-2.5 rounded-[34px] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all ml-auto"
          >
            Launch App
            <ArrowUpRight />
          </Link>

          {/* <button className="w-full md:w-auto px-6 md:px-10 py-4 md:py-5 rounded-full bg-[#323232] text-white font-medium text-lg md:text-xl flex items-center justify-center md:justify-start gap-4 hover:bg-[#404040] transition-colors cursor-pointer">
            Get Started
            <ArrowRight />
          </button> */}
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
          <div className="md:max-w-96">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#FFFDF9] flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#053535]" />
              </div>
              <span className="text-white text-xl font-medium font-gordita">Cardtoshi</span>
            </div>
            <p className="text-white/80 font-gordita leading-[19.6px] text-center md:text-left">
              Bridge your cryptocurrency to real-world spending with secure, instant virtual cards.
              <br />
              <br />
              Deposit crypto, create cards, and earn through referrals. Your gateway to spending
              crypto anywhere.
            </p>
          </div>

          <div>
            <h4 className="text-white/40 text-xs font-medium font-gordita uppercase tracking-wider mb-6 text-center md:text-left">
              Quick Links
            </h4>
            <div className="space-y-2.5 text-center md:text-left">
              <Link
                href="/"
                className="block text-white/80 font-inter hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="block text-white/80 font-inter hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="/how-it-works"
                className="block text-white/80 font-inter hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/contact-us"
                className="block text-white/80 font-inter hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="">
            <h4 className="text-white/40 text-xs font-medium font-gordita uppercase tracking-wider mb-6 text-center md:text-left">
              Contact
            </h4>
            <div className="space-y-0 text-center md:text-left">
              <a
                href="mailto:support@cardtoshi.com"
                className="block text-white/80 font-gordita underline hover:text-white transition-colors leading-[27px]"
              >
                support@cardtoshi.com
              </a>
              <p className="text-white/80 font-gordita leading-[27px]">24/7 Customer Support</p>
              <p className="text-white/80 font-gordita leading-[27px]">Secure & Trusted Platform</p>
              <p className="text-white/80 font-gordita leading-[27px]">Bank-Level Security</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#4B4B4B] mb-5"></div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
          <p className="text-white/40 text-sm font-medium font-gordita text-center md:text-left">
            © 2025 — Copyright
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link
              href="/privacy-policy"
              className="text-white/40 text-sm font-medium font-gordita hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/40 text-sm font-medium font-gordita hover:text-white/60 transition-colors"
            >
              Terms of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

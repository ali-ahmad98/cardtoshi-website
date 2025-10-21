"use client";

import { ArrowUpRight, CreditCard, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Only update the state after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/20 backdrop-blur-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 h-28 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-black" />
          </div>
          <span className="text-white text-xl font-medium font-gordita">Cardtoshi</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-base font-gordita transition-all ${
              mounted && pathname === "/"
                ? "px-6 py-2.5 rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black"
                : "text-white hover:opacity-80"
            }`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`text-base font-gordita transition-all ${
              mounted && pathname === "/features"
                ? "px-6 py-2.5 rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black"
                : "text-white hover:opacity-80"
            }`}
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className={`text-base font-gordita transition-all ${
              mounted && pathname === "/how-it-works"
                ? "px-6 py-2.5 rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black"
                : "text-white hover:opacity-80"
            }`}
          >
            How It Works
          </Link>
          <Link
            href="/contact-us"
            className={`text-base font-gordita transition-all ${
              mounted && pathname === "/contact-us"
                ? "px-6 py-2.5 rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black"
                : "text-white hover:opacity-80"
            }`}
          >
            Contact
          </Link>

          <Link
            href="https://app.cardtoshi.com"
            className="flex items-center gap-4 text-base font-gordita px-6 py-2.5 rounded-[34px] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all ml-auto"
          >
            Launch App
            <ArrowUpRight />
          </Link>
        </div>

        <Link
          href="https://app.cardtoshi.com"
          className="md:hidden mr-3 flex items-center gap-2 text-sm font-gordita px-3 py-2 rounded-[34px] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all ml-auto"
        >
          Launch App
          <ArrowUpRight className="w-5" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="p-4 pt-8 flex justify-end">
            <button className="text-white p-2" onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-12">
            <Link
              href="/"
              className={`text-2xl font-gordita transition-all ${
                mounted && pathname === "/"
                  ? "px-8 py-3 rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black"
                  : "text-white hover:opacity-80"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`text-2xl font-gordita transition-all ${
                mounted && pathname === "/features"
                  ? "px-8 py-3 rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black"
                  : "text-white hover:opacity-80"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className={`text-2xl font-gordita transition-all ${
                mounted && pathname === "/how-it-works"
                  ? "px-8 py-3 rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black"
                  : "text-white hover:opacity-80"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/contact-us"
              className={`text-2xl font-gordita transition-all ${
                mounted && pathname === "/contact-us"
                  ? "px-8 py-3 rounded-[34px] bg-gradient-to-r from-[#D9D9D9] to-[#BCBCBC] text-black"
                  : "text-white hover:opacity-80"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

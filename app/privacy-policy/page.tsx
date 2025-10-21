import PageTitleComponent from "@/components/PageTitleComponent";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <PageTitleComponent title="Privacy policy" />

      <div className="bg-dark-100">
        <div className="container mx-auto px-4 py-16 text-sm leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">🔒 Cardtoshi Privacy Policy</h1>
          <p className="italic mb-6">(Last updated: Jan 2025)</p>
          <p className="mb-4">
            At Cardtoshi, your privacy is not just a feature — it’s a core principle. We design our
            platform to protect your anonymity, give you control over your data, and ensure secure
            financial operations with crypto.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. No-KYC Policy</h2>
          <p className="mb-4">
            We do not require Know Your Customer (KYC) verification to use our services. You can
            create and use virtual cards without submitting identification documents or personal
            details.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Data We Do NOT Collect</h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Government-issued ID or selfies</li>
            <li>Residential or billing addresses</li>
            <li>Transaction histories linked to personal identity</li>
            <li>IP logs associated with crypto addresses or usage</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Minimal Information We Use</h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Your email (for login, receipts, and support)</li>
            <li>Wallet addresses for deposits and funding</li>
            <li>Card activity</li>
          </ul>
          <p className="mb-4">
            We do not associate this data with personal identity and do not share it with third
            parties.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies &amp; Tracking</h2>
          <p className="mb-4">
            We use only minimal, essential cookies to enable secure logins and card functionality.
            We do not use third-party trackers, marketing pixels, or behavioral analytics.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Crypto Transactions</h2>
          <p className="mb-4">
            All funding is done via crypto. Blockchain transaction details are public by design and
            not controlled by Cardtoshi.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Security</h2>
          <p className="mb-4">
            Your card information is protected with bank-grade encryption and tokenization. We
            follow industry best practices including 3DS Secure authentication.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">7. User Control</h2>
          <p className="mb-4">
            You may delete your account or request data deletion at any time by contacting our
            support team at{" "}
            <a href="mailto:support@cardtoshi.com" className="text-blue-600 underline">
              support@cardtoshi.com
            </a>
            .
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Third Parties</h2>
          <p className="mb-4">
            We do not sell, rent, or share your data with advertisers or analytics companies. Our
            payment processors and card issuers receive only what is essential for secure card
            delivery.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
          <a href="mailto:support@cardtoshi.com" className="mb-2">
            📧 support@cardtoshi.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

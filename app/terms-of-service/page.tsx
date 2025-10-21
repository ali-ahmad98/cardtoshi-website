import PageTitleComponent from "@/components/PageTitleComponent";
import React from "react";

const TermsOfService = () => {
  return (
    <div>
      <PageTitleComponent title="Terms of Service" />

      <div className="bg-dark-100">
        <div className="container mx-auto px-4 py-16 text-sm leading-relaxed">
          <h1 className="text-3xl font-bold mb-4">📜 Cardtoshi Terms of Service</h1>
          <p className="italic mb-6">(Effective July 2025)</p>
          <p className="mb-4">
            These Terms govern your access to and use of Cardtoshi and its services.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance</h2>
          <p className="mb-4">
            By using Cardtoshi, you agree to be bound by these Terms. If you disagree, please
            discontinue usage.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Eligibility</h2>
          <p className="mb-4">
            You must be over 18 and legally allowed to use cryptocurrencies and virtual cards in
            your jurisdiction.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Services Offered</h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Instant creation of virtual prepaid cards</li>
            <li>Loading cards via crypto (BTC, ETH, USDT, etc.)</li>
            <li>Global card acceptance online</li>
            <li>Privacy-first card management (freeze/unfreeze, rename, 3DS)</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. No KYC Required</h2>
          <p className="mb-4">
            Cardtoshi operates under a no-KYC model for standard account access. However, in extreme
            abuse or fraud cases, we may request additional verification or freeze access
            temporarily but we will never ask any form of KYC.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Fees</h2>
          <p className="mb-4">
            Cardtoshi charges a transparent one-time card issuing fee of 15${" "}
            <strong>3% + $1 USD</strong> fee per load. No hidden or inactivity fees. All fees are
            visible before each transaction.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Card Usage Rules</h2>
          <p className="mb-2">Cards must not be used for:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Illicit or prohibited purchases (e.g., fraud, dark web)</li>
            <li>Circumventing sanctions or money laundering</li>
            <li>Activity violating card network (Visa, Mastercard) policies</li>
          </ul>
          <p className="mb-4">
            Violations may result in card freeze or termination without refund.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Refunds &amp; Reversals</h2>
          <p className="mb-4">
            Due to the irreversible nature of crypto transactions, Cardtoshi does not offer refunds
            on deposits.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Service Availability</h2>
          <p className="mb-4">
            We strive for 24/7 uptime but make no guarantees. Maintenance, third-party outages, or
            force majeure may affect availability.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">9. Limitation of Liability</h2>
          <p className="mb-2">Cardtoshi is not liable for:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Losses from incorrect wallet addresses or deposits</li>
            <li>Merchant refusals or card rejections</li>
            <li>Blockchain delays or network fees</li>
            <li>User error or password loss</li>
          </ul>
          <p className="mb-4">Maximum liability is limited to the last active card balance.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">10. Restricted Countries</h2>
          <p className="mb-2">
            Cardtoshi services are not available in certain countries due to regulatory restrictions
            and compliance obligations. Before registering for a Cardtoshi account, please ensure
            you are not a resident, citizen, or currently located in any of the following restricted
            countries:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Afghanistan</li>
            <li>Belarus</li>
            <li>Central African Republic</li>
            <li>Congo (Democratic Republic)</li>
            <li>Cuba</li>
            <li>Iran</li>
            <li>Iraq</li>
            <li>Libya</li>
            <li>North Korea</li>
            <li>Russia</li>
            <li>Somalia</li>
            <li>Sudan</li>
            <li>South Sudan</li>
            <li>Syria</li>
            <li>Venezuela</li>
            <li>Yemen</li>
            <li>Zimbabwe</li>
            <li>Israel</li>
          </ul>
          <p className="mb-4">
            If you are found to be located in, or using our services from, any of these countries,
            your account will be locked and access to Cardtoshi services will be restricted. This
            list is subject to change based on international regulatory requirements and internal
            compliance policies. You are responsible for verifying your eligibility before signing
            up for Cardtoshi services.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">11. Changes to Terms</h2>
          <p className="mb-4">
            We may update these Terms. Continued use after changes means you accept the updated
            version.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Questions?</h2>
          <a href="mailto:support@cardtoshi.com" className="mb-2">
            📧 support@cardtoshi.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

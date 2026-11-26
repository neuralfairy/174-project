import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <article className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Anti-Spam Policy – Protection Against Spam and Misuse
          </h1>
          <p className="text-gray-600">
            <strong>Website:</strong>{' '}
            <a
              href="https://projectconsultantsusa.com"
              className="text-teal-700 hover:text-teal-800 underline"
            >
              ProjectConsultantsUSA - Expert CRM Implementation
            </a>
          </p>
        </header>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Policy and Objectives</h2>
            <p>
              Project Consultants USA aims to maintain a safe, transparent, and professional online presence. We are
              committed to preventing unsolicited marketing, deceptive advertising, and unauthorized distribution of
              promotional information associated with our website.
            </p>
            <p className="mt-3">
              We do not permit any individual, company, affiliate, marketing representative, or external organization to
              use our website or business identity for unsolicited advertising activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Unacceptable Marketing Practices</h2>
            <p>The following activities are strictly prohibited:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Sending unsolicited emails that contain links to our website or promote our services without the recipient's consent.</li>
              <li>Distributing unwanted advertisements through WhatsApp, SMS, social media platforms, or other electronic communication methods.</li>
              <li>Collecting or using purchased, scraped, harvested, or unauthorized contact details for promotional purposes.</li>
              <li>Using automated email tools, bulk messaging applications, or bots to circulate unsolicited marketing material.</li>
              <li>Impersonating Project Consultants USA employees, creating misleading sender information, or falsely claiming authorization from our company.</li>
              <li>Arranging third-party advertising campaigns that promote our website through unsolicited messages or unauthorized communication.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Rules for Third-Party Marketing</h2>
            <p>
              No external person or organization has permission to conduct independent promotional campaigns using the
              Project Consultants USA name, website address, or business information without prior written approval.
            </p>
            <p className="mt-3">
              Any unauthorized marketing activity undertaken by a third party will be considered that party's
              independent responsibility. The individuals or organizations involved may be held accountable for
              violations under applicable laws.
            </p>
            <p className="mt-3">We do not accept or support promotional practices that rely on unsolicited communications.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Corrective Measures and Legal Enforcement</h2>
            <p>
              Project Consultants USA reserves the right to review suspected violations and take reasonable action to
              protect its website, reputation, and business interests.
            </p>
            <p className="mt-3">Depending on the circumstances, we may:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Initiate appropriate civil proceedings or criminal action where legally justified.</li>
              <li>Notify relevant law enforcement agencies and regulatory authorities.</li>
              <li>Seek compensation for proven financial damage, commercial losses, and reputational harm.</li>
              <li>Withdraw business permissions or discontinue affiliate, partnership, and contractual arrangements.</li>
              <li>Report suspicious activities to internet service providers, hosting platforms, email providers, and domain registrars.</li>
            </ul>
            <p className="mt-3">All enforcement actions will be considered in accordance with applicable laws and legal procedures.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Reporting Spam Incidents</h2>
            <p>
              If you receive an unwanted email, message, or advertisement that includes or promotes projectconsultantsusa.com,
              please inform us through the official communication channels listed on our website.
            </p>
            <p className="mt-3">For investigation purposes, we recommend providing the following information:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The original email or message received.</li>
              <li>Details of the sender, including available contact information.</li>
              <li>Complete email headers, wherever applicable.</li>
              <li>Relevant screenshots, links, or additional evidence.</li>
            </ul>
            <p className="mt-3">We appreciate reports that help us identify and address unauthorized promotional activities.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Final Commitment</h2>
            <p>
              Project Consultants USA is dedicated to maintaining responsible online communication and protecting its
              brand from unauthorized advertising practices.
            </p>
            <p className="mt-3">
              We strongly oppose spam, false representations, unsolicited promotions, and misuse of our business identity.
              Any violation of this policy may lead to appropriate action, including legal remedies where permitted by applicable law.
            </p>
          </section>

          <footer className="border-t border-gray-200 pt-6">
            <p className="font-bold text-gray-900">
              RESPONSIBLE ADVERTISING. SECURE COMMUNICATION. ZERO SPAM TOLERANCE.
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              ProjectConsultantsUSA – Expert CRM Implementation
            </p>
            <p className="mt-2">
              Professional CRM implementation and sales process optimization services in Phoenix, Arizona.
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default PrivacyPolicyPage;

import React from 'react';
import Link from 'next/link';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to BotStrateg
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="prose prose-invert prose-purple max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing or using BotStrateg ("the Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users, 
                including visitors, registered users, and subscribers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BotStrateg is an AI-powered cryptocurrency trading platform that provides:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4 ml-6">
                <li>• Intelligent trading bots and automated trading strategies</li>
                <li>• Advanced analytics and performance tracking</li>
                <li>• AI-driven strategy recommendations</li>
                <li>• Integration with supported cryptocurrency exchanges</li>
                <li>• Portfolio optimization tools</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                The Service is currently in development phase. Features and availability may change without notice.
              </p>
            </section>

            {/* <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Risk Disclosure</h2>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-4">
                <h3 className="text-red-400 font-semibold mb-2">IMPORTANT RISK WARNING</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors. 
                  The value of cryptocurrencies can be extremely volatile and unpredictable.
                </p>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• You may lose some or all of your invested capital</li>
                  <li>• Past performance does not guarantee future results</li>
                  <li>• Automated trading bots can malfunction or produce unexpected results</li>
                  <li>• Market conditions can change rapidly and unpredictably</li>
                </ul>
              </div>
            </section> */}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">By using BotStrateg, you agree to:</p>
              <ul className="text-gray-300 space-y-2 mb-4 ml-6">
                <li>• Provide accurate and complete information when creating an account</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Not use the Service for any illegal or unauthorized purposes</li>
                <li>• Not attempt to circumvent any security measures</li>
                <li>• Not share your account with others</li>
                <li>• Understand the risks associated with cryptocurrency trading</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Account Registration and Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To use certain features of BotStrateg, you must create an account. You are responsible for:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4 ml-6">
                <li>• Maintaining the confidentiality of your login credentials</li>
                <li>• All activities that occur under your account</li>
                <li>• Immediately notifying us of any unauthorized account access</li>
                <li>• Providing accurate and up-to-date information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Exchange Integration and API Usage</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BotStrateg integrates with third-party cryptocurrency exchanges through API connections. You acknowledge that:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4 ml-6">
                <li>• You must comply with each exchange's terms of service</li>
                <li>• API keys and permissions are your responsibility to manage</li>
                <li>• We are not responsible for exchange downtime or API limitations</li>
                <li>• You should use API keys with minimal necessary permissions</li>
                <li>• Exchange-related issues are outside our direct control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Fees and Payment</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BotStrateg may charge fees for premium features and services. You agree that:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4 ml-6">
                <li>• Fees are subject to change with reasonable notice</li>
                <li>• All fees are non-refundable unless required by law</li>
                <li>• You authorize us to charge your selected payment method</li>
                <li>• Taxes, if applicable, are your responsibility</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content, features, and functionality of BotStrateg, including but not limited to algorithms, 
                software, text, graphics, logos, and trademarks, are owned by BotStrateg or its licensors and 
                are protected by intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Disclaimers</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-4">
                <p className="text-gray-300 leading-relaxed mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. 
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE</li>
                  <li>• ACCURACY, RELIABILITY, OR COMPLETENESS OF INFORMATION</li>
                  <li>• UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                  <li>• SECURITY OR FREEDOM FROM VIRUSES</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BOTSTRATEG SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4 ml-6">
                <li>• Loss of profits, data, or trading opportunities</li>
                <li>• Business interruption or system downtime</li>
                <li>• Third-party exchange failures or API issues</li>
                <li>• Market losses or poor trading performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, 
                for any reason, including if you breach these Terms. Upon termination, your right to use the Service 
                will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
                the Service, to understand our practices regarding the collection and use of your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">13. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes 
                by posting the new Terms on this page and updating the "Last updated" date. Your continued use of 
                the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
                without regard to its conflict of law provisions. Any disputes arising under these Terms shall be 
                subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-gray-300">
                  Email: legal@botstrateg.com<br />
                  Address: [Your Business Address]
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            By using BotStrateg, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
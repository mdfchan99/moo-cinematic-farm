
import Navigation from '../components/Navigation';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-blue-300/30" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4 animate-fade-in">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-700 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg text-green-700 mb-8">
                <strong>Last updated:</strong> December 30, 2024
              </p>

              <h2 className="text-2xl font-bold text-green-800 mb-4">1. Information We Collect</h2>
              <p className="mb-6">
                At Meadow Farm, we collect information that you provide directly to us when you:
              </p>
              <ul className="mb-6 list-disc list-inside space-y-2">
                <li>Book a farm visit or tour</li>
                <li>Contact us through our website or forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in our educational programs</li>
                <li>Purchase products from our farm store</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-800 mb-4">2. Types of Information</h2>
              <p className="mb-4">
                The information we collect may include:
              </p>
              <ul className="mb-6 list-disc list-inside space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Visit Information:</strong> Preferred dates, group size, special requirements</li>
                <li><strong>Communication:</strong> Messages, questions, and feedback you send to us</li>
                <li><strong>Technical Information:</strong> Browser type, device information, IP address (automatically collected)</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-800 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="mb-6 list-disc list-inside space-y-2">
                <li>Process and confirm your farm visit bookings</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our farm, events, and educational programs</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-800 mb-4">4. Information Sharing</h2>
              <p className="mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="mb-6 list-disc list-inside space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>With trusted service providers who assist us in operating our website and farm tours (under strict confidentiality agreements)</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-800 mb-4">5. Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-green-800 mb-4">6. Cookie Policy</h2>
              <p className="mb-6">
                Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences. Essential cookies are necessary for the website to function properly.
              </p>

              <h2 className="text-2xl font-bold text-green-800 mb-4">7. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="mb-6 list-disc list-inside space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-800 mb-4">8. Children's Privacy</h2>
              <p className="mb-6">
                Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-green-800 mb-4">9. Third-Party Links</h2>
              <p className="mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>

              <h2 className="text-2xl font-bold text-green-800 mb-4">10. Data Retention</h2>
              <p className="mb-6">
                We retain your personal information only as long as necessary to fulfill the purposes for which it was collected or as required by law. Visit booking information is typically retained for record-keeping purposes for up to 3 years.
              </p>

              <h2 className="text-2xl font-bold text-green-800 mb-4">11. Changes to This Policy</h2>
              <p className="mb-6">
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-green-800 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our data practices, or if you would like to exercise your rights, please contact us:
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <p><strong>Meadow Farm</strong></p>
                <p>1234 Meadow Lane<br />Green Valley, State 12345</p>
                <p><strong>Email:</strong> privacy@meadowfarm.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Privacy Officer:</strong> Sarah Wilson</p>
              </div>

              <p className="mt-8 text-sm text-gray-600">
                This privacy policy is effective as of the date listed above and applies to all information collected by Meadow Farm through our website and related services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

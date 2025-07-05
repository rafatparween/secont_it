import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-blue-600 px-6 py-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Terms & Conditions</h1>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Top Terms & Conditions Section */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 mb-4">
                By accessing this website and using our services, you agree to the following:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Hewlett Printers Solution LLC provides third-party support services and informational content only.</li>
                <li>We are not affiliated with, endorsed by, or acting on behalf of any official printer manufacturer (including HP, Epson, Canon, or Brother).</li>
                <li>All services are provided for a nominal one-time fee and are delivered remotely or through online content.</li>
                <li>You are responsible for providing accurate information and following the instructions given by our support team.</li>
              </ul>
            </div>

            {/* Additional Terms Sections */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-700">
                  Unless otherwise stated, Hewlett Printers Solution LLC and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Restrictions
                </h2>
                <p className="text-gray-700 mb-3">You are specifically restricted from all of the following:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
                  <li className="hover:text-blue-600 transition-colors">Publishing any website material in any media without permission</li>
                  <li className="hover:text-blue-600 transition-colors">Selling, sublicensing and/or otherwise commercializing any website material</li>
                  <li className="hover:text-blue-600 transition-colors">Using this website in any way that is or may be damaging to this website</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Your Content
                </h2>
                <p className="text-gray-700">
                  In these Terms & Conditions, "Your Content" shall mean any audio, video, text, images or other material you choose to display on this website. By displaying Your Content, you grant Hewlett Printers Solution LLC a non-exclusive, worldwide irrevocable license to use, reproduce, and edit it.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  Limitation of Liability
                </h2>
                <p className="text-gray-700">
                  In no event shall Hewlett Printers Solution LLC, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                  Indemnification
                </h2>
                <p className="text-gray-700">
                  You hereby indemnify to the fullest extent Hewlett Printers Solution LLC from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
                  Governing Law
                </h2>
                <p className="text-gray-700">
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">7</span>
                  Changes to These Terms
                </h2>
                <p className="text-gray-700">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">8</span>
                  Contact Us
                </h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at support@hewlettprinterssolutions.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
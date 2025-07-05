import React from 'react';

const Disclaimer = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-10">
        <div className="p-6 lg:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
          {/* Top Disclaimer Banner */}
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
            <p className="text-gray-700">
              Hewlett Printers Solution LLC is an independent service provider. We are not associated with any original equipment manufacturer (OEM) such as HP, Canon, Epson, Brother, etc. All trademarks, logos, and brand names are used solely for informational and reference purposes. We do not claim any association or authorization from the printer brands mentioned.
            </p>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center pb-4 border-b-2 border-blue-100">
            Hewlett Printers Solution LLC Disclaimer
          </h1>
          
          {disclaimerContent.map((section, index) => (
            <div 
              key={index} 
              className={`mb-10 p-6 rounded-lg ${index % 2 === 0 ? 'bg-blue-50' : 'bg-gray-50'}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm flex-shrink-0">
                  {index + 1}
                </span>
                {section.sectionTitle}
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {section.content.map((paragraph, idx) => (
                  <li 
                    key={idx} 
                    className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-200"
                  >
                    {paragraph}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="mt-8 text-center text-sm text-gray-500 italic">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

const disclaimerContent = [
  {
    sectionTitle: 'Disclaimer for Hewlett Printers Solution LLC',
    content: [
      'If you require any more information or have any questions about our site\'s disclaimer, please feel free to contact us by email at support@hewletthubsolutions.com.',
    ],
  },
  {
    sectionTitle: 'General Information',
    content: [
      'The information provided by Hewlett Printers Solution LLC on this website is for general informational purposes only. While we strive to ensure the accuracy and reliability of our refurbished printers, we do not make any warranties or guarantees about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.',
    ],
  },
  {
    sectionTitle: 'Product Condition and Availability',
    content: [
      'All refurbished printers sold by Hewlett Printers Solution LLC have been thoroughly inspected, tested, and certified by our skilled technicians. However, as these are pre-owned items, they may show minor signs of previous use. We ensure that all functionality meets our rigorous standards, but physical imperfections may exist. Availability of specific models may vary, and we cannot guarantee the availability of any particular product.',
    ],
  },
  {
    sectionTitle: 'Warranty and Returns',
    content: [
      'Hewlett Printers Solution LLC offers a six-month warranty on all refurbished printers. The terms and conditions of the warranty, including the duration and coverage, are outlined in the warranty documentation provided with each product. The warranty covers defects in materials and workmanship under normal use during the warranty period. We also provide a return policy, the details of which can be found on our Returns page. Customers are encouraged to review the warranty and return policy details before making a purchase. Any claims under the warranty must be made in accordance with the procedures outlined in the warranty documentation.',
    ],
  },
  {
    sectionTitle: 'Limitation of Liability',
    content: [
      'In no event will Hewlett Printers Solution LLC be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits, arising out of or in connection with the use of this website or the purchase and use of our products.',
    ],
  },
  {
    sectionTitle: 'External Links',
    content: [
      'Through this website, you may be able to link to other websites which are not under the control of Hewlett Printers Solution LLC. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
    ],
  },
  {
    sectionTitle: 'Legal Compliance',
    content: [
      'Hewlett Printers Solution LLC operates in compliance with all applicable laws and regulations of the United States. It is the responsibility of the customer to ensure that their use of our products complies with any applicable local, state, or federal laws.',
    ],
  },
  {
    sectionTitle: 'Governing Law',
    content: [
      'This disclaimer and any disputes arising out of or in connection with the use of this website or the purchase of our products shall be governed by and construed in accordance with the laws of the United States.',
    ],
  },
  {
    sectionTitle: 'Modifications',
    content: [
      'Hewlett Printers Solution LLC reserves the right to modify this disclaimer at any time. Any changes will be posted on this page, and it is your responsibility to review this page periodically for updates.',
    ],
  },
  {
    sectionTitle: 'Contact Information',
    content: [
      'If you have any questions or concerns about this disclaimer, please contact our customer service team at:',
      'Email: support@hewlettprintersolution.com',
    ],
  },
  {
    sectionTitle: 'Agreement',
    content: [
      'By using our website and purchasing our products, you agree to this disclaimer in full. If you do not agree with any part of this disclaimer, you must not use our website or purchase our products. Thank you for choosing Hewlett Printers Solution LLC.',
    ],
  },
];
import React from 'react';

const ReturnRefundPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-blue-600 px-6 py-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Return & Refund Policy</h1>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Refund & Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                We strive to ensure every customer is satisfied. If you are not happy with the service provided, you may request a refund within 7 days of service delivery under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 mb-4">
                <li>The service was not delivered as described</li>
                <li>The issue was not resolved despite reasonable efforts</li>
                <li>The service was canceled before it began</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Refunds will not be issued if:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 mb-4">
                <li>The issue was resolved</li>
                <li>The customer failed to follow troubleshooting instructions</li>
                <li>The support was fully completed and confirmed</li>
              </ul>
              <p className="text-gray-700">
                All refund requests can be made by contacting [support email].
              </p>
            </div>

            {returnRefundPolicyContent.map((section, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${index % 2 === 0 ? 'bg-blue-50' : 'bg-gray-50'}`}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  {section.sectionTitle}
                </h2>
                
                {section.content &&
                  section.content.map((paragraph, idx) => (
                    <p 
                      key={idx} 
                      className="text-gray-700 mb-3 leading-relaxed hover:text-gray-900 transition-colors"
                    >
                      {paragraph}
                    </p>
                  ))}
                
                {section.subSections &&
                  section.subSections.map((subSection, subIdx) => (
                    <div key={subIdx} className="ml-6 mb-4 mt-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
                        <span className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">
                          {subIdx + 1}
                        </span>
                        {subSection.subTitle}
                      </h3>
                      {Array.isArray(subSection.content) ? (
                        subSection.content.map((subParagraph, subPIdx) => (
                          <p 
                            key={subPIdx} 
                            className="text-gray-700 mb-2 leading-relaxed hover:text-gray-900 transition-colors"
                          >
                            {subParagraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-700 mb-2 leading-relaxed hover:text-gray-900 transition-colors">
                          {subSection.content}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnRefundPolicy;

const returnRefundPolicyContent = [
  {
    sectionTitle: 'Thank you for shopping at Hewlett Printers Solution LLC',
    content: [
      'If, for any reason, You are not completely satisfied with a purchase, We invite You to review our policy on refunds and returns.',
      'The following terms are applicable for any products that You purchased with Us.',
    ]
  },
  {
    sectionTitle: 'Interpretation and Definitions',
    subSections: [
      {
        subTitle: 'Interpretation',
        content: [
          'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.',
        ],
      },
      {
        subTitle: 'Definitions',
        content: [
          'For the purposes of this Return and Refund Policy:',
          'Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Hewlett Printers Solution LLC.',
          'Goods refer to the items offered for sale on the Service.',
          'Orders mean a request by You to purchase Goods from Us.',
          'Service refers to the Website.',
          'Website refers to Hewlett Printers Solution LLC, accessible from https://hewletthubsolutions.com/',
          'You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
        ],
      },
    ],
  },
  {
    sectionTitle: 'Your Order Cancellation Rights',
    content: [
      'You are entitled to cancel Your Order within 7 days without giving any reason for doing so.',
      'The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.',
      'In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:',
      'By email: support@hewletthubsolutions.com',
      'We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.',
    ],
  },
  {
    sectionTitle: 'Conditions for Returns',
    content: [
      'In order for the Goods to be eligible for a return, please make sure that:',
      'The Goods were purchased in the last 7 days',
      'The Goods are in the original packaging',
      'The following Goods cannot be returned:',
      'The supply of Goods made to Your specifications or clearly personalized.',
      'The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.',
      'The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.',
      'The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.',
      'We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.',
      'Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.',
    ],
  },
  {
    sectionTitle: 'Returning Goods',
    content: [
      'You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:',
      '89 Woodland Center, USA',
      'We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.',
    ],
  },
  {
    sectionTitle: 'Gifts',
    content: [
      'If the Goods were marked as a gift when purchased and then shipped directly to you, You\'ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.',
      'If the Goods weren\'t marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.',
    ],
  },  
  {
    sectionTitle: 'Contact Us',
    content: [
      'If you have any questions about our Returns and Refunds Policy, please contact us:',
      'By email: support@hewlettprinterssolutions.com',
    ],
  },
];
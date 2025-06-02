const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the Gear Grow website and services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Website</h2>
              <p className="text-gray-600 mb-4">
                This website is provided for your personal and non-commercial use. You may not use this website for any 
                illegal or unauthorized purpose. You agree to comply with all laws, rules and regulations applicable to 
                your use of the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Product Information</h2>
              <p className="text-gray-600 mb-4">
                We strive to provide accurate product information on our website. However, we do not warrant that product 
                descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. If a 
                product offered by Gear Grow is not as described, your sole remedy is to return it in unused condition.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pricing and Payment</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
                <li>We reserve the right to change prices at any time without notice.</li>
                <li>Payment must be made in full before shipment of products.</li>
                <li>We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery (where available).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Shipping and Delivery</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Shipping costs and delivery times vary based on location and product availability.</li>
                <li>We aim to process and ship orders within 2-3 business days.</li>
                <li>Delivery times are estimates and not guaranteed.</li>
                <li>Risk of loss and title for products pass to you upon delivery.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Returns and Refunds</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Products can be returned within 7 days of delivery if unused and in original packaging.</li>
                <li>Certain products may not be eligible for return due to hygiene or safety reasons.</li>
                <li>Refunds will be processed within 7-10 business days after receipt of returned products.</li>
                <li>Shipping costs for returns may be borne by the customer unless the product is defective.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Warranty</h2>
              <p className="text-gray-600 mb-4">
                Gear Grow products come with a manufacturer's warranty. The warranty period and terms vary by product. 
                Please refer to the specific product documentation for warranty details. The warranty does not cover 
                damage due to misuse, negligence, or normal wear and tear.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Gear Grow shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy, 
                which also governs the Site and informs users of our data collection practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property 
                of Gear Grow or its content suppliers and is protected by Indian and international copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting to the website. Your continued use of the website following any changes indicates your 
                acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Gear Grow</p>
                <p>123 Industrial Area, Phase 2</p>
                <p>Ludhiana, Punjab 141003</p>
                <p>Email: legal@geargrow.com</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
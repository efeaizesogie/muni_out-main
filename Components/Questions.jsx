export default function FAQSection() {
  const faqs = [
    {
      question: "How does muni work for you?",
      answer: "Lorem ipsum dolor sit amet consectetur. Arcu cras fames sit quis integer auctor ut aliquet. Arcu ac sit porttitor convallis quis ac tincidunt adipiscing. Id purus quis maecenas dictum vitae. Porta ac donec dui est leo nec elementum ut venenatis lobortis."
    },
    {
      question: "What do we need to onboard to muni?",
      answer: "Lorem ipsum dolor sit amet fames libero consectetur. Urna blandit auctor faucibus fermentum imperdiet arcu. A non ut ut aenean mus. Amet libero gravida quam congue. Non condimentum fames libero nisi arcu tempus morbi cursus..."
    },
    {
      question: "What is the ROI on an AI 311 chatbot?",
      answer: "Lorem ipsum dolor sit amet consectetur. Cursus molestie tincidunt eu maecenas commodo elit etiam gravida. Ut auctor semper imperdiet cursus. Pulvinar scelerisque congue nisl enim integer. Sed quam sit purus vestibulum magna morbi massa..."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-10 md:py-[120px] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Title and CTA */}
          <div className="lg:col-span-4 space-y-6">
            <h1 className="text-[54px] font-semibold leading-[64px] tracking-tight text-black">
              Frequently Asked Questions
            </h1>

            <p className="text-sm font-medium leading-6 text-black max-w-[261px]">
              Get in touch with our team—we're here to help you make the most of Muni
            </p>

            <button className="inline-flex items-center justify-center px-4 py-2.5 bg-[#47816F] rounded-lg shadow-sm text-base font-semibold text-white hover:bg-[#3a6b5d] transition-colors">
              Get In Touch
            </button>
          </div>

          {/* Vertical Line */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="h-[538px] w-px bg-[#EBEBEB] mx-auto"></div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-7 space-y-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold leading-[30px] tracking-tight text-black">
                  {faq.question}
                </h3>

                <p className="text-xs font-medium leading-[18px] text-gray-900 opacity-70 max-w-[581px]">
                  {faq.answer}
                </p>

                <button className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-[#D5D7DA] rounded-lg shadow-sm text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  Read More
                </button>
              </div>
            ))}

            {/* Can't find section */}
            <div className="pt-12 space-y-6 text-center lg:text-left">
              <p className="text-sm font-medium leading-6 text-black">
                Can't find what you are looking for?
              </p>

              <button className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-[#D5D7DA] rounded-lg shadow-sm text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                View More FAQs
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

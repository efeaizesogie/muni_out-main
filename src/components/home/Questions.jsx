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
    <div id="faq" className="min-h-screen bg-[#f9f9f9] py-10 md:py-[120px] ">
      <div className="md:w-[80%] mx-[20px] md:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Title and CTA */}
          <div className=" px-9 md:px-0 mx-auto text-center md:text-start md:col-span-4 lg:col-span-3 space-y-4  md:space-y-6 ">

            <h1 className=" text-[34px] md:text-[54px] font-semibold md:leading-[64px] tracking-tight text-black">
              Frequently Asked Questions
            </h1>

            <p className="text-sm font-medium leading-6 text-black lg:max-w-[261px] px-[30px] md:px-0">
              Get in touch with our team—we're here to help you make the most of Muni
            </p>

            <button className="inline-flex items-center justify-center px-4 py-2.5 bg-[#47816F] rounded-lg shadow-sm text-base font-semibold text-white hover:bg-[#3a6b5d] transition-colors">
              Get In Touch
            </button>
          </div>

          {/* Vertical Line */}
          {/* <div className="hidden lg:block lg:col-span-1">
            <div className="h-[538px] w-px bg-[#EBEBEB] mx-auto"></div>
          </div> */}

          {/* Right Column - FAQ Items */}
          <div className="md-col-span-8 lg:col-span-9 space-y-6 md:space-y-12 border-t md:border-t-0 md:border-b-0 lg:border-l border-[#EBEBEB] lg:pl-16">
            <div className=" border-t border-b md:border-t-0 md:border-b-0 space-y-6 md:space-y-12 border-[#EBEBEB] py-11 md:py-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="flex flex-wrap justify-between items-start gap-4" // Removed space-y-4, used gap for flexibility
                >
                  {/* Text content */}
                  <div className="space-y-2 md:space-y-4 max-w-[581px]">
                    <h3 className="text-xl font-semibold leading-[30px] tracking-tight text-black">
                      {faq.question}
                    </h3>
                    <p className="text-xs font-medium leading-[18px] text-gray-900 opacity-70">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Button */}
                  <button className="self-start inline-flex items-center justify-center px-4 py-2.5 bg-white border border-[#D5D7DA] rounded-lg shadow-sm text-base font-semibold text-gray-700 hover:text-white hover:bg-[#2F443D] transition duration-300">
                    Read More
                  </button>
                </div>
              ))}
            </div>


            {/* Can't find section */}
            <div className="pt-5 md:pt-12 space-y-6 text-center lg:text-left mx-auto">
              <p className="text-sm font-medium leading-6 text-black">
                Can't find what you are looking for?
              </p>

              <button className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-[#D5D7DA] rounded-lg shadow-sm text-base font-semibold text-gray-700 hover:text-white hover:bg-[#2F443D] transition duration-300">
                View More FAQs
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



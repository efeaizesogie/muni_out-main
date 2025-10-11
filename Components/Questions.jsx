import Link from 'next/link'
import Question from './Question'

const Questions = () => {

  const questions = [
    {
      title: "How does muni work for you?",
      desc1: "muni uses the latest AI models to understand resident questions, search for relevant answers in your knowledge base, and provide accurate answers to residents based on the content in your knowledge base.",
      desc2: `Beyond answers to questions, it has been designed and developed to support the following services: \n
\u2022 Services requests - whether a resident wants to report a pothole, graffiti, fallen tree, or anything else of municipal concern, muni makes it easy to collect location information, photos, and other details to create service tickets for a quick resolution.
\u2022 Parking violation, municipal tax, and utility fee payments - muni makes it easy to search for and pay outstanding balances on parking violations, municipal taxes, and utility fees by credit card.
\u2022 Curbside collection reminders - residents will never have to miss another curbside collection date, or be uncertain about what bins are being picked up on any given date.
\u2022 Alerts and notifications - staff can send alerts and notifications, including push notifications, to all residents using the muni app. This enables rapid and clear communication as required.
\u2022 And much more - the beauty of a conversational interface is that it’s ~infinitely expandable and able to support many more services without overwhelming the interface or increasing the complexity of use. Email us at info@muni.com if you have any questions about a specific service.`
    },
    {
      title: "What do we need to onboard to muni?",
      desc1: "The onboarding process for a municipality takes four to six weeks, split across the following three phases.",
      desc2: `1. Systems integration - Our team works with your administrative staff, including any technical staff, to understand the various systems that are currently being used to support various functions–eg, service request ticket tracking, payment processing, etc.\n
We then perform all necessary integrations between those systems and our muni administrative dashboard.\n
2. Model training - Our team works with the your administrative staff to determine all sources of information and data upon which our AI model will be trained. These sources will act as the chatbot’s knowledge bases, and will be what the chatbot draws from for all answers it provides to resident questions.\n
Our team then does the work of making these sources legible to the chatbot through a combination of scraping and manual input.\n
3. Staff training - Our team will host training sessions with all relevant staff to ensure a full understanding of the muni platform, its capabilities and limitations. Staff will also be provided with full documentation during this phase.\n
At the completion of the onboarding process, our team will work with your staff to plan for and schedule the launch of your municipality’s muni mobile application in the Apple App Store and Google Play.`,
    },
    {
      title: "What is the ROI on a muni Chatbot?",
      desc1: "The return on investment (ROI) of a muni chatbot for non-emergency municipal services can be significant. Here are a few key points to consider when evaluating the ROI of such a solution:",
      desc2: `\u2022 Improved Efficiency: An AI-powered chatbot can handle a large volume of resident inquiries simultaneously, freeing up time for human operators and decreasing response times. This improved efficiency leads to cost savings by optimizing resource allocation and streamlining operations.
\u2022 Cost Reduction: By automating routine tasks and inquiries, municipalities can potentially reduce staffing costs associated with customer support or call centers. AI chatbots can handle common queries, provide instant responses, and free up human operators to focus on more complex or specialized requests.
\u2022 24/7 Availability: AI chatbots can operate round-the-clock, providing residents with access to information and services at any time. This availability enhances customer satisfaction by offering timely assistance and eliminates the need for extended human support shifts.
\u2022 Scalability: AI chatbots can handle a large number of conversations simultaneously, making them highly scalable. This scalability allows municipalities to efficiently manage increasing volumes of resident inquiries without requiring significant additional resources.
\u2022 Data Insights: AI chatbots can gather and analyze data on resident interactions, helping municipalities identify trends, common issues, and areas for improvement. These insights can inform decision-making processes, enable targeted service enhancements, and lead to long-term cost savings.`,
    }
  ]

  return (
    <div id="faq" className='flex flex-col items-center text-center w-full h-full bg-white md:pb-[150px] pb-[60px] md:pt-[125px]'>
      <p className='w-[80%] text-[#1B312A] md:text-[35px] text-[25px] font-semibold md:pb-[75px] pb-[25px]'>Frequently Asked Questions</p>
      <div className='lg:w-[60%] w-[80%] whitespace-break-spaces leading-6'>
        {questions.map((question, index) => (
          <Question
            key={index}
            title={question.title}
            desc1={question.desc1}
            desc2={question.desc2}
          />
        ))}
      </div>

      <div className="lg:w-[60%] w-[80%] flex flex-col pt-[24px] justify-center items-center">
        <hr className='border-[2px] border-[#EBEFE4] w-full' />
        <span className="font-semibold text-[#1B312A] text-[20px] pt-[59px] lg:pt-[75px] pb-[28px]">Can’t find what you are looking for?</span>
        <Link href="/faq" className="bg-[#1B312A] text-white rounded-full w-[160px] h-[39px] flex justify-center items-center text-[14px] font-semibold">View More FAQs</Link>
      </div>

    </div>
  )
}

export default Questions

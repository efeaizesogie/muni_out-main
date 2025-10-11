import Image from "next/image"

import icon2 from "../public/icons/Card1.svg"
import icon3 from "../public/icons/Card2.svg"
import icon4 from "../public/icons/Card3.svg"
import icon5 from "../public/icons/Card4.svg"
import icon6 from "../public/icons/Card5.svg"
import icon1 from "../public/icons/Card7.svg"
import icon8 from "../public/icons/Card8.svg"

import img2 from "../public/icons/Image1.png"
import img3 from "../public/icons/Image2.png"
import img4 from "../public/icons/Image3.png"
import img5 from "../public/icons/Image4.png"
import img6 from "../public/icons/Image5.png"
import img1 from "../public/icons/Image7.png"
// import img6 from "../public/icons/Image6.png"
// import img7 from "../public/icons/Image7.png"

const images = { img1, img2, img3, img4, img5, img6 };
const icons = { icon1, icon2, icon3, icon4, icon5, icon6, icon8 };

const imageStyles = {
    img1: { width: '90%', height: 'auto', marginBottom: '75px' },
    img2: { width: '90%', height: 'auto', marginBottom: '100px' },
    img3: { width: '90%', height: 'auto', marginBottom: '0' },
    img4: { width: '80%', height: 'auto', marginBottom: '-10%' },
    img5: { width: '80%', height: 'auto', marginBottom: '0' },
    img6: { width: '90%', height: 'auto', marginBottom: '-20%' },
};

const Features = () => {
    return (
        <div id="features" className='flex flex-col w-full h-full items-center pb-[85px] pt-[40px]'>
            <p className="md:text-[35px] text-[#1B312A] text-[24px] font-semibold pb-[20px]">Product Features</p>
            <p className="w-[90%] md:w-[625px] font-medium text-[14px] text-center pb-[50px]">We've covered all the basics for a truly magical customer service experience and are continuously adding to our feature set.</p>

            <div className="flex flex-wrap w-[90%] gap-x-[2%] gap-y-6 justify-center">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="flex flex-col min-w-[300px] min-h-[400px] w-full md:w-[48%] lg:w-[32%] aspect-square bg-[url('../public/bg/Card.svg')] bg-cover rounded-3xl text-white justify-end items-center relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src={images[`img${index}`]}
                                style={imageStyles[`img${index}`]}
                                alt={`Feature ${index}`}
                            />
                        </div>
                        <div className="min-h-[150px] w-full h-[33%] bg-[#12221D] rounded-b-3xl items-start relative z-10">
                            <Image src={icons[`icon${index}`]} className="2xl:w-[70px] w-[40px] mt-[-20px] 2xl:mt-[-35px] mx-[30px]" alt={`Icon ${index}`} />
                            <p className="font-semibold text-[16px] mt-[15px]  mx-[30px] 2xl:leading-auto leading-tight">{getFeatureTitle(index)}</p>
                            <p className="text-[14px] mt-[10px]  mb-[50px] mx-[30px]">{getFeatureDescription(index)}</p>
                        </div>
                    </div>
                ))}

                <div className="flex flex-col gap-10 items-center max-w-[280px] mt-[20px] w-full lg:max-w-full pt-16 border-t border-[#E6E6E6]">
                    <Image src={icons.icon8} className="rounded-full w-10 h-10" alt="More features icon" />
                    <p className="text-[#87938F] font-semibold text-lg text-center">Stay tuned for more innovative features coming soon to <span className="text-black">muni.</span></p>
                </div>
            </div>
        </div>
    )
}

const getFeatureTitle = (index) => {
    const titles = [
        "Resident Relationship Management",
        "Service Requests",
        "Notification",
        "Curbside Collection",
        "Payments",
        "Knowledge Base"
    ];
    return titles[index - 1];
}

const getFeatureDescription = (index) => {
    const descriptions = [
        "Muni’s CRM centralizes all resident interactions and data for streamlined service management.",
        "Handle any municipal inquiry quickly and accurately with our intuitive request management tools.",
        "Send targetted alerts, news, and service updates directly to residents via push notification, SMS or email.",
        "Share waste and recycling pickup schedules directly in the resident app for easy, anytime access.",
        "Enable residents to pay for taxes, utilities, permits, and more—securely and conveniently online.",
        "Dynamically train your AI with up to date municipal data to provide accurate, informative answers to resident questions."
    ];
    return descriptions[index - 1];
}

export default Features
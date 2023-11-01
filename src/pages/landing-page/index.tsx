import CoverSection from './sections/cover-section'
import WhyUsSection from './sections/why-us-section'
import OurServicesSection from './sections/our-services'
import ReadyToChatSection from './sections/ready-to-chat-section'

/**
 * @TODO Fix the side texts in the "Our services" section
 * @TODO Add animations
 */

const LandingPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px]">
      <CoverSection />
      <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
      <WhyUsSection />
      <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
      <OurServicesSection />
      <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
      <ReadyToChatSection />
      <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
    </div>
  )
}

export default LandingPage

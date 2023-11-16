import CoverSection from './sections/cover-section'
import WhyUsSection from './sections/why-us-section'
import OurServicesSection from './sections/our-services-section'
import ReadyToChatSection from './sections/ready-to-chat-section'
import InteractiveCursor from '../../components/interactive-cursor'

/**
 * @todo: Fix the bug that makes the last section's arrow shift away when there's text other than "Let's talk."
 */

const LandingPage = () => {
  return (
    <>
      <InteractiveCursor />

      <div className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px] transform-gpu">
        <CoverSection />
        <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
        <WhyUsSection />
        <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
        <OurServicesSection />
        <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
        <ReadyToChatSection />
        <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
      </div>
    </>
  )
}

export default LandingPage

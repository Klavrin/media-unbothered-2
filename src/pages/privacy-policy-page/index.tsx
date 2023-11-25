import IntroductionSection from './sections/introduction-section'
import InfoCollectionSection from './sections/info-collection-section'
import PersonalInfoDisclosureSection from './sections/personal-info-disclosure-section'
import MeasuresToTakeSection from './sections/measures-to-take-section'
import SaleOfInfoSection from './sections/sale-of-info-section'
import CookiesSection from './sections/cookies-section'
import ChildrenPrivacySection from './sections/children-privacy-section'
import RetentionOfInformationSection from './sections/retention-of-information-section'
import ThirdPartiesSection from './sections/third-parties-section'
import YourRightsSection from './sections/your-rights-section'
import ComplaintsSection from './sections/complaints-section'
import LocationOfDataProcessingSection from './sections/location-of-data-processing-section'
import ChangesToPrivacyPolicySection from './sections/changes-to-privacy-policy-section'
import InquiriesSection from './sections/inquiries-section'

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px] transform-gpu text-2xl">
      <IntroductionSection />
      <InfoCollectionSection />
      <PersonalInfoDisclosureSection />
      <MeasuresToTakeSection />
      <SaleOfInfoSection />
      <CookiesSection />
      <ChildrenPrivacySection />
      <RetentionOfInformationSection />
      <ThirdPartiesSection />
      <YourRightsSection />
      <ComplaintsSection />
      <LocationOfDataProcessingSection />
      <ChangesToPrivacyPolicySection />
      <InquiriesSection />
    </div>
  )
}

export default PrivacyPolicyPage

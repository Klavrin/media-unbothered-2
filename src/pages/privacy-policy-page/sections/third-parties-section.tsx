import { useTranslation } from 'react-i18next'

const ThirdPartiesSection = () => {
  const { t } = useTranslation()

  return (
    <section className="my-20">
      <h2 className="md:text-5xl text-3xl mb-4">{t('THIRD PARTIES:')}</h2>
      <p className="mb-4 md:text-2xl text-lg">
        {t(
          'We collaborate with external partners to edit, create, and maintain our services, ensuring the delivery of the requested and purchased services with efficiency and excellence.'
        )}
      </p>
      <p className="mb-4 md:text-2xl text-lg">
        {t(
          'External partners may be unfamiliar to us or you and are chosen based solely on their reputation on platforms like upwork.com or fiverr.com—sites with which we have no affiliation or support.'
        )}
      </p>
      <p className="mb-4 md:text-2xl text-lg">
        {t(
          'We want to make it clear that we are not affiliated with, nor responsible for, the privacy practices or content on external websites, such as upwork.com or fiverr.com. Users should review the privacy policies of any third-party sites they visit, as we do not have control over or assume any responsibility for their policies and practices.'
        )}
      </p>
      <p className="md:text-2xl text-lg">
        {t(
          'Mediaunbothered.tech may include hyperlinks to sites operated by entities other than us. These hyperlinks are provided for your reference only. We do not have control over these websites and are not accountable for their content or the privacy and other practices they employ. It is your responsibility to read and comprehend their Privacy Policies. The inclusion of hyperlinks to such websites does not indicate any endorsement of the material on those sites or any affiliation with their operators.'
        )}
      </p>
    </section>
  )
}

export default ThirdPartiesSection

import { useTranslation } from 'react-i18next'

const ChildrenPrivacySection = () => {
  const { t } = useTranslation()

  return (
    <section className="my-20">
      <h2 className="md:text-5xl text-3xl mb-4">{t('CHILDREN’S PRIVACY:')}</h2>
      <p className="md:text-2xl text-lg">
        {t(
          'This website/agency is designed for use by a broad audience and does not provide services to children. In the event that we become aware of a child under the age of 18 sending personal information to us, we will utilize that information solely to respond to the child and convey that they are not eligible to use services this website/agency provides. By consenting to our Privacy Policy, you affirm that you are 18 years of age or older.'
        )}
      </p>
    </section>
  )
}

export default ChildrenPrivacySection

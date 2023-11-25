import { useTranslation } from 'react-i18next'

const ChangesToPrivacyPolicySection = () => {
  const { t } = useTranslation()

  return (
    <section className="my-20">
      <h2 className="md:text-5xl text-3xl mb-4">{t('CHANGES TO THE PRIVACY POLICY')}:</h2>
      <p className="md:text-2xl text-lg">
        {t(
          'We retain the right to modify this Privacy Policy at any time. Notification of any changes to this Privacy Policy will be provided by posting the updated version on this website or through email.'
        )}
      </p>
    </section>
  )
}

export default ChangesToPrivacyPolicySection

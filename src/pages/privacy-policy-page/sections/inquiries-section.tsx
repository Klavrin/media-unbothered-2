import { useTranslation } from 'react-i18next'

const InquiriesSection = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h2 className="md:text-5xl text-3xl mb-4">{t('INQUIRIES')}:</h2>
      <p className="md:text-2xl text-lg">
        {t(
          'For any inquiries regarding this Privacy Policy, please feel free to reach out to us at inquiries@mediaunbothered.tech'
        )}
      </p>
    </section>
  )
}

export default InquiriesSection

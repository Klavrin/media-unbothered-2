import { useTranslation } from 'react-i18next'

const SaleOfInfoSection = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h2 className="md:text-5xl text-3xl mb-4">{t('SALE OF YOUR INFORMATION:')}</h2>
      <p className="md:text-2xl text-lg">
        {t(
          'We do not engage in the sale of your personal information. For details on exercising your privacy rights related to the sale of your personal information, please refer to the "Your Rights" section below.'
        )}
      </p>
    </section>
  )
}

export default SaleOfInfoSection

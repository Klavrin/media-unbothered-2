import { useTranslation } from 'react-i18next'

const LocationOfDataProcessingSection = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h2 className="md:text-5xl text-3xl mb-4">{t('LOCATION OF DATA PROCESSING')}:</h2>
      <p className="md:text-2xl text-lg">
        {t(
          'All data processing activities conducted by us occur within the Republic of Moldova.'
        )}
      </p>
    </section>
  )
}

export default LocationOfDataProcessingSection

import { useTranslation } from 'react-i18next'

const CookiesSection = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h2 className="md:text-5xl text-3xl mb-4">{t('COOKIES:')}</h2>
      <p className="md:text-2xl text-lg">
        {t(
          'A cookie is a small piece of data sent from a website and stored on your device by your browser. We refrain from the collection of cookies on mediaunbothered.tech, both internally and externally.'
        )}
      </p>
    </section>
  )
}

export default CookiesSection

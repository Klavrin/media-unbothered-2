import { useTranslation } from 'react-i18next'
import data from '../data/cookies-and-tracking.json'

const CookiesAndTracking = () => {
  const { t } = useTranslation()

  return (
    <section className="mt-20">
      <h2 className="text-4xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      {data.content.map((content, index) => (
        <p
          key={`description-${index}`}
          className={`md:text-2xl text-lg ${index === 0 && 'mb-4'}`}
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      ))}
    </section>
  )
}

export default CookiesAndTracking

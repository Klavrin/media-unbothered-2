import { useTranslation } from 'react-i18next'
import data from '../data/introduction-data.json'

const IntroductionSection = () => {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col justify-center pt-[120px]">
      <h1 className="md:text-6xl text-4xl text-center">{t(data.title)}</h1>
      <h4 className="text-xl mb-6">{t(data.updated)}</h4>
      {data.descriptions.map((desc, index) => (
        <p
          key={`description-${index}`}
          className={`md:text-2xl text-lg ${index === 0 && 'mb-4'}`}
        >
          {t(desc.text)}
        </p>
      ))}
    </section>
  )
}

export default IntroductionSection

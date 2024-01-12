import { useTranslation } from 'react-i18next'
import data from '../data/info-from-minors.json'

const InfoFromMinors = () => {
  const { t } = useTranslation()

  return (
    <section className="mt-20">
      <h2 className="text-4xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      {data.content.map((content, index) => (
        <p
          key={`info-${index}`}
          className={`md:text-2xl text-lg ${index !== data.content.length - 1 && 'mb-4'}`}
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      ))}
    </section>
  )
}

export default InfoFromMinors

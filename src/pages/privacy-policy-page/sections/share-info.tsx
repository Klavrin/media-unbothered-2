import { useTranslation } from 'react-i18next'
import data from '../data/share-info.json'

const ShareInfo = () => {
  const { t } = useTranslation()

  return (
    <section className="mt-20">
      <h2 className="text-4xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      {data.content.map((content, index) => (
        <p
          key={`privacy-${index}`}
          className="md:text-2xl text-lg mb-4"
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      ))}

      <ul>
        {data.situations.map((situation, index) => (
          <li
            key={`situation-${index}`}
            className={`md:text-2xl text-lg ${
              index !== data.situations.length - 1 && 'mb-4'
            }`}
            dangerouslySetInnerHTML={{ __html: t(situation) }}
          />
        ))}
      </ul>
    </section>
  )
}

export default ShareInfo

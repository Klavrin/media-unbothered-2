import { useTranslation } from 'react-i18next'
import data from '../data/your-rights.json'

const YourRightsSection = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h2 className="md:text-5xl text-3xl mb-4">{t(data.title)}</h2>
      <div className="flex flex-col gap-4">
        {data.rights.map((right) => (
          <div key={right.title}>
            <h3 className="font-semibold md:text-2xl text-lg">{t(right.title)}</h3>
            <p className="md:text-2xl text-lg">{t(right.description)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default YourRightsSection

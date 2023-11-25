import { useTranslation } from 'react-i18next'
import data from '../data/measures-to-take.json'

const MeasuresToTakeSection = () => {
  const { t } = useTranslation()

  return (
    <section className="my-20">
      <h2 className="md:text-5xl text-3xl mb-4">{t(data.title)}</h2>
      <p className="mb-4 md:text-2xl text-lg">{t(data.description)}</p>
      <ul>
        {data.measures.map((measure) => (
          <li key={measure} className="list-decimal ml-6 md:text-2xl text-xl">
            {t(measure)}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MeasuresToTakeSection

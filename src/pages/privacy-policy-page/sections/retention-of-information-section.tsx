import { useTranslation } from 'react-i18next'
import data from '../data/retention-of-information.json'

const RetentionOfInformationSection = () => {
  const { t } = useTranslation()

  return (
    <section>
      <h2 className="md:text-5xl text-3xl mb-4">{t(data.title)}</h2>
      <p className="mb-4 md:text-2xl text-lg">{t(data.description)}</p>

      <ol className="flex flex-col gap-4">
        {data.dataRetensions.map((retention, index) => (
          <div key={retention.title}>
            <h3 className="font-semibold md:text-2xl text-lg">
              {index + 1}. {t(retention.title)}:
            </h3>
            <p className="ml-10 md:text-2xl text-lg">
              {t(retention.dataRetentionPeriod)}
            </p>
          </div>
        ))}
      </ol>
    </section>
  )
}

export default RetentionOfInformationSection

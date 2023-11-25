import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import data from '../data/info-collection-data.json'

const InfoCollectionSection = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null)
  const { t } = useTranslation()

  return (
    <section className="my-20">
      <h2 className="md:text-5xl text-3xl mb-4">{t(data.title)}</h2>
      <p className="mb-4 md:text-2xl text-lg">{t(data.description)}</p>

      {data.collectedData.map((collData, index) => (
        <div
          key={collData.title}
          className="py-6 px-2 border cursor-pointer"
          onClick={() => setOpenedIndex(index)}
        >
          <h3 className={`md:text-3xl text-xl ${openedIndex === index && 'mb-4'}`}>
            {index + 1}. {data.collectedData[index].title}
          </h3>

          <div
            className="mb-4"
            style={{ display: openedIndex === index ? 'block' : 'none' }}
          >
            <div className="mb-2">
              <p className="font-bold md:text-2xl text-lg">
                {t('Specific Information:')}
              </p>
              <p className="ml-5 md:text-2xl text-lg">{t(collData.specificInfo)}</p>
            </div>
            <div className="mb-2">
              <p className="font-bold md:text-2xl text-lg">
                {t('Legal Basis for Processing:')}
              </p>
              <p className="ml-5 md:text-2xl text-lg">{t(collData.legalProcessing)}</p>
            </div>
            <div className="mb-2">
              <p className="font-bold md:text-2xl text-lg">
                {t('Where we get this information:')}
              </p>
              <p className="ml-5 md:text-2xl text-lg">{t(collData.whereWeGetInfo)}</p>
            </div>

            <div>
              <p className="font-bold md:text-2xl text-lg">
                {t('How We Utilize This Information:')}
              </p>
              <ul>
                {collData.howWeUtilizeInfo.map((info) => (
                  <li key={info} className="ml-5 list-disc md:text-2xl text-lg">
                    {t(info)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default InfoCollectionSection

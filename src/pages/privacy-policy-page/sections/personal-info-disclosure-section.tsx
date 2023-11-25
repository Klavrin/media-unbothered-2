import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import data from '../data/personal-info-disclosure.json'

const PersonalInfoDisclosureSection = () => {
  const [openedIndex, setOpenedIndex] = useState<null | number>(null)
  const { t } = useTranslation()

  return (
    <section>
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
                {t(
                  'Groups of third parties with whom personal information has been shared and disclosed:'
                )}
              </p>
              <ul>
                {collData.thirdParties.map((party) => (
                  <li key={party} className="ml-5 list-disc md:text-2xl text-lg">
                    {t(party)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-2">
              <p className="font-bold md:text-2xl text-lg">
                {t('Reason(s) for sharing and disclosing:')}
              </p>
              <ul>
                {collData.reasonsForSharing.map((reason) => (
                  <li key={reason} className="ml-5 list-disc md:text-2xl text-lg">
                    {t(reason)}
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

export default PersonalInfoDisclosureSection

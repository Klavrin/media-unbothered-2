import { useTranslation } from 'react-i18next'

const ComplaintsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="my-20">
      <h2 className="md:text-5xl text-3xl mb-4">{t('COMPLAINTS')}:</h2>
      <p className="mb-4 md:text-2xl text-lg">
        {t(
          'You retain the right to file a complaint about our collection, use, and sharing of your personal information by reaching out to us using the following contact information:'
        )}
      </p>

      <ul className="mb-4 md:text-2xl text-lg">
        <li className="list-disc ml-6 ">Sergiu Gherasim</li>
        <li className="list-disc ml-6">President</li>
        <li className="list-disc ml-6">sergiugherasim@mediaunbothered.tech</li>
      </ul>

      <p className="md:text-2xl text-lg">
        {t(
          'We promote collaboration and understanding. Any reasonable complaints will be promptly addressed and resolved by us. We embrace a friendly and cooperative approach, and in the event of a justified complaint, we are committed to issuing a refund and, on occasion, providing the product to the user without charge.'
        )}
      </p>
    </section>
  )
}

export default ComplaintsSection

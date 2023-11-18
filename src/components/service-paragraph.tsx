import useCursorSize from '../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

type ParagraphProps = {
  title: string
  paragraph: string | { par1: string; par2: string; par3: string }
}

const ServiceParagraph = ({ title, paragraph }: ParagraphProps) => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  const x = {
    par1: "Explore beyond the surface—what you've glimpsed so far is just the tip of the iceberg. For a deeper understanding and a wealth of information, delve into the",
    par2: 'Web Development Manual',
    par3: ". There's more awaiting your discovery!"
  }

  return (
    <div className="py-[57px]">
      <h2 className="text-white/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {t(title)}
      </h2>

      <p
        className="md:text-[35px] text-[25px] font-light leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {typeof paragraph === 'string' ? (
          t(paragraph)
        ) : (
          <>
            {t(paragraph.par1)}
            <span className="underline cursor-pointer">{t(x.par2)}</span>
            {t(paragraph.par3)}
          </>
        )}
      </p>
    </div>
  )
}

export default ServiceParagraph

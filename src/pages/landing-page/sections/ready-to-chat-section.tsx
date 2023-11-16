import CustomButton from '../../../components/custom-button'
import DashedButton from '../../../components/dashed-button'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

const ReadyToChatSection = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  return (
    <section className="md:py-[130px] py-[50px]">
      <h2 className="text-white/80 text-xl font-normal leading-normal mb-[37px]">
        {t('Ready to have a chat?')}
      </h2>

      <p
        className="md:text-[35px] text-[25px] font-normal leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {t(
          "Let's turn your digital aspirations into a strategic masterpiece. Whether it's crafting a stunning website or orchestrating ad campaigns that resonate, we're here to amplify your online success. Click, connect, conquer!"
        )}
      </p>

      <div className="flex justify-center md:gap-[46px] gap-[18px] mt-[66px]">
        <DashedButton innerText="About us" />
        <CustomButton
          innerText="Let's talk."
          styles="xl:px-[117px] md:px-[8.35vw] px-[53px] py-[10px] xl:text-[60px] text-[4.28vw]"
          imgStyles="xl:min-w-[70px] sm:min-w-[5vw] min-w-[30px]"
        />
        <DashedButton
          innerText="About us"
          // styles="md:-translate-x-0 -translate-x-[5vw]"
          // styles="-translate-x-[4.7vw]"
        />
      </div>
    </section>
  )
}

export default ReadyToChatSection

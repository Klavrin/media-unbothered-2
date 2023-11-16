import useCursorSize from '../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

type CustomButtonProps = {
  innerText: string
  styles?: string
  imgStyles?: string
  hideForWideScreens?: boolean
}

const CustomButton = ({
  innerText,
  styles,
  imgStyles,
  hideForWideScreens
}: CustomButtonProps) => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  return (
    <div className={`flex ${hideForWideScreens && 'md:hidden'}`}>
      <div className="flex items-center relative">
        <button
          className={`bg-white text-black rounded-[56px] whitespace-nowrap flex items-center ${styles}`}
          onMouseOver={() => setCursorSize(180)}
          onMouseLeave={() => setCursorSize(40)}
        >
          {t(innerText)}
        </button>

        <img
          src="./src/assets/custom-button-arrow.svg"
          className={`absolute 2xl:-right-7 right-[-2vw] pointer-events-none ${imgStyles}`}
        />
      </div>
    </div>
  )
}

export default CustomButton

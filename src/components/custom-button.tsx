import useCursorSize from '../lib/use-cursor-size'

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

  return (
    <div className={`flex items-center ${hideForWideScreens && 'md:hidden'}`}>
      <button
        className={`bg-white text-black rounded-[56px] whitespace-nowrap ${styles}`}
        onMouseOver={() => setCursorSize(180)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {innerText}
      </button>

      {!hideForWideScreens && (
        <img
          src="./src/assets/custom-button-arrow.svg"
          className={`relative right-6 pointer-events-none block md:hidden ${imgStyles}`}
        />
      )}
      <div
        className={
          !hideForWideScreens
            ? 'absolute xl:translate-x-[500px] translate-x-[35.71vw] md:block hidden'
            : ''
        }
      >
        <img
          src="./src/assets/custom-button-arrow.svg"
          className={`relative right-6 pointer-events-none ${imgStyles}`}
        />
      </div>
    </div>
  )
}

export default CustomButton

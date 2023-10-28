type CustomButtonProps = {
  innerText: string
  styles?: string
  imgSize?: number
}

const CustomButton = ({ innerText, styles, imgSize = 40 }: CustomButtonProps) => {
  return (
    <div className="md:hidden flex items-center mt-[25px]">
      <button className={`bg-white text-black rounded-[56px] ${styles}`}>
        {innerText}
      </button>
      <img
        src="./src/assets/custom-button-arrow.svg"
        className={`relative right-5 pointer-events-none w-[${imgSize}px] h-[${imgSize}px]`}
      />
    </div>
  )
}

export default CustomButton

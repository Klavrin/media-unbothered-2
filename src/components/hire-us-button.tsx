import useCursorSize from '../lib/use-cursor-size'
import GsapMagnetic from './gsap-magnetic'

const HireUsButton = () => {
  const { setCursorSize } = useCursorSize()

  return (
    <div className="w-full min-w-[150px] min-h-[150px] md:flex hidden justify-center items-center">
      <GsapMagnetic>
        <img
          src="./src/assets/hire-us-button.png"
          className="w-[150px] h-[150px] hover:rotate-180 transition-all duration-500 ease-in-out cursor-pointer"
          alt="Hire us"
          onMouseOver={() => setCursorSize(150)}
          onMouseLeave={() => setCursorSize(40)}
        />
        <img
          src="./src/assets/hire-us-arrow.svg"
          className="absolute pointer-events-none"
        />
      </GsapMagnetic>
    </div>
  )
}

export default HireUsButton

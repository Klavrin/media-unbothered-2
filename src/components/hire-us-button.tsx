// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'

const HireUsButton = () => {
  // const hireUsButtonRef = useRef<HTMLImageElement>(null)

  return (
    <div className="w-full min-w-[150px] min-h-[150px] md:flex hidden justify-center items-center">
      <img
        // ref={hireUsButtonRef}
        src="./src/assets/hire-us-button.png"
        className="w-[150px] h-[150px] hover:rotate-180 transition-all duration-500 ease-in-out cursor-pointer"
        alt="Hire us"
      />
      <img
        src="./src/assets/hire-us-arrow.svg"
        className="absolute pointer-events-none"
      />
    </div>
  )
}

export default HireUsButton

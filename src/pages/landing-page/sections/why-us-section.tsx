import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const WhyUsSection = () => {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.to('#span', {
        scrollTrigger: {
          trigger: '#span',
          scrub: true,
          start: 'bottom bottom',
          end: 'top +=300'
        },
        stagger: 1.5,
        opacity: 1
      })
    }, rootRef.current!)

    return () => context.revert()
  }, [])

  const spans = [{ innerText: '' }]

  return (
    <section ref={rootRef} className="leading-5 py-[110px]">
      <h2 className="text-white/80 text-xl font-normal leading-normal mb-[37px]">
        Why us
      </h2>

      <span
        id="span"
        className="text-white opacity-40 md:text-[35px] text-[25px] font-normal leading-[100%]"
      >
        At Media Unbothered, we redefine the narrative.{' '}
      </span>
      <span
        id="span"
        className="text-white opacity-40 md:text-[35px] text-[25px] font-normal leading-[100%]"
      >
        Choose us for campaigns that demand attention, where every pixel carries purpose.{' '}
      </span>
      <span
        id="span"
        className="text-white opacity-40 md:text-[35px] text-[25px] font-normal leading-[100%]"
      >
        Unleash the unbothered spirit—your journey to an unforgettable story starts here.
      </span>
    </section>
  )
}

export default WhyUsSection

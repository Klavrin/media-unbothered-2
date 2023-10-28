import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

  const spans = [
    { innerText: 'At Media Unbothered, we redefine the narrative.' },
    {
      innerText:
        'Choose us for campaigns that demand attention, where every pixel carries purpose.'
    },
    {
      innerText:
        'Unleash the unbothered spirit—your journey to an unforgettable story starts here.'
    }
  ]

  return (
    <section ref={rootRef} className="leading-5 md:py-[110px] py-[50px]">
      <h2 className="text-white/80 text-xl font-normal leading-normal mb-[37px]">
        Why us
      </h2>

      {spans.map((span) => (
        <span
          id="span"
          className="text-white opacity-40 md:text-[35px] text-[25px] font-normal leading-[100%]"
        >
          {span.innerText}{' '}
        </span>
      ))}
    </section>
  )
}

export default WhyUsSection

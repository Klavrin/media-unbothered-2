import { useRef, Fragment } from 'react'
// import gsap from 'gsap'

const OurServicesSection = () => {
  const rootRef = useRef(null)

  const services = [
    {
      title: 'Web development',
      sideText: 'Check it out!'
    },
    {
      title: 'Web design',
      sideText: 'Have a look!'
    },
    {
      title: 'Maintenance',
      sideText: 'Explore!'
    },
    {
      title: 'SEO',
      sideText: 'Peek in!'
    }
  ]

  return (
    <section ref={rootRef} className="md:py-[130px] py-[50px]">
      <h2 className="text-white/80 text-xl font-normal leading-normal mb-[21px]">
        Our services
      </h2>

      {services.map((service, index) => (
        <Fragment key={service.title}>
          <div
            id={`service-${index}`}
            className="group flex gap-4 cursor-pointer hover:text-black hover:bg-gradient-to-r from-white/60 via-white to-white/60 md:hover:pl-16 hover:pl-6 transition-all md:pt-4 pt-2"
          >
            <h1 className="xl:text-[100px] text-[7.14vw] leading-none py-4">
              {service.title}
            </h1>
            <p className="text-white/60 md:text-[20px] self-end text-[12px] font-normal underline md:mb-[2vw] mb-[3vw] group-hover:opacity-0">
              {service.sideText}
            </p>
          </div>
          {index !== services.length - 1 && (
            <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
          )}
        </Fragment>
      ))}
    </section>
  )
}

export default OurServicesSection

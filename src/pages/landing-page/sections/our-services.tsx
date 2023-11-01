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
          <div id="service" className="flex items-end gap-4 cursor-pointer">
            <h1 className={`xl:text-[100px] text-[7.14vw] leading-none py-4`}>
              {service.title}
            </h1>
            <p className="text-white/60 md:text-[20px] text-[12px] font-normal underline lg:mb-4">
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

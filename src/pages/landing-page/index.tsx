import CoverSection from './sections/cover-section'

const LandingPage = () => {
  return (
    <section className="bg-main bg-no-repeat bg-cover">
      <div className="max-w-[1200px] mx-auto text-white xl:px-[75px] px-[18px] transition-[padding] duration-500">
        <CoverSection />
      </div>
    </section>
  )
}

export default LandingPage

import HireUsButton from '../../../components/hire-us-button'

const CoverSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex flex-col ">
        <h1 className="xl:text-[4rem] text-[5vw] font-medium leading-normal">At</h1>
        <img
          src="./src/assets/media-unbothered.svg"
          alt="Media Unbothered"
          className="w-screen -z-50"
        />
        <h1 className="xl:text-[4rem] text-[5vw] font-medium leading-normal">
          we defy the odds.
        </h1>
      </div>

      <div className="flex">
        <p className="max-w-[756px] text-[30px] font-light leading-[30px] opacity-60 mt-[38px]">
          Welcome to Media Unbothered, where digital dreams become reality. We're not just
          another agency—we're the architects of exceptional web development and the
          maestros of Facebook, Instagram, and Google ads. Unleash the power of your
          online presence with us. Stay ahead, stay unbothered.
        </p>

        <HireUsButton />
      </div>
    </div>
  )
}

export default CoverSection

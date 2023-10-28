import CustomButton from '../../../components/custom-button'
import HireUsButton from '../../../components/hire-us-button'

const CoverSection = () => {
  return (
    <section className="xl:h-screen h-full pb-[50px] pt-[120px] flex flex-col justify-center">
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

      <div className="flex-inline md:flex md:flex-row flex-col md:mt-[38px] mt-[18px]">
        <p className="max-w-2/3 md:text-[30px] text-[20px] font-light leading-[100%] opacity-60">
          Welcome to Media Unbothered, where digital dreams become reality. We're not just
          another agency—we're the architects of exceptional web development and the
          maestros of Facebook, Instagram, and Google ads. Unleash the power of your
          online presence with us. Stay ahead, stay unbothered.
        </p>

        <HireUsButton />
        <CustomButton
          innerText="Hire us"
          styles="text-[20px] px-[50px] py-[11px]"
          imgSize={40}
        />
      </div>
    </section>
  )
}

export default CoverSection

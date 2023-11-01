import { Link } from 'react-router-dom'

const Footer = () => {
  const links = [
    { title: 'HOME', to: '/' },
    { title: 'ABOUT US', to: '/' },
    { title: 'PRICACY POLICY', to: '/' },
    { title: 'USAGE MANUAL', to: '/' }
  ]

  const socials = [
    { alt: 'Facebook', imageSrc: './src/assets/footer/Facebook.svg', to: '/' },
    { alt: 'Instagram', imageSrc: './src/assets/footer/Instagram.svg', to: '/' },
    { alt: 'X', imageSrc: './src/assets/footer/X.svg', to: '/' },
    { alt: 'LinkedIn', imageSrc: './src/assets/footer/LinkedIn.svg', to: '/' }
  ]

  return (
    <footer className="max-w-[1400px] mx-auto xl:px-[75px] px-[18px] pt-10 pb-4 text-white">
      <img
        src="./src/assets/media-unbothered.svg"
        alt="Media Unbothered"
        className="w-screen -z-50"
      />

      <div className="mt-[50px] flex md:flex-row flex-col justify-between items-center max-[500px]:gap-[10px] gap-[0px]">
        <nav className="flex max-[500px]:flex-col flex-row lg:gap-[50px] gap-[20px] text-center">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              className="text-[15px] hover:opacity-70 transition-all"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex gap-[50px]">
          {socials.map((social) => (
            <Link
              to={social.to}
              key={social.alt}
              className="w-[25px] h-[25px] hover:opacity-70 transition-all"
            >
              <img src={social.imageSrc} alt={social.alt} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

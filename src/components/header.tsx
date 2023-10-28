import { Link } from 'react-router-dom'
import HamburgerMenu from './hamburger-menu'

const Header = () => {
  const links = [
    { title: 'About us', to: '/' },
    { title: 'Services', to: '/' },
    { title: 'Contact', to: '/' }
  ]

  return (
    <header className="w-screen absolute">
      <div className="max-w-[1400px] h-[75px] mx-auto xl:px-[75px] px-[18px] text-white flex justify-between items-center transition-[padding] duration-500">
        <div className="sm:static absolute left-0 sm:w-auto w-screen text-center">
          <Link
            to="/"
            className="text-white/60 hover:text-white text-[50px] font-humane font-bold leading-normal tracking-normal hover:tracking-wider transition-[letter-spacing]"
          >
            MEDIA UNBOTHERED
          </Link>
        </div>

        <HamburgerMenu />
        <nav className="sm:flex hidden gap-[15px] items-center text-[15px]">
          {links.map((link, index) => (
            // Warning: Each child in a list should have a unique "key" prop.
            <>
              <Link to={link.to} className="hover:opacity-70 transition-all">
                {link.title}
              </Link>
              {index !== links.length - 1 && (
                <img src="./src/assets/ellipse.svg" alt="" className="-z-50" />
              )}
            </>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

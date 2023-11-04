import { Fragment, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import useCursorSize from '../lib/use-cursor-size'
import HamburgerMenu from './hamburger-menu'
import MobileDrawer from './mobile-drawer'

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const drawerRef = useRef(null)
  const { setCursorSize } = useCursorSize()

  const links = [
    { title: 'About us', to: '/' },
    { title: 'Services', to: '/' },
    { title: 'Contact', to: '/' }
  ]

  return (
    <header className="w-screen absolute z-50">
      <div className="max-w-[1400px] h-[75px] mx-auto xl:px-[75px] px-[18px] text-white flex justify-between items-center transition-[padding] duration-500">
        <div className="sm:static absolute left-0 sm:w-auto w-screen text-center">
          <Link
            to="/"
            className="text-white/60 hover:text-white text-[50px] font-humane font-bold leading-normal tracking-normal hover:tracking-wider transition-[letter-spacing]"
            onMouseOver={() => setCursorSize(100)}
            onMouseLeave={() => setCursorSize(40)}
          >
            MEDIA UNBOTHERED
          </Link>
        </div>

        <MobileDrawer
          links={links}
          drawerOpened={drawerOpened}
          closeDrawer={() => setDrawerOpened(false)}
          drawerRef={drawerRef}
        />
        <HamburgerMenu drawerRef={drawerRef} openDrawer={() => setDrawerOpened(true)} />
        <nav className="sm:flex hidden gap-[15px] items-center text-[15px]">
          {links.map((link, index) => (
            <Fragment key={link.title}>
              <Link
                to={link.to}
                className="hover:opacity-70 transition-all"
                onMouseOver={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
              >
                {link.title}
              </Link>
              {index !== links.length - 1 && (
                <img src="./src/assets/ellipse.svg" alt="" className="-z-50" />
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

type MobileDrawerProps = {
  links: { title: string; to: string }[]
  drawerOpened: boolean
  closeDrawer: () => void
  drawerRef: React.RefObject<HTMLDivElement>
}

const MobileDrawer = ({
  links,
  drawerOpened,
  closeDrawer,
  drawerRef
}: MobileDrawerProps) => {
  useEffect(() => {
    const handleResize = () => {
      if (drawerOpened && window.innerWidth < 640) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
    window.addEventListener('resize', handleResize)

    if (drawerOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = 'auto'
    }
  }, [drawerOpened])

  const closeDrawerWithAnimation = async () => {
    await gsap.to(drawerRef.current, {
      y: -window.innerHeight,
      ease: 'expo.inOut',
      duration: 1
    })
    closeDrawer()
  }

  return (
    <div
      ref={drawerRef}
      className={`w-screen h-screen bg-black text-white text-center flex sm:hidden flex-col fixed right-0 top-0 z-40`}
      style={{ transform: `translateY(-${window.innerHeight + 20}px)` }}
    >
      <img
        src="./src/assets/mobile-drawer-close.svg"
        onClick={closeDrawerWithAnimation}
        className="w-[30px] self-end mt-6 mr-4 cursor-pointer"
      />

      <div className="h-full flex flex-col justify-center gap-4">
        {links.map((link) => (
          <Link
            to="/"
            key={link.title}
            className="text-6xl font-semibold opacity-80 hover:opacity-100 transition-all"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileDrawer

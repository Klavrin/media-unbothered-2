import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import gsap from 'gsap'

type CursorState = {
  cursor: {
    size: number
  }
}

const InteractiveCursorGSAP = () => {
  const cursorSize = useSelector((state: CursorState) => state.cursor.size)
  const ref = useRef(null)

  useEffect(() => {}, [])

  useEffect(() => {
    const handleMouseMovement = (e: MouseEvent) => {
      if (window.innerWidth >= 1280) {
        gsap.to(ref.current, {
          translateX: e.clientX - cursorSize / 2,
          translateY: e.clientY - cursorSize / 2,
          duration: 0.05
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMovement)

    return () => window.removeEventListener('mousemove', handleMouseMovement)
  }, [cursorSize])

  return (
    <div
      ref={ref}
      className="rounded-full bg-white fixed z-50 pointer-events-none transition-all duration-[0.05] ease-out mix-blend-difference xl:block hidden opacity-90 transform-gpu"
      style={{
        width: cursorSize,
        height: cursorSize
      }}
    ></div>
  )
}

export default InteractiveCursorGSAP

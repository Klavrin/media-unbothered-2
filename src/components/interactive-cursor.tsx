import { useEffect, useState } from 'react'

const InteractiveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    })

    // add a cleanup function
  }, [])

  return (
    <div
      className="w-[40px] h-[40px] border border-white rounded-full absolute z-50 pointer-events-none"
      style={{ transform: `translate(${position.x - 20}px, ${position.y - 20}px)` }}
    ></div>
  )
}

export default InteractiveCursor

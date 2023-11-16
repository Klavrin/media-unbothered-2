import { useDispatch } from 'react-redux'
import { setSize } from '../store/reducers/cursor-slice'

const useCursorSize = () => {
  const dispatch = useDispatch()

  const setCursorSize = (size: number) => {
    window.innerWidth >= 1280 && dispatch(setSize(size))
  }

  return { setCursorSize }
}

export default useCursorSize

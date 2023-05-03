import { useEffect, useRef, useState } from 'react'

export const useClickOutside = (isInitialValue) => {
	const [isShow, setIsShow] = useState(isInitialValue)
	const ref = useRef(null)

	const handleCLickOutside = (event) => {
	  if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleCLickOutside, true)
		return() => {
			document.removeEventListener('click', handleCLickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}



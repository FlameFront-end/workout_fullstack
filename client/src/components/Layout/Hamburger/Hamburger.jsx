import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'

import { useClickOutside } from '../../../hooks/useClickOutside.js'

import s from './Hamburger.module.scss'
import Menu from './Menu.jsx'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useClickOutside(false)

	return (
		<div className={s.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger

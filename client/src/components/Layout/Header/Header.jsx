import { IoMdArrowBack } from 'react-icons/io'

import { useAuth } from '../../../hooks/useAuth.js'

import Hamburger from '../Hamburger/Hamburger.jsx'

import s from './Header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<header className={s.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack fill="white" fontSize={29} />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header

import { AiOutlineUser } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'

import Hamburger from '../Hamburger/Hamburger.jsx'

import s from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={s.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<IoMdArrowBack fill="white" fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<AiOutlineUser fill="white" fontSize={27} />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header

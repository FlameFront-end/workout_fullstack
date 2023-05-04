import { useNavigate } from 'react-router-dom'

import MyButton from '../../UI/Button/MyButton.jsx'

import { useAuth } from '../../../hooks/useAuth.js'

import Layout from '../../Layout/Layout.jsx'

import s from './Home.module.scss'

const Home = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage="/images/home-bg.jpg">
			<MyButton
				clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}
			>
				{isAuth ? 'New' : 'Sign In'}
			</MyButton>
			<h1 className={s.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/*Counters*/}
		</Layout>
	)
}

export default Home

import Auth from '../components/screens/Auth/Auth.jsx'
import Home from '../components/screens/Home/Home.jsx'
import NewWorkout from '../components/screens/NewWorkout/NewWorkout.jsx'
import Profile from '../components/screens/Profile/Profile.jsx'

export const routes = [
	{
		path: '/', //путь
		component: Home, //что отрисовать
		isAuth: false //требование авторизации
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/Profile',
		component: Profile,
		isAuth: false
	}
]

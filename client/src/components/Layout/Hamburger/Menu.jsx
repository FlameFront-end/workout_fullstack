import s from './Hamburger.module.scss'
import { menu } from './menu.data.js'
import cn from 'clsx'

const Menu = ({ isShow }) => {
	const logoutHandler = () => {}
	
	return (
		<nav className={cn(s.menu, { [s.show] : isShow })}>
			<ul>
				{menu.map((item, index) => {
					<li key={`_menu_${index}`}>
						{item.title}
						{/*<Link to={item.link}>{item.title}</Link>*/}
					</li>
				})}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu

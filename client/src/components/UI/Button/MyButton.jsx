import cn from 'clsx'

import s from './MyButton.module.scss'

const MyButton = ({ children, clickHandler, size = 'xl' }) => {
	return (
		<div className={s.wrapper}>
			<button className={cn(s.button, s[size])} onClick={clickHandler}>
				{children}
			</button>
		</div>
	)
}

export default MyButton

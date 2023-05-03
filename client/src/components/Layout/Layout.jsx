import cn from 'clsx'

import Header from './Header/Header.jsx'
import s from './Layout.module.scss'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<section
			className={cn(s.wrapper, {
				[s.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />
			{heading && <h1 className={s.heading}>{heading}</h1>}
			{/*если есть heading, то выводим*/}
			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout

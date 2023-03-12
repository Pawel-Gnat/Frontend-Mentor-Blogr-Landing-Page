import '../styles/footer.scss'
import '../styles/links.scss'
import Logo from './Logo'
import { routes } from '../routes'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__content wrapper'>
				<Logo />

				{routes.map((menu, index) => {
					return (
						<div
							className='footer__column'
							key={index}>
							<p className='nav-heading'>{menu.title}</p>
							{menu.submenu.map((submenu, index) => {
								return (
									<a
										key={index}
										href={submenu.url}
										className='link underline'>
										{submenu.title}
									</a>
								)
							})}
						</div>
					)
				})}
			</div>
		</footer>
	)
}

export default Footer

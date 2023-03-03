import '../styles/footer.scss'
import '../styles/links.scss'
import Logo from './Logo'

type Props = {}

const Footer = () => {
	return (
		<footer className='footer'>
			<Logo />
			<div className='footer__column'>
				<p className='nav-heading'>Product</p>
				<a
					href='./'
					className='link'>
					Overview
				</a>
				<a
					href='./'
					className='link'>
					Pricing
				</a>
				<a
					href='./'
					className='link'>
					Marketplace
				</a>
				<a
					href='./'
					className='link'>
					Features
				</a>
				<a
					href='./'
					className='link'>
					Integrations
				</a>
			</div>{' '}
			<div className='footer__column'>
				<p className='nav-heading'>Company</p>
				<a
					href='./'
					className='link'>
					About
				</a>
				<a
					href='./'
					className='link'>
					Team
				</a>
				<a
					href='./'
					className='link'>
					Blog
				</a>
				<a
					href='./'
					className='link'>
					Careets
				</a>
			</div>{' '}
			<div className='footer__column'>
				<p className='nav-heading'>Connect</p>
				<a
					href='./'
					className='link'>
					Contact
				</a>
				<a
					href='./'
					className='link'>
					Newsletter
				</a>
				<a
					href='./'
					className='link'>
					LinkedIn
				</a>
			</div>
		</footer>
	)
}

export default Footer

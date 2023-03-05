import '../styles/header.scss'
import Logo from './Logo'
import HamburgerButton from './HamburgerButton'
import Navbar from './Navbar'
import Anchor from './Anchor'
import { useEffect, useState } from 'react'

const getIsDesktop = () => window.innerWidth >= 768

const Header = () => {
	const [isDesktop, setIsDesktop] = useState(getIsDesktop)

	useEffect(() => {
		const onResize = () => {
			setIsDesktop(getIsDesktop())
		}

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [])

	return (
		<header className='header wrapper'>
			<Logo />
			<nav>
				{isDesktop ? (
					<>
						<Navbar />
						<Anchor
							type='btn--login'
							text='Login'
						/>
						<Anchor
							type='btn--signup'
							text='Sign Up'
						/>
					</>
				) : (
					<HamburgerButton />
				)}
			</nav>
		</header>
	)
}

export default Header

import '../styles/header.scss'
import Logo from './Logo'
import HamburgerButton from './HamburgerButton'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'

const Header = () => {
	const getIsDesktop = () => window.innerWidth >= 992

	const [isDesktop, setIsDesktop] = useState(getIsDesktop)
	const [isNavOpen, setIsNavOpen] = useState(false)

	useEffect(() => {
		const onResize = () => {
			setIsDesktop(getIsDesktop())
		}
		setIsNavOpen(false)

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [isDesktop])

	useEffect(() => {
		isNavOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
	}, [isNavOpen])

	function getMobileNavigation() {
		setIsNavOpen(prev => !prev)
	}

	return (
		<header className='header wrapper'>
			<Logo />
			<nav>
				<Navbar
					isNavOpen={isNavOpen}
					closeNav={getMobileNavigation}
				/>
				{!isDesktop && (
					<HamburgerButton
						onClick={getMobileNavigation}
						setIcon={isNavOpen}
					/>
				)}
			</nav>
		</header>
	)
}

export default Header

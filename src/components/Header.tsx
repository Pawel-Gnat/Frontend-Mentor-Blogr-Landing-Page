import '../styles/header.scss'
import Logo from './Logo'
import HamburgerButton from './HamburgerButton'
import Navbar from './Navbar'
import { useContext, useEffect, useState } from 'react'
import { NavContext } from '../context/nav-context'

const Header = () => {
	const getIsDesktop = () => window.innerWidth >= 992
	const [isDesktop, setIsDesktop] = useState(getIsDesktop)
	const ctxNav = useContext(NavContext)

	useEffect(() => {
		const onResize = () => {
			setIsDesktop(getIsDesktop())
		}
		ctxNav.setIsNavOpen(false)

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [isDesktop])

	useEffect(() => {
		ctxNav.isNavOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
	}, [ctxNav.isNavOpen])

	return (
		<header className='header wrapper'>
			<Logo />
			<nav>
				<Navbar />
				{!isDesktop && <HamburgerButton />}
			</nav>
		</header>
	)
}

export default Header

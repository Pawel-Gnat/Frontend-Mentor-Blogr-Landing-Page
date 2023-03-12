import '../styles/hamburger.scss'
import iconHamburger from '../images/icon-hamburger.svg'
import iconClose from '../images/icon-close.svg'
import { useContext } from 'react'
import { NavContext } from '../context/nav-context'

const HamburgerButton = () => {
	const ctxNav = useContext(NavContext)

	function handleMobileNavigation() {
		ctxNav.setIsNavOpen(prev => !prev)
	}

	return (
		<button
			className='btn-hamburger'
			type='button'
			onClick={handleMobileNavigation}>
			<img
				src={ctxNav.isNavOpen ? iconClose : iconHamburger}
				alt=''
			/>
		</button>
	)
}

export default HamburgerButton

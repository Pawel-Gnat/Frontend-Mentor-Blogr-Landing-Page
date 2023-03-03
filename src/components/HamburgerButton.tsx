import '../styles/hamburger.scss'
import iconHamburger from '../images/icon-hamburger.svg'
import iconClose from '../images/icon-close.svg'
import { useState } from 'react'

const HamburgerButton = () => {
	const [navOpen, setNavOpen] = useState(false)

	function handleMobileNavigation() {
		setNavOpen(prev => !prev)
	}

	return (
		<button
			className='btn-hamburger'
			type='button'
			onClick={handleMobileNavigation}>
			<img
				className='btn-hamburger'
				src={navOpen ? iconClose : iconHamburger}
				alt=''
			/>
		</button>
	)
}

export default HamburgerButton

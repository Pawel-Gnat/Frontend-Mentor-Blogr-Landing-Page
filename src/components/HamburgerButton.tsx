import '../styles/hamburger.scss'
import iconHamburger from '../images/icon-hamburger.svg'
import iconClose from '../images/icon-close.svg'
import { useState } from 'react'

type ButtonProps = {
	onClick: () => void
}

const HamburgerButton = (props: ButtonProps) => {
	const [navOpen, setNavOpen] = useState(false)

	function handleMobileNavigation() {
		setNavOpen(prev => !prev)
		props.onClick()
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

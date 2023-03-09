import '../styles/hamburger.scss'
import iconHamburger from '../images/icon-hamburger.svg'
import iconClose from '../images/icon-close.svg'
import { useContext } from 'react'
import NavContext from '../context/nav-context'

type ButtonProps = {
	onClick: () => void
}

const HamburgerButton = (props: ButtonProps) => {
	const ctx = useContext(NavContext)

	function handleMobileNavigation() {
		props.onClick()
	}

	return (
		<button
			className='btn-hamburger'
			type='button'
			onClick={handleMobileNavigation}>
			<img
				src={ctx.isNavOpen ? iconClose : iconHamburger}
				alt=''
			/>
		</button>
	)
}

export default HamburgerButton

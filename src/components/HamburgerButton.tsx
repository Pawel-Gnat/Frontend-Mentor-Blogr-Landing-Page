import '../styles/hamburger.scss'
import iconHamburger from '../images/icon-hamburger.svg'
import iconClose from '../images/icon-close.svg'

type ButtonProps = {
	onClick: () => void
	setIcon: boolean
}

const HamburgerButton = (props: ButtonProps) => {
	function handleMobileNavigation() {
		props.onClick()
	}

	return (
		<button
			className='btn-hamburger'
			type='button'
			onClick={handleMobileNavigation}>
			<img
				src={props.setIcon ? iconClose : iconHamburger}
				alt=''
			/>
		</button>
	)
}

export default HamburgerButton

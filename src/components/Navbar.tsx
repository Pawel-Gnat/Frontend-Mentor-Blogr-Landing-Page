import { menuItems } from '../menuItems'
import MenuItems from './MenuItems'
import Anchor from './Anchor'
import '../styles/navbar.scss'

type NavbarProps = {
	isNavOpen: boolean
	// closeMobileNavigation: () => void
}

const Navbar = (props: NavbarProps) => {
	return (
		<div className={`navbar ${props.isNavOpen ? ' active' : ''}`}>
			<ul className='navbar__ul-list'>
				{menuItems.map((menu, index) => {
					return (
						<MenuItems
							items={menu}
							key={index}
						/>
					)
				})}
			</ul>
			<Anchor
				type='btn--login'
				text='Login'
			/>
			<Anchor
				type='btn--signup'
				text='Sign Up'
			/>
		</div>
	)
}

export default Navbar

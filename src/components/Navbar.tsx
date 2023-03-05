import { menuItems } from '../menuItems'
import MenuItems from './MenuItems'
import '../styles/navbar.scss'

const Navbar = () => {
	return (
		<ul className='navbar'>
			{menuItems.map((menu, index) => {
				return (
					<MenuItems
						items={menu}
						key={index}
					/>
				)
			})}
		</ul>
	)
}

export default Navbar

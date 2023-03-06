import arrowIconLight from '../images/icon-arrow-light.svg'
import arrowIconDark from '../images/icon-arrow-dark.svg'
import '../styles/menuItems.scss'

type Props = {
	items: { title: string; submenu: { title: string; url: string }[] }
	key: number
}

const MenuItems = (props: Props) => {
	return (
		<li className='menu-items'>
			<button type='button'>
				<p className='menu-items__text'>{props.items.title}</p>
				<img
					src={arrowIconLight}
					className='light-icon'
					alt=''
					aria-hidden='true'></img>
				<img
					src={arrowIconDark}
					className='dark-icon'
					alt=''
					aria-hidden='true'></img>
			</button>
		</li>
	)
}

export default MenuItems

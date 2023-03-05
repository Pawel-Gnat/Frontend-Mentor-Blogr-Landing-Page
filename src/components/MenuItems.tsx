import arrowIconLight from '../images/icon-arrow-light.svg'
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
					alt=''
					aria-hidden='true'></img>
			</button>
		</li>
	)
}

export default MenuItems

import arrowIconLight from '../images/icon-arrow-light.svg'
import arrowIconDark from '../images/icon-arrow-dark.svg'
import Dropdown from './Dropdown'
import '../styles/menuItems.scss'
import '../styles/links.scss'
import { useEffect, useRef, useState } from 'react'

type Props = {
	items: { title: string; submenu: { title: string; url: string }[] }
	key: number
}

const MenuItems = (props: Props) => {
	const [dropdown, setDropdown] = useState(false)

	const menuItemRef = useRef<HTMLLIElement>(null)

	useEffect(() => {
		const handler = (e: MouseEvent | TouchEvent) => {
			if (dropdown && menuItemRef.current && !(menuItemRef.current as HTMLElement).contains(e.target as Node)) {
				setTimeout(() => {
					setDropdown(false)
				}, 100)
			}
		}

		document.addEventListener('mousedown', handler)
		document.addEventListener('touchstart', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
			document.removeEventListener('touchstart', handler)
		}
	}, [dropdown])

	const onMouseEnter = () => {
		window.innerWidth > 992 && setDropdown(true)
	}

	const onMouseLeave = () => {
		window.innerWidth > 992 && setDropdown(false)
	}

	function expandLink() {
		setDropdown(prev => !prev)
	}

	return (
		<li
			className='menu-items'
			ref={menuItemRef}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}>
			<button
				type='button'
				aria-expanded={dropdown ? true : false}
				className={`${dropdown ? 'rotate' : ''}`}
				onClick={expandLink}>
				<p className='menu-items__text underline'>{props.items.title}</p>
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
			<Dropdown
				dropdown={dropdown}
				submenus={props.items.submenu}
			/>
		</li>
	)
}

export default MenuItems

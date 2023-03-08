import { menuItems } from '../menuItems'
import MenuItems from './MenuItems'
import Anchor from './Anchor'
import '../styles/navbar.scss'
import { useEffect, useRef } from 'react'

type NavbarProps = {
	isNavOpen: boolean
	closeNav: () => void
}

const Navbar = (props: NavbarProps) => {
	const navbarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handler = (e: MouseEvent | TouchEvent) => {
			if (props.isNavOpen && navbarRef.current && !(navbarRef.current as HTMLElement).contains(e.target as Node)) {
				props.closeNav()
			}
		}

		document.addEventListener('mousedown', handler)
		document.addEventListener('touchstart', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
			document.removeEventListener('touchstart', handler)
		}
	}, [props.isNavOpen])

	return (
		<div
			className={`navbar ${props.isNavOpen ? ' active' : ''}`}
			ref={navbarRef}>
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

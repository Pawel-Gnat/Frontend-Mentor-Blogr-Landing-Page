import { menuItems } from '../menuItems'
import MenuItems from './MenuItems'
import Anchor from './Anchor'
import '../styles/navbar.scss'
import { useContext, useEffect, useRef } from 'react'
import NavContext from '../context/nav-context'

type NavbarProps = {
	onClickOutside: () => void
}

const Navbar = (props: NavbarProps) => {
	const navbarRef = useRef<HTMLDivElement>(null)
	const ctx = useContext(NavContext)

	useEffect(() => {
		const handler = (e: MouseEvent | TouchEvent) => {
			if (ctx.isNavOpen && navbarRef.current && !(navbarRef.current as HTMLElement).contains(e.target as Node)) {
				props.onClickOutside()
			}
		}

		document.addEventListener('mousedown', handler)
		document.addEventListener('touchstart', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
			document.removeEventListener('touchstart', handler)
		}
	}, [ctx.isNavOpen])

	return (
		<div
			className={`navbar ${ctx.isNavOpen ? ' active' : ''}`}
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

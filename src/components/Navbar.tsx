import MenuItems from './MenuItems'
import Anchor from './Anchor'
import '../styles/navbar.scss'
import { useContext, useEffect, useRef } from 'react'
import { NavContext } from '../context/nav-context'
import { routes } from '../routes'

const Navbar = () => {
	const navbarRef = useRef<HTMLDivElement>(null)
	const ctxNav = useContext(NavContext)

	useEffect(() => {
		const handler = (e: MouseEvent | TouchEvent) => {
			if (
				ctxNav.isNavOpen &&
				navbarRef.current &&
				!(e.target as HTMLElement).matches('button') &&
				!(navbarRef.current as HTMLElement).contains(e.target as Node)
			) {
				ctxNav.setIsNavOpen(prev => !ctxNav.isNavOpen)
			}
		}

		document.addEventListener('mousedown', handler)
		document.addEventListener('touchstart', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
			document.removeEventListener('touchstart', handler)
		}
	}, [ctxNav.isNavOpen])

	return (
		<div
			className={`navbar ${ctxNav.isNavOpen ? ' active' : ''}`}
			ref={navbarRef}>
			<ul className='navbar__ul-list'>
				{routes.map((route, index) => {
					return (
						<MenuItems
							items={route}
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

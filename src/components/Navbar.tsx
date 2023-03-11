import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
import Anchor from './Anchor';
import '../styles/navbar.scss';
import { useContext, useEffect, useRef } from 'react';
import { NavContext } from '../context/nav-context';

const Navbar = () => {
	const navbarRef = useRef<HTMLDivElement>(null);
	const ctxNav = useContext(NavContext);

	useEffect(() => {
		const handler = (e: MouseEvent | TouchEvent) => {
			const target = e.target as HTMLElement;
			console.log(target);

			if (
				ctxNav.isNavOpen &&
				navbarRef.current &&
				!target.matches('button.btn-hamburger') &&
				!(navbarRef.current as HTMLElement).contains(e.target as Node)
			) {
				ctxNav.setIsNavOpen((prev) => !prev);
			}
		};

		document.addEventListener('mousedown', handler);
		document.addEventListener('touchstart', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
			document.removeEventListener('touchstart', handler);
		};
	}, [ctxNav.isNavOpen]);

	return (
		<div
			className={`navbar ${ctxNav.isNavOpen ? ' active' : ''}`}
			ref={navbarRef}
		>
			<ul className='navbar__ul-list'>
				{menuItems.map((menu, index) => {
					return <MenuItems items={menu} key={index} />;
				})}
			</ul>
			<Anchor type='btn--login' text='Login' />
			<Anchor type='btn--signup' text='Sign Up' />
		</div>
	);
};

export default Navbar;

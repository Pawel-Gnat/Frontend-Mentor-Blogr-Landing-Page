import '../styles/dropdown.scss'

type Props = {
	submenus: { title: string; url: string }[]
	dropdown: boolean
}

const Dropdown = (props: Props) => {
	return (
		<ul className={`dropdown ${props.dropdown ? 'show' : ''}`}>
			{props.submenus.map((submenu, index) => (
				<li
					key={index}
					className='dropdown__items'>
					<a
						href={submenu.url}
						className='dropdown__link'>
						{submenu.title}
					</a>
				</li>
			))}
		</ul>
	)
}

export default Dropdown

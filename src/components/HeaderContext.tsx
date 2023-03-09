import NavContextProvider, { NavContext } from '../context/nav-context'
import Header from './Header'

const HeaderContext = () => {
	return (
		<NavContextProvider>
			<Header />
		</NavContextProvider>
	)
}

export default HeaderContext

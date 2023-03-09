import React, { useState } from 'react'

type NavContextProps = {
	isNavOpen: boolean
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type NavContextProviderProps = {
	children: React.ReactNode
}

export const NavContext = React.createContext<NavContextProps>({
	isNavOpen: false,
	setIsNavOpen: () => {},
})

const NavContextProvider: React.FC<NavContextProviderProps> = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

	return <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>{children}</NavContext.Provider>
}

export default NavContextProvider

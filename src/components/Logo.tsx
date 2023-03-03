import logoImage from '../images/logo.svg'

const Logo = () => {
	return (
		<a href='./'>
			<img
				src={logoImage}
				alt=''
				aria-hidden='true'
			/>
		</a>
	)
}

export default Logo

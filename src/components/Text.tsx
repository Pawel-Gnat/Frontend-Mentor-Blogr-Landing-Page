import '../styles/text.scss'

type Text = {
	text: string
	white: boolean
}

type Title = {
	text: string
}

export const Text = (props: Text) => {
	return (
		<p
			data-aos='fade-up'
			className={`text ${props.white ? 'text--white' : 'text--blue'}`}>
			{props.text}
		</p>
	)
}

export const Title = (props: Title) => {
	return (
		<strong
			data-aos='fade-up'
			className='strong'>
			{props.text}
		</strong>
	)
}

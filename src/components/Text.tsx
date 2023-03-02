import '../styles/text.scss'

type Text = {
	text: string
	white: boolean
}

type Title = {
	text: string
}

export const Text = (props: Text) => {
	return <p className={`text ${props.white ? 'text--white' : 'text--blue'}`}>{props.text}</p>
}

export const Title = (props: Title) => {
	return <strong className='strong'>{props.text}</strong>
}

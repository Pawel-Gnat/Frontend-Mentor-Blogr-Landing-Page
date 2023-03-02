import '../styles/anchor.scss'

type Props = {
	text: string
	type: string
}

const Anchor = (props: Props) => {
	return (
		<a
			href='./'
			className={`btn ${props.type ? props.type : null}`}>
			{props.text}
		</a>
	)
}

export default Anchor

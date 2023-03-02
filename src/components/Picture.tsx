import '../styles/picture.scss'

type Props = {
	mobile: string
	desktop: string
}

const Picture = (props: Props) => {
	return (
		<picture className='picture'>
			<source
				srcSet={props.mobile}
				media='(max-width: 849px)'
			/>
			<source
				srcSet={props.desktop}
				media='(min-width: 850px)'
			/>
			<img
				src={props.mobile}
				alt=''
				aria-hidden='true'
				width='300'
				height='200'
				loading='lazy'
				decoding='async'
			/>
		</picture>
	)
}

export default Picture

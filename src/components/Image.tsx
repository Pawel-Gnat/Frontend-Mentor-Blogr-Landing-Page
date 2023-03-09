import '../styles/image.scss'

type Props = {
	source: string
}

const Image = (props: Props) => {
	return (
		<img
			className='image'
			src={props.source}
			alt=''
			aria-hidden='true'
			data-aos='zoom-in'
		/>
	)
}

export default Image

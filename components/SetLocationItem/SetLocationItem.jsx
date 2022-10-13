import Image from 'next/image'
import cont from '../../images/templates/country.png'

const SetLocationItem = ({ title }) => {
	return (
		<p className="flex cursor-pointer items-center text-sm px-4 py-3">
			<Image
				src={cont}
				className={`rounded-56px`}

				alt="no image"
			/>
			<span className="ml-1">{title}</span>

		</p>
	)
}
export default SetLocationItem
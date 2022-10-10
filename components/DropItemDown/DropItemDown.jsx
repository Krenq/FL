import Image from "next/image"

const DropItemDown = ({ title, src, title2 }) => {
	return (
		<div className='mr-7'>
			<Image
				src={src}
				height='120px'
				width='195px'
				className='object-cover rounded-lg'

				alt="no image"
			/>
			<p className='text-center text-xs font-semibold mt-2'>{title}<br /> {title2}</p>
		</div >
	)
}
export default DropItemDown
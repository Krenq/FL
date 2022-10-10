const DropFilterItem = ({ src, title }) => {
	return (
		<div className='flex items-center mb-2 hover:bg-primary hover:text-white rounded-sm transition-all cursor-pointer'>
			<img className='rounded-sm object-cover imgFilter' src={src} alt="filterIMG" />
			<p className='ml-4 .3x1:text-xs'>{title}</p>
		</div>
	)
}
export default DropFilterItem
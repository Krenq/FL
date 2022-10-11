const DropFilterItem = ({ src, title }) => {
	return (
		<div className='flex items-center mb-2 hover:bg-primary hover:text-white rounded-sm transition-all cursor-pointer'>
			<img className='rounded-sm object-cover ..5x1:h-10 ..5x1:w-10 imgFilter' src={src} alt="filterIMG" />
			<p className='ml-4 ..5x1:ml-2 .3x1:text-xs'>{title}</p>
		</div>
	)
}
export default DropFilterItem
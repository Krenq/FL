const NewsNext = ({ onClick, kolichestvo }) => {
	let styleR = {

		right: '20px',

		top: '45%',
		zIndex: 20,
		borderRadius: 25,
	};

	return (
		<button
			className="nextStories absolute transition-all hover:bg-gray bg-white py-3 px-4"
			onClick={onClick}
			style={styleR}
		>
			<svg
				width="10"
				className="fill-black transition-all"
				height="16"
				viewBox="0 0 10 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.33 8L1.03 16L0 15L4 9L4.7 8L4 7L0 1L1.03 0L9.33 8Z"
					fill="black"
				/>
			</svg>
		</button>
	);
};
export default NewsNext;

import React from 'react';

export default function SectionFooterStock(props) {
	return (
		<>
			{props.text ? (
				<article className=" bg-label-bg px-20 flex flex-col justify-center items-center">
					{props.text.map((el, index) => (

						<div key={index}
							className={`container-base flex justify-center items-center h-20 font-noto-sans font-normal text-13px ${index + 1 < props.text.length ? 'border-b border-stroke' : ''
								}`}
						>
							{el}
						</div>

					))}
				</article>
			) : (
				<></>
			)}
		</>
	);
}

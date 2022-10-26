import React from 'react';

export default function SectionFooterStock(props) {
	return (
		<>
			{props.text ? (
				<article className="..5x2:pb-28 ..7x11:pb-12 ..5x4:px-10 ..6x5:px-2 ..5x4:text-center  bg-label-bg px-20 flex flex-col justify-center items-center">
					{props.text.map((el, index) => (

						<div key={index}
							className={`..6x1:text-11px ..6x5:text-9px   container-base flex justify-center items-center h-20 font-noto-sans font-normal text-13px ${index + 1 < props.text.length ? 'border-b border-stroke' : ''
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

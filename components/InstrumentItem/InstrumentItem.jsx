import Image from 'next/image';

export default function InstrumentItem({
	icon,
	text,
	title,
	btnText,
	bottomImg1,
	bottomImg2,
	country,
	textImg,
	underCountry,
}) {
	return (
		<div className="sm:w-1/2 md:w-1/2 lg:w-1/4 ..6x03:mt-32 ..6x03:mx-auto ..6x03:w-250px ..6x03:h-305px ..6x03:text-center ..6x03:flex ..6x03:flex-col ..6x03:justify-between ..6x03:bg-gray-light px-4 py-4 bg-gray-100 rounded-lg dark:bg-gray-800">
			<div className="flex-shrink-0">
				<div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
					<Image src={icon} width={64} height={64} />
				</div>
			</div>
			<h3 className="text-2xl sm:text-xl ..6x03:text-sm text-black font-medium font-montserrat dark:text-white pt-4">
				{title}
			</h3>

			{country ? (
				<>
					<div className=" pt-4">
						<div className="flex justify-between">
							<small className="flex mr-5 font-medium border-b border-dashed border-gray-quick-silver">
								{country}{' '}
								<svg
									className="ml-1"
									width="10"
									height="16"
									viewBox="0 0 10 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_2282_697496)">
										<path
											d="M7.38542 9.625L5 12.0201L2.60937 9.625L1.875 10.3623L5 13.5L8.125 10.3623L7.38542 9.625Z"
											fill="#337202"
										/>
									</g>
									<defs>
										<clipPath id="clip0_2282_697496">
											<rect
												width="10"
												height="10"
												fill="white"
												transform="translate(0 6)"
											/>
										</clipPath>
									</defs>
								</svg>
							</small>
							<div className=" w-full">
								<div className="flex items-center justify-end">
									{textImg.map((el) => {
										return (
											<div className='mx-1'>
												<Image
													className="object-contain"
													src={el}
													alt="discountImg"
													width={50}
													height={16}
												/>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					<p className="text-left text-gray-quick-silver mt-1 mb-4 text-xs ..6x3:text-sm">
						{underCountry}
					</p>
				</>
			) : (
				<p className=" ..6x03:text-xs font-montserrat font-medium text-base text-black-70pe dark:text-gray-light2 py-4">
					{text}
				</p>
			)}

			{bottomImg1 ? (
				<div className="flex flex-row justify-around ">
					<Image className='object-fill' width={135} height={44} src={bottomImg1} />
					<Image className='object-fill' width={135} height={44} src={bottomImg2} />
				</div>
			) : (

				<p className="flex flex-row justify-center items-center">
					{btnText ? btnText : 'Подробнее'}
					<svg
						className="ml-2"
						width="12"
						height="8"
						viewBox="0 0 12 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z"
							fill="black"
						/>
					</svg>
				</p>
			)}
		</div>
	);
}

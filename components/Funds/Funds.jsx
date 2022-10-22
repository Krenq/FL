import Image from 'next/image';
import { useEffect } from 'react';

import { useRef, useState } from 'react';

import Slider from 'react-slick';
import one from '../../images/templates/1funds.jpg';
import two from '../../images/templates/2Funds.jpg';
import tree from '../../images/templates/3funds.jpg';

import FundsNext from './FundsNext';
import FundsPrev from './FundsPrev';

const Funds = ({ refL }) => {
	const [kolichestvo, setKolichestvo] = useState(1);

	const slider = useRef(null);

	// Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку
	useEffect(() => {
		if (slider.current) setKolichestvo(slider?.current.props?.children?.length);
	}, [slider?.current]);

	const settings = {
		dots: true,
		Infinity: true,
		centerMode: true,
		variableWidth: true,
		focusOnSelect: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,

		nextArrow: <FundsNext kolichestvo={kolichestvo} />,
		prevArrow: <FundsPrev kolichestvo={kolichestvo} />,
		appendDots: (dots) => {
			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						position: 'absolute',
						bottom: 25,
					}}
				>
					<div
						style={{
							// backgroundColor: 'rgba(255, 255, 255, 0.8)',
							borderRadius: '54px',
							padding: '15px',
							paddingInline: '40px',
							width: 'auto',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ul
							style={{
								margin: '0px',
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'center',
							}}
						>
							{dots}
						</ul>
					</div>
				</div>
			);
		},
		customPaging: (i) => (
			<div
				style={{
					background: '#E5E6E4',
					width: 25,
					height: 3,
				}}
			/>
		),

		responsive: [
			{
				breakpoint: 1600,
				settings: {
					centerMode: false,
					variableWidth: false,
					focusOnSelect: false,

					appendDots: (dots) => {
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: 25,
								}}
							>
								<div
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.8)',
										borderRadius: '54px',
										padding: '15px',
										paddingInline: '40px',
										width: 'auto',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<ul
										style={{
											margin: '0px',
											display: 'flex',
											alignItems: 'flex-end',
											justifyContent: 'center',
										}}
									>
										{dots}
									</ul>
								</div>
							</div>
						);
					},
					customPaging: (i) => (
						<div
							style={{
								background: '#E5E6E4',
								width: 25,
								height: 3,
							}}
						/>
					),
				},
			},
		],
	};
	return (
		<section ref={refL} className="relative bg-gray-light" id='sec-8'>
			<svg
				className="ability ..6x2:h-36 ..6x2:mt-5 absolute left-1/2 -top-6 "
				width="184"
				height="183"
				viewBox="0 0 184 183"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M151.013 93.7301C151.013 93.7301 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.059 15.8079 123.059C15.8079 123.059 39.851 57.2524 64.9368 42.3731C90.0226 27.4937 133.618 51.8245 133.618 51.8245"
					stroke="white"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M168.192 59.8027C168.192 59.8027 132.964 80.524 105.01 90.496C77.0561 100.468 53.4366 100.739 53.4366 100.739"
					stroke="white"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M105.01 90.4961L71.0828 73.3172"
					stroke="white"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M105.01 90.496L91.1736 116.337"
					stroke="white"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<p className="ability absolute left-1/2 top-6 font-medium text-xl pt-10">
				Что-то
			</p>
			<p className="ability absolute left-1/2 top-24 w-full   text-center font-medium text-2xl italic mb-4 ..7x2:text-xl">
				ПРО УХОДОВЫЕ СРЕДСТВА
			</p>
			<p className="text-center text-lg mb-10 pt-32 ..7x2:text-sm">
				Которые не так очевидны в каталоге, например, подкатегории, <br />{' '}
				наборы и идеи подарков
			</p>

			<Slider {...settings} ref={slider} className="funds">
				<div className=" pb-20 ..7x2:p-0">
					<div className="flex justify-center ..6x4:flex-wrap ">
						<div className="..6x4:h-80 relative cursor-pointer transition-all hover:text-primary hover:opacity-90">
							<Image
								className="object-cover"
								src={one}
								width={720}
								height={768}
								alt="discountImg"
							/>
							<p className="absolute bottom-10 left-10 text-xl font-medium ..7x2:left-2 ..7x2:bottom-5 ">
								Сыворотки
							</p>
							<small className="flex items-center absolute bottom-10 right-10 ..7x2:right-2 ..7x2:bottom-5 z-10">
								Смотреть
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
							</small>
						</div>
						<div>
							<div className="relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image
									className="object-cover"
									src={two}
									width={720}
									height={374}
									alt="discountImg"
								/>
								<p className="absolute bottom-10 left-10 text-xl font-medium  ..7x2:left-2 ..7x2:bottom-5">
									Макияж
								</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10 ..7x2:right-2 ..7x2:bottom-5">
									Смотреть
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
								</small>
							</div>
							<div className="relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image
									className="object-cover"
									src={tree}
									width={720}
									height={374}
									alt="discountImg"
								/>
								<p className="absolute bottom-10 left-10 text-xl font-medium z-10  ..7x2:left-2 ..7x2:bottom-5">
									Идеи подарков
								</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10 ..7x2:right-2 ..7x2:bottom-5">
									Смотреть
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
								</small>
							</div>
						</div>
					</div>
				</div>
				<div className="pb-20 ..7x2:p-0">
					<div className="flex justify-center ..6x4:flex-wrap ">
						<div className="..6x4:h-80 relative cursor-pointer transition-all hover:text-primary hover:opacity-90">
							<Image
								className="object-cover"
								src={one}
								width={720}
								height={768}
								alt="discountImg"
							/>
							<p className="absolute bottom-10 left-10 text-xl font-medium ..7x2:left-2 ..7x2:bottom-5 ">
								Сыворотки
							</p>
							<small className="flex items-center absolute bottom-10 right-10 ..7x2:right-2 ..7x2:bottom-5 z-10">
								Смотреть
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
							</small>
						</div>
						<div>
							<div className="relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image
									className="object-cover"
									src={two}
									width={720}
									height={374}
									alt="discountImg"
								/>
								<p className="absolute bottom-10 left-10 text-xl font-medium  ..7x2:left-2 ..7x2:bottom-5">
									Макияж
								</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10 ..7x2:right-2 ..7x2:bottom-5">
									Смотреть
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
								</small>
							</div>
							<div className="relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image
									className="object-cover"
									src={tree}
									width={720}
									height={374}
									alt="discountImg"
								/>
								<p className="absolute bottom-10 left-10 text-xl font-medium z-10  ..7x2:left-2 ..7x2:bottom-5">
									Идеи подарков
								</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10 ..7x2:right-2 ..7x2:bottom-5">
									Смотреть
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
								</small>
							</div>
						</div>
					</div>
				</div>
				<div className="pb-20 ..7x2:p-0">
					<div className="flex justify-center ..6x4:flex-wrap ">
						<div className="..6x4:h-80 relative cursor-pointer transition-all hover:text-primary hover:opacity-90">
							<Image
								className="object-cover"
								src={one}
								width={720}
								height={768}
								alt="discountImg"
							/>
							<p className="absolute bottom-10 left-10 text-xl font-medium ..7x2:left-2 ..7x2:bottom-5 ">
								Сыворотки
							</p>
							<small className="flex items-center absolute bottom-10 right-10 ..7x2:right-2 ..7x2:bottom-5 z-10">
								Смотреть
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
							</small>
						</div>
						<div>
							<div className="relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image
									className="object-cover"
									src={two}
									width={720}
									height={374}
									alt="discountImg"
								/>
								<p className="absolute bottom-10 left-10 text-xl font-medium  ..7x2:left-2 ..7x2:bottom-5">
									Макияж
								</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10 ..7x2:right-2 ..7x2:bottom-5">
									Смотреть
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
								</small>
							</div>
							<div className="relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image
									className="object-cover"
									src={tree}
									width={720}
									height={374}
									alt="discountImg"
								/>
								<p className="absolute bottom-10 left-10 text-xl font-medium z-10  ..7x2:left-2 ..7x2:bottom-5">
									Идеи подарков
								</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10 ..7x2:right-2 ..7x2:bottom-5">
									Смотреть
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
								</small>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		</section>
	);
};
export default Funds;

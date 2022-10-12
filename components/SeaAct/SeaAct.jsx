import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import one from '../../images/templates/1seaAct.jpg';
import two from '../../images/templates/2seaAct.jpg';
import tree from '../../images/templates/3seaAct.jpg';
import four from '../../images/templates/4seaAct.jpg';
import five from '../../images/templates/5seaAct.jpg';
import six from '../../images/templates/6seaAct.jpg';
import sev from '../../images/templates/7seaAct.jpg';
import SeaActItem from '../SeaActItem/SeaActItem';
import useWindowSize from '../utils/useWindowSize';

const SeaAct = () => {
	const divBlock = useRef(null);
	const size = useWindowSize();

	const [kol, setKol] = useState();
	const [widthDot, setWidthDot] = useState();

	useEffect(() => {
		setWidthDot(divBlock?.current?.getBoundingClientRect()?.width / kol);
	}, [size.width]);

	const settings = {
		dots: true,
		Infinity: true,
		speed: 500,
		responsive: [
			{
				breakpoint: 100000,
				settings: 'unslick',
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					appendDots: (dots) => {
						setKol(dots.length);
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -40,
								}}
							>
								<div
									ref={divBlock}
									style={{
										width: 150,
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
								backgroundColor: ' rgb(218, 218, 218)',
								width: `${widthDot}px`,
								height: 4,
							}}
						/>
					),
				},
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					appendDots: (dots) => {
						setKol(dots.length);
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -40,
								}}
							>
								<div
									ref={divBlock}
									style={{
										width: 150,
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
								backgroundColor: ' rgb(218, 218, 218)',
								width: `${widthDot}px`,
								height: 4,
							}}
						/>
					),
				},
			},
			,
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '0px',
					infinite: true,
					dots: true,
					appendDots: (dots) => {
						setKol(dots.length);
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -40,
								}}
							>
								<div
									ref={divBlock}
									style={{
										width: 150,
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
								backgroundColor: ' rgb(218, 218, 218)',
								width: `${widthDot}px`,
								height: 4,
							}}
						/>
					),
				},
			},
		],
	};

	return (
		<div className="bg-gray-light">
			<section className="container__special relative pt-16 pb-24 ..5x2:pb-20">
				<svg
					className="ability ..6x2:h-36 ..6x2:mt-5 absolute left-1/2 -top-8 "
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

				<p className="absolute left-1/2 ability  font-medium text-2xl  ..6x04:text-xl">
					Каждый сезон
				</p>
				<p className="absolute left-1/2 ability top-24 text-center font-medium text-3xl italic ..6x04:text-2xl ..7x1:text-xl">
					НОВЫЕ АКЦИИ
				</p>
				<p className="mb-9 text-center mt-20">
					Покупай в наборах и получай подарок
				</p>
				<div className="flex justify-center ">
					<div className="relative w-44% .4x1:hidden">

						<div className="absolute top-10 left-10 z-10">
							<p className="text-2xl text-primary">АКЦИЯ ВЕСНЫ</p>
							<p className="text-3xl font-medium">Получай подарки за покупки</p>
							<div className=" absolute -left-4 top-24 bg-white-80pe px-2 text-primary border-2 border-primary font-normal text-lg font-montserrat mx-3  ">

								17d : 09h : 10m : 20s
							</div>
						</div>
						<p className="absolute bottom-10 cursor-pointer z-10 right-10 flex items-center text-sm transition-all hover:text-primary">
							Смотреть{' '}
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
						<div className="cartinka w-full h-full">
							<Image
								className="object-cover"
								height={874}
								width={572}
								src={one}
								alt="productsPhoto"
							/>
						</div>
					</div>
					<Slider
						{...settings}
						className="act_slider flex flex-row justify-between w-60% .4x1:w-2/3 ..5x2:w-full .1x1:w-4/5 .4x1:justify-center"
					>
						<div className="flex flex-col justify-between ml-4 .4x1:ml-0 ..6x3:ml-4">
							<SeaActItem img={two} mb="mb-4" />
							<SeaActItem img={tree} />
						</div>

						<div className="flex flex-col justify-between ml-4 ">
							<SeaActItem img={four} mb="mb-4" />
							<SeaActItem img={five} />
						</div>

						<div className="flex flex-col justify-between ml-4 ">
							<SeaActItem img={six} mb="mb-4" />
							<SeaActItem img={two} />
						</div>

					</Slider>
				</div>
			</section>
		</div>
	);
};
export default SeaAct;

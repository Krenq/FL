import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { useTimerHook } from '../../hooks/useTimerHook';
import one from '../../images/templates/1seaAct.jpg';
import two from '../../images/templates/2seaAct.jpg';
import tree from '../../images/templates/3seaAct.jpg';
import four from '../../images/templates/4seaAct.jpg';
import five from '../../images/templates/5seaAct.jpg';
import six from '../../images/templates/6seaAct.jpg';
import SeaActItem from '../SeaActItem/SeaActItem';
import useWindowSize from '../utils/useWindowSize';

const SeaAct = ({ refL }) => {
	const divBlock = useRef(null),
		slider = useRef(null);
	const size = useWindowSize();

	const [kol, setKol] = useState();
	const [widthDot, setWidthDot] = useState();
	const [time, setTime] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00',
	});

	useEffect(() => {
		setInterval(() => {
			const timeLocal = useTimerHook(
				'Thu Dec 30 2022 17:43:29 GMT+0300 (Москва, стандартное время)'
			); // Пример присылаемой даты с бека
			setTime(timeLocal);
		}, 1000);
	}, []);

	useEffect(() => {
		setWidthDot(divBlock?.current?.getBoundingClientRect()?.width / kol);

		// Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку
		if (slider.current) setKol(slider?.current.props?.children?.length);
	}, [size.width, slider?.current]);

	const settings = {
		dots: true,
		Infinity: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendDots: (dots) => {
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
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					// centerMode: true,
					// centerPadding: '-250px',
					dots: true,
				},
			},

		]
	};

	return (
		<div ref={refL} className="bg-gray-light" id="sec-6">
			<section className="container__special relative pb-24 pt-32  ..5x2:pt-60 ..5x2:pb-12">
				<svg
					className="ability ..6x2:h-32 ..6x2:mt-5 absolute left-1/2 ..5x2:top-3 top-6 "
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

				<p className="absolute left-1/2 ability titleSea ..5x2:top-24 font-montserrat ..6x04:text-base  font-medium text-2xl  ">
					Каждый сезон
				</p>
				<p className="absolute left-1/2 w-full ability top-40 ..5x2:top-32 font-montserrat  ..6x3:text-22px ..6x03:top-32 text-center font-medium text-3xl italic ">
					НОВЫЕ АКЦИИ
				</p>
				<div className="mb-9 ..5x2:mb-14 text-center font-montserrat ..6x04:text-13px nabSea mt-20">
					Покупай в наборах и получай подарок
					<div className='w-24 h-3px ability absolute hrSea left-1/2 hidden ..5x2:block bg-white'></div>
				</div>
				<div className="timer absolute ability left-1/2 timerSea hidden ..5x2:block ..5x2:py-1 ..6x5:ml-0 bg-white px-2 text-primary border border-primary font-normal text-lg font-montserrat   ..6x5:font-noto-sans ..6x5:text-sm">
					{time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
				</div>
				<div className="flex justify-center h-874px ..6x1:h-auto ">
					<div className="relative w-44% h-874px .4x1:hidden mr-3">
						<div className="absolute top-10 left-10 z-10">
							<p className="text-2xl text-primary">АКЦИЯ ВЕСНЫ</p>
							<p className="text-3xl font-medium">Получай подарки за покупки</p>
							<div className="timer absolute -left-4 top-24 bg-white-80pe px-2 text-primary border-2 border-primary font-normal text-lg font-montserrat mx-3  ">
								{time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
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

					<div className=" flex flex-row justify-arround w-60% .4x1:w-2/3 ..6x1:hidden ..5x2:w-full .1x1:w-4/5 .4x1:justify-center">
						<div className="flex flex-col justify-between .4x1:ml-0 ..6x3:ml-4">
							<SeaActItem
								obj={{
									present: true,
									img: two,
									iTab: true,
									text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА  fsds  fsf sdf s ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
									date: true,
									priceSale: { old: '920.00', new: '764.00' },
								}}
							/>
							<SeaActItem
								obj={{
									present: true,
									img: tree,
									iTab: true,
									text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
									date: true,
									priceSale: { old: '920.00', new: '764.00' },
								}}
							/>
						</div>

						<div className="flex flex-col justify-between .4x1:ml-0 ..6x3:ml-4">
							<SeaActItem
								obj={{
									present: true,
									img: two,
									iTab: true,
									text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
									date: true,
									priceSale: { old: '920.00', new: '764.00' },
								}}
							/>
							<SeaActItem
								obj={{
									present: true,
									img: tree,
									iTab: true,
									text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
									date: true,
									priceSale: { old: '920.00', new: '764.00' },
								}}
							/>
						</div>

						<div className="flex flex-col justify-between  ">
							<SeaActItem
								obj={{
									present: true,
									img: six,
									iTab: true,
									text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
									date: true,
									priceSale: { old: '920.00', new: '764.00' },
								}}
							/>
							<SeaActItem
								obj={{
									present: true,
									img: two,
									iTab: true,
									text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
									date: true,
									priceSale: { old: '920.00', new: '764.00' },
								}}
							/>
						</div>
					</div>

					<Slider
						ref={slider}
						{...settings}
						className=" hidden ..6x1:block w-full"
					>
						<SeaActItem
							obj={{
								present: true,
								img: two,
								iTab: true,
								text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКАdf sdf sdf sdf s fsdf  ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
								date: true,
								priceSale: { old: '920.00', new: '764.00' },
							}}
						/>
						<SeaActItem
							obj={{
								present: true,
								img: two,
								iTab: true,
								text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
								date: true,
								priceSale: { old: '920.00', new: '764.00' },
							}}
						/>
						<SeaActItem
							obj={{
								present: true,
								img: two,
								iTab: true,
								text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
								date: true,
								priceSale: { old: '920.00', new: '764.00' },
							}}
						/>
						<SeaActItem
							obj={{
								present: true,
								img: two,
								iTab: true,
								text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
								date: true,
								priceSale: { old: '920.00', new: '764.00' },
							}}
						/>
						<SeaActItem
							obj={{
								present: true,
								img: two,
								iTab: true,
								text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
								date: true,
								priceSale: { old: '920.00', new: '764.00' },
							}}
						/>
						<SeaActItem
							obj={{
								present: true,
								img: two,
								iTab: true,
								text: 'УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ',
								date: true,
								priceSale: { old: '920.00', new: '764.00' },
							}}
						/>
					</Slider>
				</div>
			</section>
		</div>
	);
};
export default SeaAct;

import autoprefixer from 'autoprefixer';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import one from '../../images/templates/1Offer.jpg';
import two from '../../images/templates/2Offer.jpg';
import tree from '../../images/templates/3Offer.jpg';
import four from '../../images/templates/4Offer.jpg';
import five from '../../images/templates/5Offer.jpg';
import SpecialOfferItem from '../SpecialOfferItem/SpecialOfferItem';
import useWindowSize from '../utils/useWindowSize';
import SpecialOffersNext from './SpecialOffersNext';
import SpecialOffersPrev from './SpecialOffersPrev';

function SpecialOffers() {
	const divBlock = useRef(null);
	const size = useWindowSize();

	const [kol, setKol] = useState();
	const [widthDot, setWidthDot] = useState();

	useEffect(() => {
		setWidthDot(divBlock?.current?.getBoundingClientRect()?.width / kol);
	}, [size.width]);

	const settings = {
		dots: true,

		infinite: true,

		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: <SpecialOffersNext />,
		prevArrow: <SpecialOffersPrev />,
		dotsClass: 'slick-dots slick-thumb',
		appendDots: (dots) => {
			setKol(dots.length);
			return (
				<div
					ref={divBlock}
					style={{
						display: 'flex',
						justifyContent: 'center',
						position: 'absolute',
						bottom: -60,
					}}
				>
					<div
						style={{
							width: '100%',
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

				breakpoint: 1350,

				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{

				breakpoint: 1100,

				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{

				breakpoint: 780,

				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					nextArrow: false,
					prevArrow: false,
					appendDots: (dots) => {
						setKol(dots.length);
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -60,
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
				breakpoint: 450,
				settings: {

					slidesToShow: 2,

					slidesToScroll: 1,
					infinite: true,
					dots: true,
					nextArrow: false,
					prevArrow: false,
					appendDots: (dots) => {
						setKol(dots.length);
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -60,
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

		<article className="container__special bg-white pb-36 ..5x2:pb-14 .1x1:pb-28">
			<div className="mt-16 flex items-center border-b-2 border-gray pb-2 overflow-x-auto scrol whitespace-nowrap font-medium font-montserrat ml-2">

				<p className="..6x3:text-sm ..6x3:mr-3 ..6x3:pr-3 ..6x1:text-base flex items-center h-8 hover:text-primary transition-all cursor-pointer mr-8 border-gray border-r-2  pr-8 text-gray-quick-silver text-lg">
					Все спецпредложения
				</p>
				<p className="..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 text-gray-quick-silver text-lg">
					Новинки
				</p>
				<p className="..6x3:text-sm  ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 text-gray-quick-silver text-lg">
					Хит продаж
				</p>
				<p className="..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 text-gray-quick-silver text-lg">
					Суперцена
				</p>
				<p className="..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 text-gray-quick-silver text-lg">
					Наборы
				</p>
			</div>
			<Slider {...settings}>
				<SpecialOfferItem img={one} />
				<SpecialOfferItem img={two} />
				<SpecialOfferItem img={tree} />
				<SpecialOfferItem img={four} />
				<SpecialOfferItem img={five} />
				<SpecialOfferItem img={two} />
				<SpecialOfferItem img={tree} />
				<SpecialOfferItem img={four} />
				<SpecialOfferItem img={five} />
				<SpecialOfferItem img={two} />
				<SpecialOfferItem img={two} />
				<SpecialOfferItem img={tree} />
				<SpecialOfferItem img={four} />
				<SpecialOfferItem img={five} />
				<SpecialOfferItem img={two} />
			</Slider>
		</article>
	);
}
export default SpecialOffers;

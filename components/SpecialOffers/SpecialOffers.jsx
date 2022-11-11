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



import oneL from '../../images/templates/oneItemSearchSlider.jpg'
import treeL from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'

function SpecialOffers({ refL }) {
	const divBlock = useRef(null),
		slider = useRef(null);

	const size = useWindowSize();
	const [kol, setKol] = useState();
	const [widthDot, setWidthDot] = useState();
	const [currentTab, setCurrentTab] = useState('all');

	useEffect(() => {
		setWidthDot(divBlock?.current?.getBoundingClientRect()?.width / kol);

		// Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку
		if (slider.current) setKol(slider?.current.props?.children?.length);
	}, [size.width, slider?.current]);

	const currentTabHandler = (num) => {
		setCurrentTab(num);
	};

	const settings = {
		dots: true,

		infinite: true,

		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: <SpecialOffersNext />,
		prevArrow: <SpecialOffersPrev />,
		dotsClass: 'slick-dots slick-thumb specialSliderDots',
		appendDots: (dots) => {
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
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -25,
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
				breakpoint: 600,

				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					nextArrow: false,
					prevArrow: false,
					appendDots: (dots) => {
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -35,
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
						return (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									position: 'absolute',
									bottom: -35,
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
		<article ref={refL} id='sec-2' className="container__special bg-white pb-36 ..5x2:pb-0 .1x1:pb-28">
			<div className="mt-16 ..5x2:mt-2 flex items-center border-b border-gray-border pb-2 overflow-x-auto scrol whitespace-nowrap font-medium font-montserrat ml-2">
				<p
					onClick={() => currentTabHandler('all')}
					className={`..6x3:text-sm  ..6x3:mr-3 ..6x3:pr-3 ..6x1:text-base flex items-center h-8 hover:text-primary transition-all cursor-pointer mr-8 border-gray-border border-r  pr-8 ${currentTab === 'all' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Все спецпредложения
				</p>
				<p
					onClick={() => currentTabHandler('1')}
					className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${currentTab === '1' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Новинки
				</p>
				<p
					onClick={() => currentTabHandler('2')}
					className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${currentTab === '2' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Хит продаж
				</p>
				<p
					onClick={() => currentTabHandler('3')}
					className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${currentTab === '3' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Суперцена
				</p>
				<p
					onClick={() => currentTabHandler('4')}
					className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${currentTab === '4' ? 'text-primary' : 'text-gray-quick-silver'
						} text-lg`}
				>
					Наборы
				</p>
			</div>
			<Slider className='specialSlider' {...settings} ref={slider}>
				<SpecialOfferItem
					obj={{
						img: one,
						text: 'питательный шампунь с корнем имбиря',
						pDay: true,
						hit: true,
						priceDe: '3 750',
						price: '764.00',
						isSlider: true,
						balls: true
					}}
				/>
				<SpecialOfferItem
					obj={{
						img: two,
						text: 'Укрепляющая сыворотка для контура овала лица с коллагеном',
						new: true,
						sale: true,
						iTab: true,
						priceSale: { old: '999.00', new: '888.00' },
					}}
					srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
				/>
				<SpecialOfferItem
					obj={{
						img: tree,
						text: 'бьюти - косметичка “сакура”',
						hit: true,
						pDay: true,
						colors: true,
						price: '764.00',
					}}
				/>
				<SpecialOfferItem
					obj={{
						img: four,
						text: 'Укрепляющая сыворотка для контура овала лица с коллагеном ',
						priceDe: '3 750',
						price: '764.00',
					}}
				/>
				<SpecialOfferItem
					obj={{
						img: five,
						text: 'ночная крем-маска с лавандой',
						hit: true,
						priceDe: '3 750',
						price: '764.00',
					}}
				/>
				<SpecialOfferItem
					obj={{
						img: one,
						text: 'питательный шампунь с корнем имбиря',
						pDay: true,
						hit: true,
						priceDe: '3 750',
						price: '764.00',
					}}
				/>
				<SpecialOfferItem
					obj={{
						img: two,
						text: 'Укрепляющая сыворотка для контура овала лица с коллагеном',
						new: true,
						sale: true,
						iTab: true,
						priceSale: { old: '999.00', new: '888.00' },
					}}
					srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
				/>
				<SpecialOfferItem
					obj={{
						img: tree,
						text: 'бьюти - косметичка “сакура”',
						hit: true,
						pDay: true,
						colors: true,
						price: '764.00',
					}}
				/>
				<SpecialOfferItem
					obj={{
						img: four,
						text: 'Укрепляющая сыворотка для контура овала лица с коллагеном ',
						priceDe: '3 750',
						price: '764.00',
					}}
				/>
				<SpecialOfferItem
					obj={{
						img: five,
						text: 'ночная крем-маска с лавандой',
						hit: true,
						priceDe: '3 750',
						price: '764.00',
					}}
				/>

			</Slider>
		</article>
	);
}
export default SpecialOffers;

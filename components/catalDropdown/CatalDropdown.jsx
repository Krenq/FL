import DiscountsButtonsSliderNext from '../DiscounstsButtonsSliderNext/DiscountsButtonsSliderNext';
import DiscounstsButtonsSliderPrev from '../DiscounstsButtonsSliderNext/DiscountsButtonsSliderPrev';
import preview from '../../images/templates/preview.jpg'
import one from '../../images/templates/botoluxe.jpg'
import two from '../../images/templates/bio.jpg'
import tree from '../../images/templates/collag.jpg'
import four from '../../images/templates/marine.jpg'
import sl from '../../images/templates/sl.jpg'
import Slider from 'react-slick';
import { useState } from 'react';
import Image from 'next/image';
import DropFilterItem from '../DropFilterItem/DropFilterItem';
import CatalDropDownItem from '../CatalDropDownItem/CatalDropDownItem';
const CatalDropdown = ({ show, setShow }) => {
	const [kolichestvo, setKolichestvo] = useState(1);
	const settings = {
		dots: false,
		Infinity: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <DiscountsButtonsSliderNext kolichestvo={kolichestvo} />,
		prevArrow: <DiscounstsButtonsSliderPrev kolichestvo={kolichestvo} />,
		responsive: [
			{
				breakpoint: 1410,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
				}
			}
		]
	},
		settingsTwo = {
			dots: true,
			Infinity: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}


	return (
		<>
			<div className={`fixed top-0 right-0 left-0 bottom-0 z-10 ${show ? 'block' : 'hidden'}`} onClick={setShow}></div>
			<section className={`absolute flex z-20 drop right-0 transition-all bg-white mt-0 ${show ? 'active' : "hiddenCustom"}`}>
				<div className='bg-white-BG_FILTER w-48 pl-3 pt-3 pb-3'>
					<DropFilterItem src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon_DE_CATALOG.8f87018f.png&w=640&q=75' title='De-каталог' />
					<DropFilterItem title='Лицо' src='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2tian.4e6e4278.jpg&w=1080&q=75' />
					<DropFilterItem title='Тело' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2product.132a978a.jpg&w=640&q=75' />
					<DropFilterItem title='Волосы' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3product.0ea2089c.jpg&w=640&q=75' />
					<DropFilterItem title='Макияж' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4product.efc031fd.jpg&w=640&q=75' />
					<DropFilterItem title='Парфюм' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5product.f3b3a964.jpg&w=640&q=75' />
					<DropFilterItem title='Мужчинам' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6product.7836d942.jpg&w=640&q=75' />
					<DropFilterItem title='Детям' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7product.652b907d.jpg&w=640&q=75' />
					<DropFilterItem title='Дом' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8product.fc8dc70a.jpg&w=640&q=75' />
					<DropFilterItem title='Гигиена' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9product.ba626c98.jpg&w=640&q=75' />
					<DropFilterItem title='Wellness' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10product.8e01678c.jpg&w=640&q=75' />
					<DropFilterItem title='Аксессуары' src='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11product.885abd42.jpg&w=640&q=75' />
				</div>
				<div className='h-full w-65% pb-3'>
					<section>
						<Slider {...settings} className='py-3 px-5 border-b-2 border-gray filterslider'>
							<CatalDropDownItem title='антиакне' />
							<CatalDropDownItem title='антистресс' />
							<CatalDropDownItem title='коррекция морщин' />
							<CatalDropDownItem title='молодая кожа' />
							<CatalDropDownItem title='обезвоженная' />
							<CatalDropDownItem title='антиакне' />
							<CatalDropDownItem title='антистресс' />
							<CatalDropDownItem title='коррекция морщин' />
							<CatalDropDownItem title='молодая кожа' />
							<CatalDropDownItem title='обезвоженная' />
						</Slider>
						<div className='flex mt-7 ml-10'>
							<div className='mr-24 .3x1:mr-8'>
								<p className='font-semibold border-b-2 border-primary mb-4 w-36 text-xs'>Антивозрастной уход</p>
								<p className='text-gray-quick-silver text-xs mb-4'>День <small>20</small></p>
								<p className='text-gray-quick-silver text-xs mb-4'>Ночью <small>11</small></p>
								<p className='text-gray-quick-silver text-xs '>Экстра уход <small>18</small></p>
								<p className='font-semibold border-b-2 border-primary mb-4 mt-10 text-xs w-32'>Глубокое очищение</p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Очищающие пластыри для носа <small>2</small></p>
								<p className='text-gray-quick-silver text-xs'>Пиллинги <small>9</small></p>
								<p className='font-semibold border-b-2 border-primary mb-4 mt-10 w-10 text-xs'>Маски</p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Гель-маски <small>2</small></p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Колагеновые маски <small>1</small></p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Крем-маски <small>7</small></p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Маски-муляжи <small>22</small></p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Патчи для век <small>3</small></p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Растворимые маски <small>2</small></p>
								<p className='text-gray-quick-silver text-xs'>Фитомаски <small>2</small></p>
							</div>
							<div className='mr-20 .3x1:mr-8'>
								<p className='font-semibold border-b-2 border-primary mb-4 w-48 text-xs'>Очищение и тонизирование</p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Аксессуары для умывания <small>5</small></p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Очищение <small>14</small></p>
								<p className='text-gray-quick-silver text-xs'>Тонизирующие средства <small>13</small></p>
								<p className='font-semibold border-b-2 border-primary mb-4 mt-10 w-32 text-xs'>Проблемная кожа</p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Акне <small>10</small></p>
								<p className='text-gray-quick-silver text-xs'>Пигментация и купероз <small>1</small></p>
								<p className='font-semibold border-b-2 border-primary mb-4 mt-10 text-xs'>Специальные средства и приборы</p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Приборы <small>5</small></p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Сыворотки <small>6</small></p>
								<p className='text-gray-quick-silver text-xs'>Трансдермальные комплексы <small>2</small></p>
								<p className='font-semibold border-b-2 border-primary mb-4 mt-10 w-40 text-xs'>Уход за кожей губ и век</p>
								<p className='text-gray-quick-silver mb-4 text-xs'>Губы <small>36</small></p>
								<p className='text-gray-quick-silver text-xs'>Веки <small>6</small></p>
							</div>
							<div>
								<Image
									src={preview}
									alt="dropdown img"
								/>
								<p className='font-sans text-xs tracking-widest'>Online - каталог</p>
								<p className='text-2xl font-semibold mb-7'>Весна 2022</p>
								<div className='flex items-center mb-2'>
									<Image
										src={one}
										alt="dropdown img"
									/>
									<p className='text-xs ml-1 text-gray-quick-silver tracking-widest'>BOTOLUXE</p>
								</div>
								<div className='flex items-center mb-2'>
									<Image
										src={two}
										alt="dropdown img"
									/>
									<p className='text-xs ml-1 text-gray-quick-silver tracking-widest'>BIO REHAB</p>
								</div>
								<div className='flex items-center mb-2'>
									<Image
										src={tree}
										alt="dropdown img"
									/>
									<p className='text-xs ml-1 text-gray-quick-silver tracking-widest'>COLLAGEN ACTIVE</p>
								</div>
								<div className='flex items-center mb-2'>
									<Image
										src={four}
										alt="dropdown img"
									/>
									<p className='text-xs ml-1 text-gray-quick-silver tracking-widest'>MARINE COLLAGEN</p>
								</div>
								<p className='font-semibold border-b-2 border-primary mt-4 w-24 text-xs'>Все серии (16)</p>

							</div>
						</div>
					</section>
				</div>
				<div className='p-4 border-l-2 w-22% border-gray'>
					<Slider {...settingsTwo} className='dropDownSliderAc mb-10'>

						<div className='relative'>
							<Image
								src={sl}
								alt="dropdown img"
							/>
							<p className='font-medium tracking-widest text-xs absolute top-6 left-5'>АКЦИЯ ВЕСНЫ</p>
							<p className='tracking-widest text-xl absolute top-12 left-5'>Расцветай <br /> вместе с нами</p>
							<p className='flex items-center tracking-widest absolute bottom-4 right-6'>Смотреть <svg className='ml-1' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.02529 0.935913L7.08469 1.70374L9.26485 3.46684L0.194824 3.47426L0.196166 4.55759L9.24134 4.5502L7.09791 6.2999L8.04292 7.06414L11.8053 3.99286L8.02529 0.935913Z" fill="black" />
							</svg>
							</p>
						</div>
						<div className='relative'>
							<Image
								src={sl}
								alt="dropdown img"
							/>
							<p className='font-medium tracking-widest text-xs absolute top-6 left-5'>АКЦИЯ ВЕСНЫ</p>
							<p className='tracking-widest text-xl absolute top-12 left-5'>Расцветай <br /> вместе с нами</p>
							<p className='flex items-center tracking-widest absolute bottom-4 right-6'>Смотреть <svg className='ml-1' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.02529 0.935913L7.08469 1.70374L9.26485 3.46684L0.194824 3.47426L0.196166 4.55759L9.24134 4.5502L7.09791 6.2999L8.04292 7.06414L11.8053 3.99286L8.02529 0.935913Z" fill="black" />
							</svg>
							</p>
						</div>
						<div className='relative'>
							<Image
								src={sl}
								alt="dropdown img"
							/>
							<p className='font-medium tracking-widest text-xs absolute top-6 left-5'>АКЦИЯ ВЕСНЫ</p>
							<p className='tracking-widest text-xl absolute top-12 left-5'>Расцветай <br /> вместе с нами</p>
							<p className='flex items-center tracking-widest absolute bottom-4 right-6'>Смотреть <svg className='ml-1' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.02529 0.935913L7.08469 1.70374L9.26485 3.46684L0.194824 3.47426L0.196166 4.55759L9.24134 4.5502L7.09791 6.2999L8.04292 7.06414L11.8053 3.99286L8.02529 0.935913Z" fill="black" />
							</svg>
							</p>

						</div>
					</Slider>
					<div className='flex justify-center .3x1:ml-3'>
						<div>
							<p className='w-32 h-9 border-2 mb-3 .3x1:text-xs .3x1:w-28 border-gray justify-center items-center flex mr-3'>Новинки</p>
							<p className='w-32 h-9 border-2 mb-3 .3x1:text-xs .3x1:w-28 border-gray justify-center items-center flex mr-3'>Наборы</p>
							<p className='w-32 h-9 border-2 mb-3 .3x1:text-xs .3x1:w-28 border-gray justify-center items-center flex mr-3'>Хит продаж</p>
							<p className='w-32 h-9 border-2 mb-3 .3x1:text-xs .3x1:w-28 border-gray justify-center items-center flex mr-3'>Идеи подарков</p>

						</div>
						<div>
							<p className='w-32 h-9 border-2 mb-3 .3x1:text-xs .3x1:w-28 border-gray justify-center items-center flex mr-3'>Акции</p>
							<p className='w-32 h-9 border-2 mb-3 .3x1:text-xs .3x1:w-28 border-gray justify-center items-center flex mr-3'>Товар дня</p>
							<p className='w-32 h-9 border-2 mb-3 .3x1:text-xs .3x1:w-28 border-gray justify-center items-center flex mr-3'>Суперцена</p>

						</div>

					</div>
					<button className='w-full border-2 mb-3 border-primary text-primary h-9'>
						Все спецпредложения
					</button>
				</div>
			</section >
		</>

	)
}
export default CatalDropdown
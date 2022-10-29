import Image from 'next/image';
import Slider from 'react-slick';
import one from '../../images/templates/1forBuyers.jpg';
import two from '../../images/templates/2forBuyres.jpg';
import three from '../../images/templates/3forBuyers.jpg';
import groups from '../../images/templates/groups.png';
import twoglos from '../../images/templates/2glos.jpg';

function Buyers({ refL }) {
	const settings = {

		dots: false,

		Infinity: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,

					dots: false,

					className: 'center',
					centerMode: true,
					centerPadding: '75px',
				},
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,

					dots: false,

					className: 'center',
					centerMode: true,
					centerPadding: '50px',
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,

					dots: false,

					className: 'center',
					centerMode: true,
					centerPadding: '20px',
				},
			},
		],
	};

	return (
		<div ref={refL} name="center-anchor" className="relative" id='sec-3'>
			<div className="absolute left-0 bottom-0 ..6x2:w-40 ..5x2:hidden ..6x2:h-40 .4x1:-bottom-32">

				<Image
					className="object-cover "
					src={twoglos}
					alt="specialOffersImg"
					width={237}
					height={237}
				/>

			</div>

			<section className="container__special relative pt-10 .4x1:pt-10 ..5x2:pt-28">
				<svg
					className="absolute ..6x2:h-32 ..6x2:mt-5 left-1/2 ability ..5x2:top-9 -top-8"
					width="184"
					height="183"
					viewBox="0 0 184 183"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244"
						stroke="#EFF5F0"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74"
						stroke="#EFF5F0"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M105.01 90.4961L71.0828 73.3172"
						stroke="#EFF5F0"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M105.01 90.496L91.1736 116.337"
						stroke="#EFF5F0"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<p className="text-center text-4xl italic mb-16 font-medium ..6x04:text-22px font-montserrat z-10 ..6x04:mb-5 relative">
					ПОКУПАТЕЛЯМ
				</p>

				<Slider {...settings} >
					<div className="px-2 relative">
						<p className='font-montserrat  ..6x3:text-base ..6x3:left-7 ..6x3:top-4 ..6x1:text-2xl z-10 absolute ..5x01:left-9   ..5x01:top-8 ..5x01:text-xl .2x1.0:top-10 .2x1.0:text-2xl top-10 left-12 text-32px  ..5x03:text-32px ..5x03:left-12 ..5x03:top-10 font-medium'>Программа лояльности</p>
						<p className='font-montserrat ..6x3:text-sm ..6x3:left-7 ..6x3:top-42px ..6x1:text-xl ..6x1:left-11 ..6x1:top-16 .2x1.0:top-16 .2x1.0:text-xl z-10 ..5x01:top-14 ..5x01:left-9 ..5x01:text-lg text-26px font-medium absolute text-primary left-12 top-20 ..5x03:left-12 ..5x03:top-20 ..5x03:text-26px mt-2'>от 1500 ₽</p>
						<div className='absolute right-3 overflow-hidden deCat .4x2:right-2  .3x1:h-80 .3x1:w-80 ..6x1:h-80 ..6x1:w-80 ..5x01:h-64 ..5x01:w-64 bottom-1.5 ..5x03:h-96 ..5x03:w-96 ..5x03:right-2 h-96 w-96 bg-nude-3 z-10'>
							<div className='relative ..6x3:pt-20 ..7x002:pt-16  ..6x3:px-0 px-8 ..5x03:px-8 .3x1:px-5 ..6x1:pt-36  .3x1:pt-36 pt-44 ..5x03:pt-44 ..5x01:pt-28 ..5x01:px-1 '>
								<p className='font-lora absolute ..7x002:top-1 ..7x002:py-2 ..7x002:px-2 ..6x3:pb-3 ..6x3:pt-3 ..6x3:px-3 ..6x3:text-2xl ..6x1:text-5xl ..6x1:top-4 left-1/2 border-white .3x1:text-4xl ..5x01:top-0 .3x1:py-8 text-white pt-9 ability top-8 pb-9 px-7 ..5x03:top-8 ..5x03:pb-9 ..5x03:px-7 ..5x2:text-4xl text-6xl ..5x03:text-6xl headerAbility border-4 rounded-50 border-dashed'>De</p>
								<p className='font-montserrat ..6x3:hidden ..6x1:text-base text-18px ..5x03:text-18px text-center lineH .3x1:text-base ..5x01:text-sm'>Покупай любимые продукты, зарабатывай DeCoins, оплачивай ими сдедующие заказы!</p>
								<p className='font-montserrat ..6x3:block hidden  text-11px  text-center lineH'>Зарабатывай DeCoins, оплачивай ими заказы!</p>
								<div className='absolute left-1/2 .3x1:-bottom-2 ..6x3:-bottom-1 h-3px ..6x3:h-0.5 w-24 bg-white ability'></div>
								<button className='font-montserrat ..7x002:py-2 ..7x002:px-10px ..7x002:-bottom-11 ..6x3:text-xs ..6x3:py-10px ..6x3:-bottom-12 ..6x3:px-5 font-medium text-xs ..5x03:text-xs ability left-1/2 absolute .3x1:-bottom-20 ..5x01:-bottom-12 ..5x01:text-xs ..5x01:py-2 ..5x01:px-6 -bottom-16 py-4 px-8 ..5x03:px-8 ..5x03:py-4 ..5x03:-bottom-16 bg-white-80pe'>Подробнее</button>
							</div>

						</div>

						<div className='imgIBuy'>
							<Image
								className="object-cover"
								src={one}
								alt="specialOffersImg"
								height={760}
								width={710}
							/></div>

					</div>

					<div className="px-2">
						<div className='imgIBuy'>
							<Image
								className="object-cover"
								src={one}
								alt="specialOffersImg"
								height={760}
								width={710}
							/>
						</div>

					</div>

					<div className="flex flex-col justify-between px-2 h-full ">

						<div className="relative cartinka ..7x002:mb-0 ..7x001:mb-1">
							<Image
								className=" object-cover"
								src={two}
								alt="specialOffersImg"
								width={730}
								height={380}
							/>

							<p className="font-montserrat font-medium pr-5 ..6x2:text-3xl hidden ..5x2:block ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-sm">
								Кешбэк-марафон +  розыгрыш бьюти-гаджетов
							</p>
							<p className="font-montserrat ..6x2:text-3xl ..5x2:hidden ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-sm">
								Кешбэк-марафон + <br /> розыгрыш бьюти-гаджетов
							</p>
							<p className="font-montserrat ..6x2:text-3xl ..6x4:top-16 ..6x4:text-lg ..6x1:top-28 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-36 text-primary .1x01:top-28 .1x01:text-2xl ..5x03:text-4xl ..5x03:top-32 ..6x3:top-24 ..6x3:text-2xl ..7x11:top-16 ..7x1:text-sm ..7x1:top-14">
								6%, 7%, 8%
							</p>

							<div className="absolute left-48 top-40 .1x01:top-32 .1x01:left-36 .1x01:w-50 .1x01:h-20 ..5x03:top-36 ..5x03:left-48 ..5x03:w-auto ..5x03:h-auto ..6x1:top-32 ..6x3:left-40 ..6x3:top-28 ..6x3:w-36 ..6x3:h-20 ..6x4:top-16 ..6x4:w-28 ..7x1:w-20 ..7x1:left-36 ..7x1:top-14">
								<Image
									className="object-cover .1x01:object-contain ..5x03:object-cover ..6x3:object-contain"
									src={groups}
									alt="specialOffersImg"
									width={230}
									height={112}
								/>
							</div>
							<button className=" absolute left-5 top-52 flex justify-center items-center py-4 px-34px mr-6 font-montserrat font-medium text-xs transition-all bg-primary text-white .1x01:top-40 ..5x03:top-48 ..6x1:top-44 ..6x3:top-36 ..6x4:top-24 ..6x4:px-7 ..6x4:py-2 ..7x1:px-5 ..7x1:py-10px ..7x1:top-20">
								Подробнее
							</button>
						</div>

						<div className="relative cartinka">
							<Image
								className="object-cover"
								src={three}
								alt="specialOffersImg"
								width={710}
								height={380}
							/>

							<p className="font-montserrat font-medium ..6x2:text-3xl ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-base leading-120%">
								Бесплатная доставка <br /> от 1500 ₽
							</p>
							<p className="..6x2:text-3xl font-montserrat ..6x4:top-16 ..6x4:text-lg ..6x1:top-28 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-36 text-primary .1x01:top-28 .1x01:text-2xl ..5x03:text-4xl ..5x03:top-32 ..6x3:top-24 ..6x3:text-2xl ..7x11:top-16 ..7x1:text-sm ..7x1:top-14">
								новичкам июня
							</p>
							<button className="absolute ..7x1:px-5 ..7x1:py-10px  left-5 top-52 flex justify-center items-center py-4 px-34px mr-6 font-montserrat font-medium text-xs transition-all bg-primary text-white .1x01:top-40 ..5x03:top-48 ..6x1:top-44 ..6x3:top-36 ..6x4:top-24 ..6x4:px-7 ..6x4:py-2  ..7x1:top-20">
								Подробнее
							</button>
						</div>
					</div>

					<div className="flex flex-col justify-between px-2 h-full ">

						<div className="relative cartinka ..7x002:mb-0 ..7x001:mb-1">
							<Image
								className=" object-cover"
								src={two}
								alt="specialOffersImg"
								width={730}
								height={380}
							/>

							<p className="font-montserrat font-medium pr-5 ..6x2:text-3xl hidden ..5x2:block ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-sm">
								Кешбэк-марафон +  розыгрыш бьюти-гаджетов
							</p>
							<p className="font-montserrat ..6x2:text-3xl ..5x2:hidden ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-sm">
								Кешбэк-марафон + <br /> розыгрыш бьюти-гаджетов
							</p>
							<p className="font-montserrat ..6x2:text-3xl ..6x4:top-16 ..6x4:text-lg ..6x1:top-28 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-36 text-primary .1x01:top-28 .1x01:text-2xl ..5x03:text-4xl ..5x03:top-32 ..6x3:top-24 ..6x3:text-2xl ..7x11:top-16 ..7x1:text-sm ..7x1:top-14">
								6%, 7%, 8%
							</p>

							<div className="absolute left-48 top-40 .1x01:top-32 .1x01:left-36 .1x01:w-50 .1x01:h-20 ..5x03:top-36 ..5x03:left-48 ..5x03:w-auto ..5x03:h-auto ..6x1:top-32 ..6x3:left-40 ..6x3:top-28 ..6x3:w-36 ..6x3:h-20 ..6x4:top-16 ..6x4:w-28 ..7x1:w-20 ..7x1:left-36 ..7x1:top-14">
								<Image
									className="object-cover .1x01:object-contain ..5x03:object-cover ..6x3:object-contain"
									src={groups}
									alt="specialOffersImg"
									width={230}
									height={112}
								/>
							</div>
							<button className=" absolute left-5 top-52 flex justify-center items-center py-4 px-34px mr-6 font-montserrat font-medium text-xs transition-all bg-primary text-white .1x01:top-40 ..5x03:top-48 ..6x1:top-44 ..6x3:top-36 ..6x4:top-24 ..6x4:px-7 ..6x4:py-2 ..7x1:px-5 ..7x1:py-10px ..7x1:top-20">
								Подробнее
							</button>
						</div>

						<div className="relative cartinka">
							<Image
								className="object-cover"
								src={three}
								alt="specialOffersImg"
								width={710}
								height={380}
							/>

							<p className="font-montserrat font-medium ..6x2:text-3xl ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-base leading-120%">
								Бесплатная доставка <br /> от 1500 ₽
							</p>
							<p className="..6x2:text-3xl font-montserrat ..6x4:top-16 ..6x4:text-lg ..6x1:top-28 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-36 text-primary .1x01:top-28 .1x01:text-2xl ..5x03:text-4xl ..5x03:top-32 ..6x3:top-24 ..6x3:text-2xl ..7x11:top-16 ..7x1:text-sm ..7x1:top-14">
								новичкам июня
							</p>
							<button className="absolute ..7x1:px-5 ..7x1:py-10px  left-5 top-52 flex justify-center items-center py-4 px-34px mr-6 font-montserrat font-medium text-xs transition-all bg-primary text-white .1x01:top-40 ..5x03:top-48 ..6x1:top-44 ..6x3:top-36 ..6x4:top-24 ..6x4:px-7 ..6x4:py-2  ..7x1:top-20">
								Подробнее
							</button>
						</div>
					</div>
				</Slider>
			</section>
		</div>
	);
}
export default Buyers;

import Image from 'next/image';
import Slider from 'react-slick';
import one from '../../images/templates/1forBuyers.jpg';
import two from '../../images/templates/2forBuyres.jpg';
import three from '../../images/templates/3forBuyers.jpg';
import groups from '../../images/templates/groups.png';
import twoglos from '../../images/templates/2glos.jpg';

function Buyers() {
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
		<div className="relative">
			<div className="absolute left-0 bottom-0 ..6x2:w-40 ..6x2:h-40 .4x1:-bottom-32">

				<Image
					className="object-cover "
					src={twoglos}
					alt="specialOffersImg"
					width={237}
					height={237}
				/>

			</div>

			<section className="container__special relative pt-10 .4x1:pt-10 ..5x2:pt-32">
				<svg
					className="absolute ..6x2:h-36 ..6x2:mt-5 left-1/2 ability ..5x2:top-10 -top-8"
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
				<p className="text-center text-4xl italic mb-16 ..6x04:text-3xl z-10 ..6x04:mb-10 relative">
					ПОКУПАТЕЛЯМ
				</p>

				<Slider {...settings} className="">
					<div className="px-2">
						<Image
							className="object-cover"
							src={one}
							alt="specialOffersImg"
							height={760}
							width={710}
						/>
					</div>

					<div className="px-2">
						<Image
							className="object-cover"
							src={one}
							alt="specialOffersImg"
							height={760}
							width={710}
						/>
					</div>

					<div className="flex flex-col justify-between px-2 h-full ">

						<div className="relative cartinka">
							<Image
								className=" object-cover"
								src={two}
								alt="specialOffersImg"
								width={730}
								height={380}
							/>

							<p className="..6x2:text-3xl ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-sm">
								Кешбэк-марафон + <br /> розыгрыш бьюти-гаджетов
							</p>
							<p className="..6x2:text-3xl ..6x4:top-16 ..6x4:text-lg ..6x1:top-28 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-36 text-primary .1x01:top-28 .1x01:text-2xl ..5x03:text-4xl ..5x03:top-32 ..6x3:top-24 ..6x3:text-2xl ..7x11:top-16 ..7x1:text-sm ..7x1:top-14">
								6%, 7%, 8%
							</p>

							<div className="absolute left-48 top-40 .1x01:top-32 .1x01:left-36 .1x01:w-50 .1x01:h-20 ..5x03:top-36 ..5x03:left-48 ..5x03:w-auto ..5x03:h-auto ..6x1:top-32 ..6x3:left-40 ..6x3:top-28 ..6x3:w-36 ..6x3:h-20 ..6x4:top-16 ..6x4:w-28 ..7x1:w-20 ..7x1:left-36 ..7x1:top-12">
								<Image
									className="object-cover .1x01:object-contain ..5x03:object-cover ..6x3:object-contain"
									src={groups}
									alt="specialOffersImg"
									width={230}
									height={112}
								/>
							</div>
							<button className="absolute left-5 top-52 flex justify-center items-center py-4 px-34px mr-6 font-montserrat font-medium text-xs transition-all bg-primary text-white .1x01:top-40 ..5x03:top-48 ..6x1:top-44 ..6x3:top-36 ..6x4:top-24 ..6x4:px-7 ..6x4:py-2 ..7x1:px-5 ..7x1:py-1 ..7x1:top-20">
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

							<p className="..6x2:text-3xl ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-sm">
								Бесплатная доставка <br /> от 1500 ₽
							</p>
							<p className="..6x2:text-3xl ..6x4:top-16 ..6x4:text-lg ..6x1:top-28 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-36 text-primary .1x01:top-28 .1x01:text-2xl ..5x03:text-4xl ..5x03:top-32 ..6x3:top-24 ..6x3:text-2xl ..7x11:top-16 ..7x1:text-sm ..7x1:top-14">
								новичкам июня
							</p>
							<button className="absolute left-5 top-52 flex justify-center items-center py-4 px-34px mr-6 font-montserrat font-medium text-xs transition-all bg-primary text-white .1x01:top-40 ..5x03:top-48 ..6x1:top-44 ..6x3:top-36 ..6x4:top-24 ..6x4:px-7 ..6x4:py-2 ..7x1:px-5 ..7x1:py-1 ..7x1:top-20">
								Подробнее
							</button>
						</div>
					</div>

					<div className="flex flex-col justify-between px-2 h-full ">

						<div className="relative cartinka">
							<Image
								className=" object-cover"
								src={two}
								alt="specialOffersImg"
								width={730}
								height={380}
							/>

							<p className="..6x2:text-3xl ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-sm">
								Кешбэк-марафон + <br /> розыгрыш бьюти-гаджетов
							</p>
							<p className="..6x2:text-3xl ..6x4:top-16 ..6x4:text-lg ..6x1:top-28 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-36 text-primary .1x01:top-28 .1x01:text-2xl ..5x03:text-4xl ..5x03:top-32 ..6x3:top-24 ..6x3:text-2xl ..7x11:top-16 ..7x1:text-sm ..7x1:top-14">
								6%, 7%, 8%
							</p>

							<div className="absolute left-48 top-40 .1x01:top-32 .1x01:left-36 .1x01:w-50 .1x01:h-20 ..5x03:top-36 ..5x03:left-48 ..5x03:w-auto ..5x03:h-auto ..6x1:top-32 ..6x3:left-40 ..6x3:top-28 ..6x3:w-36 ..6x3:h-20 ..6x4:top-16 ..6x4:w-28 ..7x1:w-20 ..7x1:left-36 ..7x1:top-12">
								<Image
									className="object-cover .1x01:object-contain ..5x03:object-cover ..6x3:object-contain"
									src={groups}
									alt="specialOffersImg"
									width={230}
									height={112}
								/>
							</div>
							<button className="absolute left-5 top-52 flex justify-center items-center py-4 px-34px mr-6 font-montserrat font-medium text-xs transition-all bg-primary text-white .1x01:top-40 ..5x03:top-48 ..6x1:top-44 ..6x3:top-36 ..6x4:top-24 ..6x4:px-7 ..6x4:py-2 ..7x1:px-5 ..7x1:py-1 ..7x1:top-20">
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

							<p className="..6x2:text-3xl ..6x4:text-base ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 .1x01:top-6 ..5x2:text-2xl ..5x03:text-4xl ..6x3:text-2xl ..7x1:text-sm">
								Бесплатная доставка <br /> от 1500 ₽
							</p>
							<p className="..6x2:text-3xl ..6x4:top-16 ..6x4:text-lg ..6x1:top-28 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-36 text-primary .1x01:top-28 .1x01:text-2xl ..5x03:text-4xl ..5x03:top-32 ..6x3:top-24 ..6x3:text-2xl ..7x11:top-16 ..7x1:text-sm ..7x1:top-14">
								новичкам июня
							</p>
							<button className="absolute left-5 top-52 flex justify-center items-center py-4 px-34px mr-6 font-montserrat font-medium text-xs transition-all bg-primary text-white .1x01:top-40 ..5x03:top-48 ..6x1:top-44 ..6x3:top-36 ..6x4:top-24 ..6x4:px-7 ..6x4:py-2 ..7x1:px-5 ..7x1:py-1 ..7x1:top-20">
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

import Image from "next/image"
import Slider from "react-slick"
import onepartner from '../../images/templates/partner.jpg'
import twopartner from '../../images/templates/1partnergrow.png'
import PartnersButtonNext from "./PartnersButtonNext"
import PartnersButtonPrev from "./PartnersButtonPrev"
const Partners = () => {
	const settings = {
		dots: true,
		Infinity: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: < PartnersButtonPrev />,
		nextArrow: < PartnersButtonNext />
	}
	return (
		<div className="relative">
			<div className="absolute -left-0 ..6x2:w-32 ..6x2:h-32">
				<Image className="object-cover " src={twopartner} alt="specialOffersImg" />
			</div>
			<section className="container__special relative pb-10">

				<svg className="absolute ..6x2:h-36 ..6x2:mt-5 left-1/2 ability top-0 " width="184" height="183" viewBox="0 0 184 183" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M105.01 90.4961L71.0828 73.3172" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M105.01 90.496L91.1736 116.337" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
				<p className="mt-36 absolute left-1/2 -top-16 ability text-3xl italic mb-40">ПАРТНЕРАМ</p>
				<button className="text-primary border-2 absolute ..6x5:text-sm left-1/2 ability top-40  ..7x2:px-2  z-10 border-primary mb-8 py-4 px-10 transition-all hover:bg-primary hover:text-white ..6x6:text-xs ..7x2:text-10px ..7x2:py-2 ..7x2:px-7">Бизнес-возможности</button>
				<Slider {...settings} className='pt-64 ..7x2:pt-52 partners'>
					<section className="pb-20 ..7x2:pb-5 .1x1:pb-5">
						<div className="flex ..5x3:flex-col bg-gray">
							<div className="relative ..5x3:w-full">
								<Image className="object-cover" src={onepartner} alt="discountImg" />
								<p className="absolute top-10 left-10 text-white text-4xl ..6x04:text-3xl ..7x2:left-2 ..7x2:top-2 ..7x2:text-xl">Авто мечты ближе, чем <br /> кажется!</p>
							</div>
							<div className="p-10 ..7x2:p-2 relative">
								<p className="text-2xl mb-4 ..6x04:text-xl ..7x2:text-base">Авто за полцены <br /> совершенно <br /> <span className="italic">БЕСПЛАТНО</span></p>
								<small className="..7x2:text-xs">или бонусы сразу за две иномарки!</small>
								<button className="..7x1:px-4 ..7x2:-bottom-6 ..7x2:text-xs ..7x2:right-0 ..7x1:py-2  ..5x3:right-4 text-white hover:bg-white hover:text-primary transition-all absolute -bottom-4 right-0  z-20 bg-primary mb-8 py-4 px-10">Подробнее</button>

							</div>
						</div>
					</section>
					<section className="pb-20 ..7x2:pb-5 .1x1:pb-5">
						<div className="flex ..5x3:flex-col bg-gray">
							<div className="relative ..5x3:w-full">
								<Image className="object-cover" src={onepartner} alt="discountImg" />
								<p className="absolute top-10 left-10 text-white text-4xl ..6x04:text-3xl ..7x2:left-2 ..7x2:top-2 ..7x2:text-xl">Авто мечты ближе, чем <br /> кажется!</p>
							</div>
							<div className="p-10 ..7x2:p-2 relative">
								<p className="text-2xl mb-4 ..6x04:text-xl ..7x2:text-base">Авто за полцены <br /> совершенно <br /> <span className="italic">БЕСПЛАТНО</span></p>
								<small className="..7x2:text-xs">или бонусы сразу за две иномарки!</small>
								<button className="..7x1:px-4 ..7x2:-bottom-6 ..7x2:text-xs ..7x2:right-0 ..7x1:py-2  ..5x3:right-4 text-white hover:bg-white hover:text-primary transition-all absolute -bottom-4 right-0  z-20 bg-primary mb-8 py-4 px-10">Подробнее</button>

							</div>
						</div>
					</section>
				</Slider>

			</section>
		</div>

	)
}
export default Partners
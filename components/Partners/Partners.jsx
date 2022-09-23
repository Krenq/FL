import Image from "next/image"
import Slider from "react-slick"
import onepartner from '../../images/templates/partner.jpg'
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
		<section className="container__special relative pb-10">
			<p className="mt-36 text-center text-3xl italic mb-40 .1x1:mt-20 .1x1:mb-32 ..5x2:mt-14 ">ПАРТНЕРАМ</p>
			<button className="text-primary border-2 absolute ..6x5:text-sm left-1/2 ability top-24 .1x1:top-16 z-10 border-primary mb-8 py-4 px-10 transition-all hover:bg-primary hover:text-white">Бизнес-возможности</button>
			<Slider {...settings}>
				<section className="pb-20  .1x1:pb-5">
					<div className="flex ..5x3:flex-col bg-gray">
						<div className="relative ..5x3:w-full">
							<Image className="object-cover" src={onepartner} alt="discountImg" />
							<p className="absolute top-10 left-10 text-white text-4xl ..6x04:text-3xl">Авто мечты ближе, чем <br /> кажется!</p>
						</div>
						<div className="p-10 relative">
							<p className="text-2xl mb-4 ..6x04:text-xl">Авто за полцены <br /> совершенно <br /> <span className="italic">БЕСПЛАТНО</span></p>
							<small  >или бонусы сразу за две иномарки!</small>
							<button className="..7x1:px-4 ..7x1:py-2  ..5x3:right-4 text-white hover:bg-white hover:text-primary transition-all absolute -bottom-4 right-0  z-20 bg-primary mb-8 py-4 px-10">Подробнее</button>

						</div>
					</div>
				</section>
				<section className="pb-20  .1x1:pb-5">
					<div className="flex ..5x3:flex-col bg-gray">
						<div className="relative ..5x3:w-full">
							<Image className="object-cover" src={onepartner} alt="discountImg" />
							<p className="absolute top-10 left-10 text-white text-4xl ..6x04:text-3xl">Авто мечты ближе, чем <br /> кажется!</p>
						</div>
						<div className="p-10 relative">
							<p className="text-2xl mb-4 ..6x04:text-xl">Авто за полцены <br /> совершенно <br /> <span className="italic">БЕСПЛАТНО</span></p>
							<small  >или бонусы сразу за две иномарки!</small>
							<button className="..7x1:px-4 ..7x1:py-2  ..5x3:right-4 text-white hover:bg-white hover:text-primary transition-all absolute -bottom-4 right-0  z-20 bg-primary mb-8 py-4 px-10">Подробнее</button>

						</div>
					</div>
				</section>
			</Slider>

		</section>
	)
}
export default Partners
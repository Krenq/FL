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
			<p className="mt-36 text-center text-3xl italic mb-40">ПАРТНЕРАМ</p>
			<button className="text-primary border-2 absolute left-1/2 ability top-24 z-10 border-primary mb-8 py-4 px-10">Бизнес-возможности</button>
			<Slider {...settings}>
				<section className="pb-20 ">
					<div className="flex bg-gray">
						<div className="relative">
							<Image className="object-cover" src={onepartner} alt="discountImg" />
							<p className="absolute top-10 left-10 text-white text-4xl">Авто мечты ближе, чем <br /> кажется!</p>
						</div>
						<div className="p-10 relative">
							<p className="text-2xl mb-4">Авто за полцены <br /> совершенно <br /> <span className="italic">БЕСПЛАТНО</span></p>
							<small  >или бонусы сразу за две иномарки!</small>
							<button className="text-white  absolute bottom-0 -right-20 z-20 bg-primary mb-8 py-4 px-10">Подробнее</button>

						</div>
					</div>

				</section>
				<p>31312</p>
			</Slider>

		</section>
	)
}
export default Partners
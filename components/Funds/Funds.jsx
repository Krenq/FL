import Image from "next/image"
import Slider from "react-slick"
import one from '../../images/templates/1funds.jpg'
import two from '../../images/templates/2Funds.jpg'
import tree from '../../images/templates/3funds.jpg'
import DiscountsButtonsSliderNext from "../DiscounstsButtonsSliderNext/DiscountsButtonsSliderNext"
import DiscounstsButtonsSliderPrev from "../DiscounstsButtonsSliderNext/DiscountsButtonsSliderPrev"
const Funds = () => {

	const settings = {
		dots: true,
		Infinity: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <DiscountsButtonsSliderNext />,
		prevArrow: <DiscounstsButtonsSliderPrev />

	}
	return (
		<section className=' bg-gray-light'>
			<p className="text-center font-medium text-xl pt-10">Что-то</p>
			<p className="text-center font-medium text-2xl italic mb-4">ПРО УХОДОВЫЕ СРЕДСТВА</p>
			<p className="text-center text-lg mb-10">Которые не так очевидны в каталоге, например, подкатегории, <br /> наборы и идеи подарков</p>
			<Slider {...settings}>

				<div className="pb-20">
					<div className="flex justify-center ..6x4:flex-wrap ">
						<div className="..6x4:h-80 relative cursor-pointer transition-all hover:text-primary hover:opacity-90">
							<Image className="object-cover" src={one} alt="discountImg" />
							<p className="absolute bottom-10 left-10 text-xl font-medium">Сыворотки</p>
							<small className="flex items-center absolute bottom-10 right-10 z-10">Смотреть<svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
							</svg></small>
						</div>
						<div>
							<div className="relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image className="object-cover" src={two} alt="discountImg" />
								<p className="absolute bottom-10 left-10 text-xl font-medium">Макияж</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10">Смотреть<svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
								</svg></small>
							</div>
							<div className="relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image className="object-cover" src={tree} alt="discountImg" />
								<p className="absolute bottom-10 left-10 text-xl font-medium z-10">Идеи подарков</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10">Смотреть<svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
								</svg></small>
							</div>
						</div>
					</div>

				</div>
				<div className="pb-20">
					<div className="flex justify-center">
						<div className="..6x4:h-80 relative cursor-pointer transition-all hover:text-primary hover:opacity-90">
							<Image className="object-cover" src={one} alt="discountImg" />
							<p className="absolute bottom-10 left-10 text-xl font-medium">Сыворотки</p>
							<small className="flex items-center absolute bottom-10 right-10 z-10">Смотреть<svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
							</svg></small>
						</div>
						<div className="..6x4:flex">
							<div className="..6x4:h-80 relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image className="object-cover" src={two} alt="discountImg" />
								<p className="absolute bottom-10 left-10 text-xl font-medium">Макияж</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10">Смотреть<svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
								</svg></small>
							</div>
							<div className="..6x4:h-80 relative transition-all hover:text-primary hover:opacity-90 cursor-pointer">
								<Image className="object-cover" src={tree} alt="discountImg" />
								<p className="absolute bottom-10 left-10 text-xl font-medium z-10">Идеи подарков</p>
								<small className="flex items-center absolute bottom-10 right-10 z-10">Смотреть<svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
								</svg></small>
							</div>
						</div>
					</div>

				</div>

			</Slider>
		</section>
	)
}
export default Funds
import Image from "next/image"
import Slider from "react-slick"

import imgDiscount from '../../images/templates/discountImg.jpg'
import imgProduct from '../../images/templates/prdesc.png'

import DiscountsButtonsSliderNext from "../DiscounstsButtonsSliderNext/DiscountsButtonsSliderNext"
import DiscounstsButtonsSliderPrev from "../DiscounstsButtonsSliderNext/DiscountsButtonsSliderPrev"

const DiscountsSlider = () => {
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
		<div className="bg-white w-full ">
			<Slider {...settings}>
				<section className="w-full ">
					<div className="flex ..5x2:flex-col">
						<div className="flex-1 relative flex justify-center align-bottom ">
							<div className=" hidden ..5x2:block ..5x2:absolute img ..5x2:w-full ..5x2:h-410px ..5x2:top-0 ..5x2:left-0">

							</div>
							<div className="mt-52 ..7x2:w-40 ..7x2:h-40 ..6x6:mt-1 ..6x3:w-44 ..6x3:mb-15 ..6x3:mt-10 ..5x1:w-56 .1x1:w-64 .5x1:mt-36 .4x1:w-80 .2x1:w-72 ..5x2:mt-20 ..5x1:mb-16">
								<Image className="object-cover" src={imgProduct} alt="discountImg" />

								<div className=" bg-gray ..7x2:px-3 ..7x2:py-1 .4x1:top-52  .5x1:left-96 .5x1:top-1/2 px-4 py-2 text-lg moreF rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">+
									<section className="..5x2:p-2 ..7x2:!w-72 ..7x2:left-1/2 seesh ..6x6:-left-36 ..6x6:top-0 opacity-100 seemore ..5x5:w-f ..6x1:-left-32   ..5x2:w-96  .5x1:-left-52   ..5x2:left-12 ..5x2:-top-28   absolute hidden text-black -top-52  rounded-lg w-410px p-6 rounded-xlbg-white info cursor-default">
										<span className="flex">
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
										</span>
										<div className="flex">
											<p className="font-bold text-lg w-72 ..7x2:w-52 mt-3 ..5x5:w-64 ..5x5:text-base">Шампунь - активатор роста Bio Rehab</p>
											<div>
												<p className="..5x5:text-base text-label-pink-2 text-lg mt-3">₽ 764.00</p>
												<p className="..5x5:text-base text-black text-lg line-through">₽ 764.00</p>
											</div>
										</div>
										<div className="flex justify-between">
											<p className="text-black-70pe text-base ..5x5:text-sm">Сила - в длине</p>
											<p className="text-lg ..5x5:text-base text-label-orange mr-2">64 De</p>
										</div>
										<div className="flex justify-between items-center mt-3 ">
											<button className="font-medium text-base relative z-10 hover:text-primary transition-all ..5x5:text-sm">Подробнее<div className="bg-primary absolute bottom-1 opacity-40 h-6px w-full"></div></button>
											<button className="..5x5:py-2 ..5x5:px-3 text-sm px-4 py-3 text-primary bg-gray flex items-center  transition-all hover:opacity-50"><svg className="mr-2" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z" fill="#337202" />
											</svg> Добавить в корзину</button>
										</div>
									</section>
								</div>
								<div className="moreT ..7x2:px-3 ..7x2:py-1 ..5x1:left-48 .2x1:left-56 z-0 .4x1:top-80 .5x1:left-72 bg-gray px-4 py-2 text-lg    rounded-full absolute hover:bg-nude-3 hover:text-white cursor-pointer">+

								</div>
								<div className="moreTr ..7x2:px-3 ..7x2:py-1 .4x1:top-80  bg-gray px-4 py-2 text-lg   rounded-full absolute hover:bg-nude-3 hover:text-white cursor-pointer">+

								</div>

							</div>
						</div>
						<div className="flex-1 ..5x2:flex ..5x2:justify-center ..5x2:-mt-2">
							<Image className="object-cover" src={imgDiscount} alt="discountImg" />
						</div>
					</div>
				</section>
				<section className="w-full ">
					<div className="flex ..5x2:flex-col">
						<div className="flex-1 relative flex justify-center align-bottom ">
							<div className=" hidden ..5x2:block ..5x2:absolute img ..5x2:w-full ..5x2:h-410px ..5x2:top-0 ..5x2:left-0">

							</div>
							<div className="mt-52 ..7x2:w-40 ..7x2:h-40 ..6x6:mt-1 ..6x3:w-44 ..6x3:mb-15 ..6x3:mt-10 ..5x1:w-56 .1x1:w-64 .5x1:mt-36 .4x1:w-80 .2x1:w-72 ..5x2:mt-20 ..5x1:mb-16">
								<Image className="object-cover" src={imgProduct} alt="discountImg" />

								<div className=" bg-gray ..7x2:px-3 ..7x2:py-1 .4x1:top-52  .5x1:left-96 .5x1:top-1/2 px-4 py-2 text-lg moreF rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">+
									<section className="..5x2:p-2 ..7x2:!w-72 ..7x2:left-1/2 seesh ..6x6:-left-36 ..6x6:top-0 opacity-100 seemore ..5x5:w-f ..6x1:-left-32   ..5x2:w-96  .5x1:-left-52   ..5x2:left-12 ..5x2:-top-28   absolute hidden text-black -top-52  rounded-lg w-410px p-6 rounded-xlbg-white info cursor-default">
										<span className="flex">
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
											<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
											</svg>
										</span>
										<div className="flex">
											<p className="font-bold text-lg w-72 ..7x2:w-52 mt-3 ..5x5:w-64 ..5x5:text-base">Шампунь - активатор роста Bio Rehab</p>
											<div>
												<p className="..5x5:text-base text-label-pink-2 text-lg mt-3">₽ 764.00</p>
												<p className="..5x5:text-base text-black text-lg line-through">₽ 764.00</p>
											</div>
										</div>
										<div className="flex justify-between">
											<p className="text-black-70pe text-base ..5x5:text-sm">Сила - в длине</p>
											<p className="text-lg ..5x5:text-base text-label-orange mr-2">64 De</p>
										</div>
										<div className="flex justify-between items-center mt-3 ">
											<button className="font-medium text-base relative z-10 hover:text-primary transition-all ..5x5:text-sm">Подробнее<div className="bg-primary absolute bottom-1 opacity-40 h-6px w-full"></div></button>
											<button className="..5x5:py-2 ..5x5:px-3 text-sm px-4 py-3 text-primary bg-gray flex items-center  transition-all hover:opacity-50"><svg className="mr-2" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z" fill="#337202" />
											</svg> Добавить в корзину</button>
										</div>
									</section>
								</div>
								<div className="moreT ..7x2:px-3 ..7x2:py-1 ..5x1:left-48 .2x1:left-56 z-0 .4x1:top-80 .5x1:left-72 bg-gray px-4 py-2 text-lg    rounded-full absolute hover:bg-nude-3 hover:text-white cursor-pointer">+

								</div>
								<div className="moreTr ..7x2:px-3 ..7x2:py-1 .4x1:top-80  bg-gray px-4 py-2 text-lg   rounded-full absolute hover:bg-nude-3 hover:text-white cursor-pointer">+

								</div>

							</div>
						</div>
						<div className="flex-1 ..5x2:flex ..5x2:justify-center ..5x2:-mt-2">
							<Image className="object-cover" src={imgDiscount} alt="discountImg" />
						</div>
					</div>
				</section>
			</Slider>

		</div>
	)
}
export default DiscountsSlider
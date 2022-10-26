import Image from 'next/image';
import { useState } from 'react';

export default function DiscountSliderItem({ imgProd, img }) {
	const [showProducts, setShowProducts] = useState({
		central: false
	})

	const showCentral = () => {
		if (window.innerWidth > 450) return
		setShowProducts({ ...showProducts, central: !showProducts.central })
	}

	return (
		<section className="w-full ">
			<div className="flex ..5x2:flex-col phoneOne">
				<div className="discountImgWrap w-50% ..5x2:w-full ..5x2:bg-trava ..5x2:bg-no-repeat ..5x2:bg-cover relative flex justify-center">
					<div className="relative flex items-center ..7x11:ml-3">
						<div className='imgDiscount'>
							<Image
								className="object-cover"

								src={imgProd}
								alt="discountImg"
							/>
						</div>


						<div onClick={showCentral} className=" bg-gray ..5x2:p-3 ..5x2:h-8 ..5x2:w-8   p-4 z-20 headerAbility text-lg moreF rounded-full absolute cursor-pointer  hover:bg-label-green">
							<svg className='plusDiscItem' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
							</svg>

							<section className="absolute ..5x2:top-0 ..5x2:-left-40 ..6x6:!hidden hidden flex-col justify-between text-black -top-40 font-montserrat rounded-lg w-390px h-200px p-4 info cursor-default">
								<span className="flex">
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
									<svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
											stroke="#337202"
										/>
									</svg>
								</span>
								<div className="flex flex-row justify-between">
									<p className=" font-semibold text-sm leading-140% w-250px mt-3">
										Шампунь - активатор роста Bio Rehab
									</p>
									<div>
										<p className=" text-label-pink-2 font-medium text-base mt-3 whitespace-nowrap">
											₽ 764.00
										</p>
										<p className=" text-black font-medium text-base line-through whitespace-nowrap">
											₽ 764.00
										</p>
									</div>
								</div>
								<div className="flex justify-between">
									<p className=" text-gray-quick-silver font-normal leading-140% text-13px">
										Сила - в длине
									</p>
									<p className="font-lora  text-base font-normal leading-140% text-label-orange">
										64 De
									</p>
								</div>
								<div className="flex justify-between items-center mt-3 ">
									<button className="font-medium px-2 flex justify-center text-black text-13px leading-100% relative z-10 hover:text-primary transition-all">
										Подробнее
										<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
									</button>
									<button className="..7x01:w-40 font-medium text-xs leading-100% px-4 py-3 text-primary bg-gray flex items-center transition-all hover:opacity-50">
										<svg
											className="mr-2"
											width="16"
											height="20"
											viewBox="0 0 16 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z"
												fill="#337202"
											/>
										</svg>{' '}
										Добавить в корзину
									</button>
								</div>
							</section>
						</div>
						<div className="bg-gray onD moreF ..5x2:p-3 ..5x2:h-8 ..5x2:w-8 ..5x2:left-8     ..5x2:top-57.5%     p-4  text-lg rounded-full absolute opacity-90 top-50% left-24  transition-all duration-300  hover:bg-label-green   cursor-pointer">
							<svg width="10" className='plusDiscItem' height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
							</svg>

						</div>
						<div className="..5x2:p-3 ..5x2:h-8 ..5x2:w-8 bg-gray twD moreF ..5x2:right-8   p-4   ..5x2:top-57.5% left-auto text-lg rounded-full absolute opacity-90 top-50% right-20 transition-all duration-300 hover:bg-label-green   cursor-pointer">
							<svg className='plusDiscItem' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
							</svg>

						</div>
					</div>



					<section className={`${showProducts.central ? '!block' : ""} bg-white w-full z-50 absolute top-40 left-0   hidden flex-col justify-between text-black   font-montserrat    h-200px p-6 info cursor-default`}>
						<button onClick={showCentral} className='absolute right-4 top-4'>
							<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L1 9M1 1L9 9" stroke="black" strokeWidth="1.5" strokeLinecap="round"></path></svg>

						</button>
						<span className="flex">
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
						</span>
						<div className="flex flex-row justify-between">
							<p className=" font-semibold font-montserrat text-13px leading-140% w-250px mt-3">
								Шампунь - активатор роста Bio Rehab
							</p>
							<div>
								<p className=" text-label-pink-2 font-medium text-11px mt-3 whitespace-nowrap">
									₽ 764.00
								</p>
								<p className=" text-black font-medium text-11px line-through whitespace-nowrap">
									₽ 764.00
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<p className=" text-gray-quick-silver font-montserrat font-normal leading-140% text-11px">
								Сила - в длине
							</p>
							<p className=" text-11px font-normal font-lora leading-140% text-label-orange">
								64 De
							</p>
						</div>
						<div className="flex justify-between items-center mt-3 ">
							<button className="font-medium font-montserrat text-black text-xs px-2 flex justify-center leading-100% relative z-10 hover:text-primary transition-all">
								Подробнее
								<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
							</button>
							<button className="  font-medium  text-xs font-montserrat leading-100% px-6 py-2.5 text-primary bg-gray-light2 flex items-center transition-all hover:opacity-50">
								<svg className='-mt-0.5 mr-1' width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M6 1.74998C5.19458 1.74998 4.54167 2.4029 4.54167 3.20831V3.49998H7.45833V3.20831C7.45833 2.4029 6.80542 1.74998 6 1.74998ZM8.625 3.49998V3.20831C8.625 1.75857 7.44975 0.583313 6 0.583313C4.55025 0.583313 3.375 1.75857 3.375 3.20831V3.49998H1.91667C1.27233 3.49998 0.75 4.02231 0.75 4.66665V12.25C0.75 12.8943 1.27233 13.4166 1.91667 13.4166H10.0833C10.7277 13.4166 11.25 12.8943 11.25 12.25V4.66665C11.25 4.02231 10.7277 3.49998 10.0833 3.49998H8.625ZM7.45833 4.66665V5.24998C7.45833 5.57215 7.7195 5.83331 8.04167 5.83331C8.36383 5.83331 8.625 5.57215 8.625 5.24998V4.66665H10.0833V12.25H1.91667V4.66665H3.375V5.24998C3.375 5.57215 3.63617 5.83331 3.95833 5.83331C4.2805 5.83331 4.54167 5.57215 4.54167 5.24998V4.66665H7.45833Z" stroke="#337202" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>{' '}
								Добавить
							</button>
						</div>
					</section>




				</div>
				<div className="discountImgWrap cartinka cartI  w-50% ..5x2:w-full ..5x2:flex ..5x2:justify-center">
					<Image
						className="object-cover"
						src={img}

						alt="discountImg"
					/>
				</div>
			</div>
		</section >
	);
}

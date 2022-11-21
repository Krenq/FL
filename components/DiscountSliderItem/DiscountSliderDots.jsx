import Image from "next/image"
import DiscSubItem from "./DiscSubItem"
import imgProduct from '../../images/templates/productOneDiscSl.png';

import imgDiscount from '../../images/templates/discountImg.jpg';
const DiscounstSliderDots = ({ title, imgSix, imgTen, imgEight, rightImg, imgFive, imgTree, discSubs, imgOne, isOneIMG, subTitle, one, two, tree, four, five, six, seven, eight, nine, ten }) => {
	return (
		<>
			<section className="w-full ..5x2:hidden h-800px discSlider">
				<div className="flex h-full ..5x2:flex-col">
					<div className="discountImgWrap w-50%  h-full ..5x2:bg-trava ..5x2:bg-no-repeat ..5x2:bg-cover relative flex justify-center">
						{isOneIMG && <div className="imgDiscount absolute !bottom-0">
							<Image
								className="object-cover"
								src={isOneIMG}
								alt="discountImg"
							/>
						</div>}


						<div className='absolute left-1/2 ability  top-80px w-650'>
							<p className="font-montserrat font-medium text-26px text-center mb-6 .2x1:mb-1">{title}</p>
							<p className="mb-2 font-montserrat text-gray-quick-silver text-center">{subTitle}</p>
							<div className='flex flex-wrap .2x1:m-auto w-550 justify-center'>
								{discSubs && discSubs.map((titleSub, i) => <DiscSubItem key={i} title={titleSub} />)}


							</div>

							<div className=" mt-7 .2x1:-mt-6 w-full flex-wrap absolute   flex">
								<div className="w-52 relative h-52 flex items-center justify-center">
									{one && <div className="bg-white-80pe z-10 rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{two && <div className="absolute z-10 -right-6 bg-white-80pe rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>

									}
									{imgOne && <div className="absolute z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgOne} />
									</div>
									}

								</div>
								<div className="w-52 relative h-52 flex items-center justify-center">
									{tree && <div className="bg-white-80pe z-10  rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgTree && <div className="absolute z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgTree} />
									</div>
									}
									{four && <div className="absolute z-10  -right-6 bg-white-80pe rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}


								</div>
								<div className="w-52   h-52 flex items-center justify-center">
									{five && <div className="bg-white-80pe z-10  rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgFive && <div className="absolute z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgFive} />
									</div>
									}

								</div>
								<div className="w-52 relative h-52 flex items-center justify-center">
									{six && <div className="bg-white-80pe z-10  rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgSix && <div className="absolute z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgSix} />
									</div>
									}
									{seven && <div className="absolute z-10  -right-6 bg-white-80pe rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}

								</div>
								<div className="w-52 relative h-52 flex items-center justify-center">
									{eight && <div className="bg-white-80pe z-10  rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgEight && <div className="absolute z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgEight} />
									</div>
									}
									{nine && <div className="absolute z-10  -right-6 bg-white-80pe rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}


								</div>
								<div className="w-52 h-52 flex items-center justify-center">
									{ten && <div className="bg-white-80pe z-10 rounded-full h-12 w-12 flex items-center justify-center">
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11Z" fill="black" />
										</svg>

									</div>}
									{imgTen && <div className="absolute z-0 .3x1:h-40 .3x1:w-40">
										<Image src={imgTen} />
									</div>
									}

								</div>

							</div>
						</div>

					</div>

					<div className="discountImgWrap cartI z-20 cartinka w-50% h-full ">
						<Image
							className=" object-cover "
							src={rightImg}

							alt="discountImg"
							quality={100}
						/>
					</div>
				</div>
			</section>


		</>
	)
}
export default DiscounstSliderDots
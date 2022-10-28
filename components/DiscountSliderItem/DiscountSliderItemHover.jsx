const DiscountSliderItemHover = ({ showProducts, showCentral, title, price, oldPrice, de, subTitle }) => {
	return (

		<section className={`${showProducts ? '!block' : ""} bg-white w-full z-50 fixed bottom-28 ..6x03:bottom-24 left-0 ..6x5:bottom-24 ..6x6:bottom-16 hidden flex-col justify-between text-black   font-montserrat    h-200px ..6x03:p-6  p-10 pt-5 info cursor-default`}>
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
				<p className=" font-semibold font-montserrat ..6x03:text-13px   leading-140% w-250px mt-3">
					{title}
				</p>
				<div>
					<p className=" text-label-pink-2 font-medium ..6x03:text-11px mt-3 whitespace-nowrap">
						₽ {price}
					</p>
					<p className=" text-black font-medium ..6x03:text-11px line-through whitespace-nowrap">
						₽ {oldPrice}
					</p>
				</div>
			</div>
			<div className="flex justify-between">
				<p className=" text-gray-quick-silver font-montserrat font-normal leading-140% text-11px">
					{subTitle}
				</p>
				<p className=" ..6x03:text-11px font-normal font-lora leading-140% text-label-orange">
					{de} De
				</p>
			</div>
			<div className="flex justify-between items-center mt-3 ">
				<button className="font-medium font-montserrat text-black ..6x03:text-xs px-2 flex justify-center leading-100% relative z-10 hover:text-primary transition-all">
					Подробнее
					<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
				</button>
				<button className="  font-medium  ..6x03:text-xs font-montserrat leading-100% px-6 py-2.5 text-primary bg-gray-light2 flex items-center transition-all hover:opacity-50">
					<svg className='-mt-0.5 mr-1 ..6x03:h-3 ..6x03:w-3 ..5x2:h-4 ..5x2:w-4' width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M6 1.74998C5.19458 1.74998 4.54167 2.4029 4.54167 3.20831V3.49998H7.45833V3.20831C7.45833 2.4029 6.80542 1.74998 6 1.74998ZM8.625 3.49998V3.20831C8.625 1.75857 7.44975 0.583313 6 0.583313C4.55025 0.583313 3.375 1.75857 3.375 3.20831V3.49998H1.91667C1.27233 3.49998 0.75 4.02231 0.75 4.66665V12.25C0.75 12.8943 1.27233 13.4166 1.91667 13.4166H10.0833C10.7277 13.4166 11.25 12.8943 11.25 12.25V4.66665C11.25 4.02231 10.7277 3.49998 10.0833 3.49998H8.625ZM7.45833 4.66665V5.24998C7.45833 5.57215 7.7195 5.83331 8.04167 5.83331C8.36383 5.83331 8.625 5.57215 8.625 5.24998V4.66665H10.0833V12.25H1.91667V4.66665H3.375V5.24998C3.375 5.57215 3.63617 5.83331 3.95833 5.83331C4.2805 5.83331 4.54167 5.57215 4.54167 5.24998V4.66665H7.45833Z" stroke="#337202" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>{' '}
					Добавить
				</button>
			</div>
		</section>
	)
}
export default DiscountSliderItemHover
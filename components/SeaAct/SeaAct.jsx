import Image from 'next/image'
import Slider from 'react-slick'
import one from '../../images/templates/1seaAct.jpg'
import two from '../../images/templates/2seaAct.jpg'
import tree from '../../images/templates/3seaAct.jpg'
import four from '../../images/templates/4seaAct.jpg'
import five from '../../images/templates/5seaAct.jpg'
import six from '../../images/templates/6seaAct.jpg'
import sev from '../../images/templates/7seaAct.jpg'
const SeaAct = () => {
	const settings = {
		dots: true,
		Infinity: true,
		speed: 500,

		responsive: [
			{
				breakpoint: 100000,
				settings: 'unslick'
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			,
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}

		]

	}
	return (
		<div className='bg-gray-light'>
			<section className="container__special  pt-14 pb-24 ..5x2:pb-10">
				<p className='text-center font-medium text-2xl ..6x04:text-xl'>Каждый сезон</p>
				<p className='text-center font-medium text-3xl italic ..6x04:text-2xl'>НОВЫЕ АКЦИИ</p>
				<p className="mb-9 text-center mt-2">Покупай в наборах и получай подарок</p>
				<div className='flex justify-center '>
					<div className='relative .3x1:hidden'>
						<div className='absolute top-32 left-10 z-10'>
							<p className='text-2xl text-primary'>АКЦИЯ ВЕСНЫ</p>
							<p className='text-3xl font-medium'>Получай подарки за покупки</p>
							<div className=" absolute -left-4 top-24 bg-white px-2 text-primary border-2 border-primary font-normal text-lg font-montserrat mx-3  ">
								17d : 09h : 10m : 20s
							</div>
						</div>
						<p className='absolute bottom-10 cursor-pointer z-10 right-10 flex items-center text-sm transition-all hover:text-primary'>Смотреть <svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
						</svg>
						</p>
						<Image className="object-cover " height='1400px' width='1146px' src={one} alt="productsPhoto" />
					</div>
					<Slider {...settings} className='actionsfl flex flex-wrap .3x1:w-2/3 ..5x2:w-full .1x1:w-4/5 .3x1:justify-center'>
						<div className="relative bg-white m-2 mt-0 cursor-pointer item transition-all hover:scale-95 hover:text-primary">
							<div className="absolute items-center z-10 flex ">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z" stroke="#C5C1AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<small className="font-bold text-2xl ml-2 text-gray-quick-silver">4=5</small>
								<svg className="absolute top-2 -right-40" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.5016 0.500008L15.5013 0.500008C14.706 0.498642 13.9214 0.682885 13.2098 1.03808C12.4982 1.39328 11.8793 1.90963 11.4023 2.54606L11.0028 3.07918L10.6025 2.54661C9.95636 1.6869 9.05622 1.05215 8.02947 0.732181C7.00272 0.412208 5.90134 0.423218 4.88119 0.763651C3.86104 1.10408 2.97377 1.7567 2.34494 2.62916C1.71614 3.50157 1.3776 4.54961 1.3772 5.62501L15.5016 0.500008ZM15.5016 0.500008C16.8605 0.501548 18.1634 1.04206 19.1243 2.00295C20.0851 2.96385 20.6257 4.26666 20.6272 5.62557C20.627 8.2878 19.0828 11.1106 15.857 14.0139C14.3981 15.3216 12.8116 16.4794 11.1213 17.4698C11.0847 17.4896 11.0438 17.5 11.0022 17.5C10.9594 17.5 10.9173 17.489 10.88 17.4681C10.6952 17.3646 8.29401 16.0012 5.94567 13.8396M15.5016 0.500008L5.94567 13.8396M5.94567 13.8396C3.57616 11.6585 1.37728 8.77145 1.3772 5.62518L5.94567 13.8396Z" fill="white" stroke="#DCE0DF" />
								</svg>

							</div>
							<Image className="object-cover" src={two} alt="specialOffersImg" />
							<div>
								<p className='absolute left-4 top-48 text-sm flex items-center text-gray-quick-silver'> <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
									<path d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z" fill="#DBDCDA" />
								</svg>
									Состав</p>
								<p className="absolute right-4 flex items-center top-48 text-xs text-gray-quick-silver">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66667 9.33333L9 5" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66666 9.33333L5.33333 9" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									1.4 Б</p>
							</div>
							<p className='text-xs text-center text-gray-quick-silver tracking-widest'>До 15.06.22</p>
							<p className="text-xs text-center  tracking-widest">ДЛЯ СЕНСАЦИОННОГО <br />  УВЛАЖНЕНИЯ <br />  И ВОССТАНОВЛЕНИЯ КОЖИ</p>
							<div className="flex pl-16 mt-2">
								<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">₽ 920.00</p>
								<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
							</div>
							<button className='bg-gray ..6x04:text-xs text-primary py-3 px-16 mt-2 text-sm hover:text-black transition-all hover:bg-gray-light2'>+ Добавить в заказ</button>
						</div>
						<div className="relative bg-white m-2 mt-0 cursor-pointer item transition-all hover:scale-95 hover:text-primary">
							<div className="absolute items-center z-10 flex ">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z" stroke="#C5C1AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<small className="font-bold text-2xl ml-2 text-gray-quick-silver">4=5</small>



								<svg className="absolute top-2 -right-40" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.5016 0.500008L15.5013 0.500008C14.706 0.498642 13.9214 0.682885 13.2098 1.03808C12.4982 1.39328 11.8793 1.90963 11.4023 2.54606L11.0028 3.07918L10.6025 2.54661C9.95636 1.6869 9.05622 1.05215 8.02947 0.732181C7.00272 0.412208 5.90134 0.423218 4.88119 0.763651C3.86104 1.10408 2.97377 1.7567 2.34494 2.62916C1.71614 3.50157 1.3776 4.54961 1.3772 5.62501L15.5016 0.500008ZM15.5016 0.500008C16.8605 0.501548 18.1634 1.04206 19.1243 2.00295C20.0851 2.96385 20.6257 4.26666 20.6272 5.62557C20.627 8.2878 19.0828 11.1106 15.857 14.0139C14.3981 15.3216 12.8116 16.4794 11.1213 17.4698C11.0847 17.4896 11.0438 17.5 11.0022 17.5C10.9594 17.5 10.9173 17.489 10.88 17.4681C10.6952 17.3646 8.29401 16.0012 5.94567 13.8396M15.5016 0.500008L5.94567 13.8396M5.94567 13.8396C3.57616 11.6585 1.37728 8.77145 1.3772 5.62518L5.94567 13.8396Z" fill="white" stroke="#DCE0DF" />
								</svg>

							</div>
							<Image className="object-cover" src={tree} alt="specialOffersImg" />
							<div>
								<p className='absolute left-4 top-48 text-sm flex items-center text-gray-quick-silver'> <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
									<path d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z" fill="#DBDCDA" />
								</svg>
									Состав</p>
								<p className="absolute right-4 flex items-center top-48 text-xs text-gray-quick-silver">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66667 9.33333L9 5" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66666 9.33333L5.33333 9" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									1.4 Б</p>
							</div>
							<p className='text-xs text-center text-gray-quick-silver tracking-widest'>До 15.06.22</p>
							<p className="text-xs text-center  tracking-widest">ДЛЯ СЕНСАЦИОННОГО <br />  УВЛАЖНЕНИЯ <br />  И ВОССТАНОВЛЕНИЯ КОЖИ</p>
							<div className="flex pl-16 mt-2">
								<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">₽ 920.00</p>
								<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
							</div>
							<button className='bg-gray ..6x04:text-xs text-primary py-3 px-16 mt-2 text-sm hover:text-black transition-all hover:bg-gray-light2'>+ Добавить в заказ</button>
						</div>
						<div className="relative bg-white m-2 mt-0 cursor-pointer item transition-all hover:scale-95 hover:text-primary">
							<div className="absolute items-center z-10 flex ">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z" stroke="#C5C1AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<small className="font-bold text-2xl ml-2 text-gray-quick-silver">4=5</small>



								<svg className="absolute top-2 -right-40" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.5016 0.500008L15.5013 0.500008C14.706 0.498642 13.9214 0.682885 13.2098 1.03808C12.4982 1.39328 11.8793 1.90963 11.4023 2.54606L11.0028 3.07918L10.6025 2.54661C9.95636 1.6869 9.05622 1.05215 8.02947 0.732181C7.00272 0.412208 5.90134 0.423218 4.88119 0.763651C3.86104 1.10408 2.97377 1.7567 2.34494 2.62916C1.71614 3.50157 1.3776 4.54961 1.3772 5.62501L15.5016 0.500008ZM15.5016 0.500008C16.8605 0.501548 18.1634 1.04206 19.1243 2.00295C20.0851 2.96385 20.6257 4.26666 20.6272 5.62557C20.627 8.2878 19.0828 11.1106 15.857 14.0139C14.3981 15.3216 12.8116 16.4794 11.1213 17.4698C11.0847 17.4896 11.0438 17.5 11.0022 17.5C10.9594 17.5 10.9173 17.489 10.88 17.4681C10.6952 17.3646 8.29401 16.0012 5.94567 13.8396M15.5016 0.500008L5.94567 13.8396M5.94567 13.8396C3.57616 11.6585 1.37728 8.77145 1.3772 5.62518L5.94567 13.8396Z" fill="white" stroke="#DCE0DF" />
								</svg>

							</div>
							<Image className="object-cover" src={four} alt="specialOffersImg" />
							<div>
								<p className='absolute left-4 top-48 text-sm flex items-center text-gray-quick-silver'> <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
									<path d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z" fill="#DBDCDA" />
								</svg>
									Состав</p>
								<p className="absolute right-4 flex items-center top-48 text-xs text-gray-quick-silver">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66667 9.33333L9 5" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66666 9.33333L5.33333 9" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									1.4 Б</p>
							</div>
							<p className='text-xs text-center text-gray-quick-silver tracking-widest'>До 15.06.22</p>
							<p className="text-xs text-center  tracking-widest">ДЛЯ СЕНСАЦИОННОГО <br />  УВЛАЖНЕНИЯ <br />  И ВОССТАНОВЛЕНИЯ КОЖИ</p>
							<div className="flex pl-16 mt-2">
								<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">₽ 920.00</p>
								<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
							</div>
							<button className='..6x04:text-xs bg-gray text-primary py-3 px-16 mt-2 text-sm hover:text-black transition-all hover:bg-gray-light2'>+ Добавить в заказ</button>
						</div>
						<div className="relative bg-white m-2 mt-0 cursor-pointer item transition-all hover:scale-95 hover:text-primary">
							<div className="absolute items-center z-10 flex ">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z" stroke="#C5C1AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<small className="font-bold text-2xl ml-2 text-gray-quick-silver">4=5</small>



								<svg className="absolute top-2 -right-40" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.5016 0.500008L15.5013 0.500008C14.706 0.498642 13.9214 0.682885 13.2098 1.03808C12.4982 1.39328 11.8793 1.90963 11.4023 2.54606L11.0028 3.07918L10.6025 2.54661C9.95636 1.6869 9.05622 1.05215 8.02947 0.732181C7.00272 0.412208 5.90134 0.423218 4.88119 0.763651C3.86104 1.10408 2.97377 1.7567 2.34494 2.62916C1.71614 3.50157 1.3776 4.54961 1.3772 5.62501L15.5016 0.500008ZM15.5016 0.500008C16.8605 0.501548 18.1634 1.04206 19.1243 2.00295C20.0851 2.96385 20.6257 4.26666 20.6272 5.62557C20.627 8.2878 19.0828 11.1106 15.857 14.0139C14.3981 15.3216 12.8116 16.4794 11.1213 17.4698C11.0847 17.4896 11.0438 17.5 11.0022 17.5C10.9594 17.5 10.9173 17.489 10.88 17.4681C10.6952 17.3646 8.29401 16.0012 5.94567 13.8396M15.5016 0.500008L5.94567 13.8396M5.94567 13.8396C3.57616 11.6585 1.37728 8.77145 1.3772 5.62518L5.94567 13.8396Z" fill="white" stroke="#DCE0DF" />
								</svg>

							</div>
							<Image className="object-cover" src={five} alt="specialOffersImg" />
							<div>
								<p className='absolute left-4 top-48 text-sm flex items-center text-gray-quick-silver'> <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
									<path d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z" fill="#DBDCDA" />
								</svg>
									Состав</p>
								<p className="absolute right-4 flex items-center top-48 text-xs text-gray-quick-silver">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66667 9.33333L9 5" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66666 9.33333L5.33333 9" stroke="#5D986A" strokeinecap="round" strokeLinejoin="round" />
									</svg>
									1.4 Б</p>
							</div>
							<p className='text-xs text-center text-gray-quick-silver tracking-widest'>До 15.06.22</p>
							<p className="text-xs text-center  tracking-widest">ДЛЯ СЕНСАЦИОННОГО <br />  УВЛАЖНЕНИЯ <br />  И ВОССТАНОВЛЕНИЯ КОЖИ</p>
							<div className="flex pl-16 mt-2">
								<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">₽ 920.00</p>
								<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
							</div>
							<button className='..6x04:text-xs bg-gray text-primary py-3 px-16 mt-2 text-sm hover:text-black transition-all hover:bg-gray-light2'>+ Добавить в заказ</button>
						</div>
						<div className="relative bg-white m-2 mt-0 cursor-pointer item transition-all hover:scale-95 hover:text-primary">
							<div className="absolute items-center z-10 flex ">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z" stroke="#C5C1AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<small className="font-bold text-2xl ml-2 text-gray-quick-silver">4=5</small>



								<svg className="absolute top-2 -right-40" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.5016 0.500008L15.5013 0.500008C14.706 0.498642 13.9214 0.682885 13.2098 1.03808C12.4982 1.39328 11.8793 1.90963 11.4023 2.54606L11.0028 3.07918L10.6025 2.54661C9.95636 1.6869 9.05622 1.05215 8.02947 0.732181C7.00272 0.412208 5.90134 0.423218 4.88119 0.763651C3.86104 1.10408 2.97377 1.7567 2.34494 2.62916C1.71614 3.50157 1.3776 4.54961 1.3772 5.62501L15.5016 0.500008ZM15.5016 0.500008C16.8605 0.501548 18.1634 1.04206 19.1243 2.00295C20.0851 2.96385 20.6257 4.26666 20.6272 5.62557C20.627 8.2878 19.0828 11.1106 15.857 14.0139C14.3981 15.3216 12.8116 16.4794 11.1213 17.4698C11.0847 17.4896 11.0438 17.5 11.0022 17.5C10.9594 17.5 10.9173 17.489 10.88 17.4681C10.6952 17.3646 8.29401 16.0012 5.94567 13.8396M15.5016 0.500008L5.94567 13.8396M5.94567 13.8396C3.57616 11.6585 1.37728 8.77145 1.3772 5.62518L5.94567 13.8396Z" fill="white" stroke="#DCE0DF" />
								</svg>

							</div>
							<Image className="object-cover" src={six} alt="specialOffersImg" />
							<div>
								<p className='absolute left-4 top-48 text-sm flex items-center text-gray-quick-silver'> <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
									<path d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z" fill="#DBDCDA" />
								</svg>
									Состав</p>
								<p className="absolute right-4 flex items-center top-48 text-xs text-gray-quick-silver">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66667 9.33333L9 5" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66666 9.33333L5.33333 9" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									1.4 Б</p>
							</div>
							<p className='text-xs text-center text-gray-quick-silver tracking-widest'>До 15.06.22</p>
							<p className="text-xs text-center  tracking-widest">ДЛЯ СЕНСАЦИОННОГО <br />  УВЛАЖНЕНИЯ <br />  И ВОССТАНОВЛЕНИЯ КОЖИ</p>
							<div className="flex pl-16 mt-2">
								<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">₽ 920.00</p>
								<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
							</div>
							<button className='..6x04:text-xs bg-gray text-primary py-3 px-16 mt-2 text-sm hover:text-black transition-all hover:bg-gray-light2'>+ Добавить в заказ</button>
						</div>
						<div className="relative bg-white m-2 mt-0 cursor-pointer item transition-all hover:scale-95 hover:text-primary">
							<div className="absolute items-center z-10 flex ">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z" stroke="#C5C1AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<small className="font-bold text-2xl ml-2 text-gray-quick-silver">4=5</small>



								<svg className="absolute top-2 -right-40" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.5016 0.500008L15.5013 0.500008C14.706 0.498642 13.9214 0.682885 13.2098 1.03808C12.4982 1.39328 11.8793 1.90963 11.4023 2.54606L11.0028 3.07918L10.6025 2.54661C9.95636 1.6869 9.05622 1.05215 8.02947 0.732181C7.00272 0.412208 5.90134 0.423218 4.88119 0.763651C3.86104 1.10408 2.97377 1.7567 2.34494 2.62916C1.71614 3.50157 1.3776 4.54961 1.3772 5.62501L15.5016 0.500008ZM15.5016 0.500008C16.8605 0.501548 18.1634 1.04206 19.1243 2.00295C20.0851 2.96385 20.6257 4.26666 20.6272 5.62557C20.627 8.2878 19.0828 11.1106 15.857 14.0139C14.3981 15.3216 12.8116 16.4794 11.1213 17.4698C11.0847 17.4896 11.0438 17.5 11.0022 17.5C10.9594 17.5 10.9173 17.489 10.88 17.4681C10.6952 17.3646 8.29401 16.0012 5.94567 13.8396M15.5016 0.500008L5.94567 13.8396M5.94567 13.8396C3.57616 11.6585 1.37728 8.77145 1.3772 5.62518L5.94567 13.8396Z" fill="white" stroke="#DCE0DF" />
								</svg>

							</div>
							<Image className="object-cover" src={sev} alt="specialOffersImg" />
							<div>
								<p className='absolute left-4 top-48 text-sm flex items-center text-gray-quick-silver'> <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
									<path d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z" fill="#DBDCDA" />
								</svg>
									Состав</p>
								<p className="absolute right-4 flex items-center top-48 text-xs text-gray-quick-silver">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66667 9.33333L9 5" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.66666 9.33333L5.33333 9" stroke="#5D986A" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									1.4 Б</p>
							</div>
							<p className='text-xs text-center text-gray-quick-silver tracking-widest'>До 15.06.22</p>
							<p className="text-xs text-center  tracking-widest">ДЛЯ СЕНСАЦИОННОГО <br />  УВЛАЖНЕНИЯ <br />  И ВОССТАНОВЛЕНИЯ КОЖИ</p>
							<div className="flex pl-16 mt-2">
								<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">₽ 920.00</p>
								<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
							</div>
							<button className='..6x04:text-xs bg-gray text-primary py-3 px-16 mt-2 text-sm hover:text-black transition-all hover:bg-gray-light2'>+ Добавить в заказ</button>
						</div>
					</Slider>


				</div>
			</section>
		</div>

	)
}
export default SeaAct
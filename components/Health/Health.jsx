import Image from "next/image"
import Slider from "react-slick"
import oneHealth from '../../images/templates/1health.jpg'
import twoHealth from '../../images/templates/2health.jpg'
import treeHealth from '../../images/templates/3health.jpg'
const Health = () => {
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
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}

		]

	}
	return (
		<section className="bg-gray-light pb-28 .1x1:pb-10 ..5x1:pb-0">
			<div className="container__special">
				<p className="text-center text-black ..5x2:pt-10 text-2xl pt-20 font-medium ..6x04:text-xl">Программы</p>
				<p className="text-center text-black italic text-3xl font-medium ..6x04:text-2xl">КРАСОТЫ И ЗДОРОВЬЯ</p>
				<p className="text-center mt-2 mb-12 text-sm">Есть проблемы? У нас есть решения!</p>

				<Slider {...settings} className='flex  '>
					<div>
						<div className="  bg-white relative pb-96 mr-3 mb-3 cursor-pointer transition-all hover:text-primary hover:opacity-90">
							<p className="..6x04:text-6xl text-7xl ability text-gray font-medium absolute z-10 left-1/2 ">-30%</p>
							<p className=" ability ..6x04:text-xl text-2xl text-primary  absolute top-12 z-10 left-1/2 ">«АНТИСТРЕСС»</p>
							<p className=" ability ..6x04:text-xl text-2xl text-center  absolute top-20 z-10 left-1/2 ">Смотри на мир здоровыми глазами!</p>
							<div className="absolute bottom-0 left-1/2 ability">
								<Image className="object-cover" src={oneHealth} alt="discountImg" />
							</div>


						</div>
						<div className="relative mt-3 mr-3 cursor-pointer transition-all hover:text-primary hover:opacity-90">
							<p className="absolute ..6x04:text-xl z-10 top-20 text-2xl text-primary left-10">«ЗДОРОВЫЙ СОН»</p>
							<p className="absolute ..6x04:text-2xl z-10 top-32 text-3xl   left-10">Чтобы каждое утро было <br /> добрым</p>
							<Image className="object-cover" src={twoHealth} alt="discountImg" />
							<p className='absolute top-52 cursor-pointer z-10 left-10 flex items-center text-sm'>Подробнее <svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
							</svg>
							</p>
						</div>
					</div>
					<div>
						<div className="relative ml-3 transition-all hover:text-primary hover:opacity-90 cursor-pointer">

							<p className="absolute ..6x04:text-xl z-10 top-20 text-2xl left-10">«ЧИСТАЯ КОЖА»</p>
							<p className="absolute ..6x04:text-2xl z-10 top-32 text-3xl text-primary left-10">Фитокоррекция <br /> проблемной кожи</p>
							<p className='absolute top-52 cursor-pointer z-10 left-10 flex items-center text-sm'>Подробнее <svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z" fill="black" />
							</svg>
							</p>
							<Image className="object-cover" src={treeHealth} alt="discountImg" />

						</div>
						<div className="ml-3 bg-primary  mt-3 relative">
							<p className="text-center text-3xl text-white pt-16 pb-5 ..5x1:text-2xl">50+ программ</p>
							<p className="text-center text-2xl text-white pb-40 ..5x1:text-lg">«Мужское здоровье», «антипаразитарная <br /> программа», «бодрость и энергия», «активное <br /> долголетие» и др.</p>
							<button className="ability border-2 border-gray absolute bottom-20 text-gray py-2 px-4  left-1/2 hover:text-white transition-all">Все программы</button>
						</div>
					</div>

				</Slider>


			</div>

		</section>
	)
}
export default Health
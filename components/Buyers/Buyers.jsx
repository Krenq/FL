import Image from "next/image"
import one from '../../images/templates/1forBuyers.jpg'
import two from '../../images/templates/2forBuyres.jpg'
import tree from '../../images/templates/3forBuyers.jpg'
import glos from '../../images/templates/glos.jpg'
import groups from '../../images/templates/groups.png'
import twoglos from '../../images/templates/2glos.jpg'


const Buyers = () => {
	return (
		<div className="relative">

			<div className="absolute right-0 ..6x2:w-32 ..6x2:h-32 .4x1:-mt-20">
				<Image className="object-cover " src={glos} alt="specialOffersImg" />
			</div>
			<div className="absolute left-0 bottom-0 ..6x2:w-40 ..6x2:h-40 .4x1:-bottom-32">
				<Image className="object-cover " src={twoglos} alt="specialOffersImg" />
			</div>


			<section className="container__special relative pt-10 .4x1:pt-0">

				<svg className="absolute ..6x2:h-36 ..6x2:mt-5 left-1/2 ability ..5x2:-top-16 -top-20" width="184" height="183" viewBox="0 0 184 183" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M105.01 90.4961L71.0828 73.3172" stroke="#EFF5F0" strokeWidth="4" strokelinecap="round" strokeLinejoin="round" />
					<path d="M105.01 90.496L91.1736 116.337" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
				<p className="text-center text-4xl italic mb-16 ..6x04:text-3xl z-10 ..6x04:mb-10 relative">


					ПОКУПАТЕЛЯМ</p>
				<div className="flex ..6x4:flex-wrap ..6x4:p-1">
					<div className="pr-4 ..6x4:-mr-4">

						<Image className="object-cover" src={one} alt="specialOffersImg" />
					</div>
					<div>
						<div className="relative ..6x3:pt-0">
							<p className="..6x2:text-lg ..6x4:text-2xl ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 ..5x1:text-2xl">Кешбэк-марафон + <br /> розыгрыш бьюти-гаджетов</p>
							<p className="..6x2:text-base ..6x4:top-20 ..6x4:text-lg ..6x2:top-16  ..6x1:top-20 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-32 text-primary ..5x1:text-xl ..5x1:top-28">6%, 7%, 8%</p>

							<Image className="object-cover" src={two} alt="specialOffersImg" />

							<div className="absolute top-24 ..6x3:pt-0 left-44">
								<Image className="object-cover" src={groups} alt="specialOffersImg" />
							</div>
							<button className="absolute ..6x2:top-24 ..6x4:top-32 ..6x2:text-xs ..6x1:top-28 top-48 .2x1:text-base ..5x1:text-sm ..5x1:h-12 ..5x1:top-36 transition-all hover:opacity-80  h-14 w-42 bg-primary left-5 text-white px-8 py-4">Подробнее</button>

						</div>
						<div className="pt-3 ..6x3:pt-0 relative w-full">
							<Image className="object-cover" src={tree} alt="specialOffersImg" />
							<p className="..6x2:text-lg ..6x4:text-2xl ..6x1:top-4 ..6x2:top-5 ..6x1:top-3..6x1:top-3  text-4xl z-10 .2x1:text-3xl text-black absolute top-10  left-4 w-full ..5x1:text-2xl">Бесплатная доставка <br /> от 1500 ₽</p>
							<p className="..6x2:text-base ..6x4:top-20 ..6x4:text-lg ..6x2:top-16  ..6x1:top-20 text-3xl z-10 .2x1:text-2xl  text-primary absolute news top-32 left-4  w-full ..5x1:text-xl ..5x1:top-28">новичкам июня</p>
							<button className="..6x4:top-32 ..6x1:top-28 ..6x2:top-24 ..6x2:text-xs ..5x1:text-sm ..5x1:h-12 ..5x1:top-36 transition-all .2x1:h-14 .2x1:w-36  hover:opacity-80 bg-primary absolute w-52 top-52 h-16 see text-white px-8 py-4 left-4">Подробнее</button>

						</div>
					</div>
				</div>
			</section>
		</div>

	)
}
export default Buyers
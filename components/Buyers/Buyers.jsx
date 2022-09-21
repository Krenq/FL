import Image from "next/image"
import one from '../../images/templates/1forBuyers.jpg'
import two from '../../images/templates/2forBuyres.jpg'
import tree from '../../images/templates/3forBuyers.jpg'
import glos from '../../images/templates/glos.jpg'
import groups from '../../images/templates/groups.png'
import twoglos from '../../images/templates/2glos.jpg'
import sleaves from '../../images/templates/sleaves.jpg'

const Buyers = () => {
	return (
		<>

			<section className="container__special relative">

				<div className="absolute -right-56 ">
					<Image className="object-cover " src={glos} alt="specialOffersImg" />
				</div>
				<div className="absolute -left-56 bottom-0">
					<Image className="object-cover " src={twoglos} alt="specialOffersImg" />
				</div>

				<p className="text-center text-4xl italic mb-16">ПОКУПАТЕЛЯМ</p>
				<div className="flex">
					<div className="pr-4">

						<Image className="object-cover" src={one} alt="specialOffersImg" />
					</div>
					<div>
						<div>
							<p className="text-4xl z-10 text-black absolute top-36 right-56">Кешбэк-марафон + <br /> розыгрыш бьюти-гаджетов</p>
							<p className="text-3xl z-10  absolute top-60 right-1/3 text-primary">6%, 7%, 8%</p>
							<Image className="object-cover" src={two} alt="specialOffersImg" />

							<div className="absolute top-60 right-222px">
								<Image className="object-cover" src={groups} alt="specialOffersImg" />
							</div>
							<button className="absolute top-72 transition-all hover:opacity-80 bg-primary right-1/3 text-white px-8 py-4">Подробнее</button>
							<p className="absolute top-96 right-80 text-gray-quick-silver">Срок действия акции: 25 января — 8 марта</p>
						</div>
						<div className="pt-3">
							<Image className="object-cover" src={tree} alt="specialOffersImg" />
							<p className="text-4xl z-10 text-black absolute bottom-72 right-80 ">Бесплатная доставка <br /> от 1500 ₽</p>
							<p className="text-3xl z-10 text-primary absolute bottom-52  news">новичкам июня</p>
							<button className="transition-all hover:opacity-80 bg-primary absolute see text-white px-8 py-4">Подробнее</button>

						</div>
					</div>
				</div>
			</section>
		</>

	)
}
export default Buyers
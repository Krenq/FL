import Image from "next/image"
import one from '../../images/templates/1product.jpg'
import two from '../../images/templates/2product.jpg'
import tree from '../../images/templates/3product.jpg'
import four from '../../images/templates/4product.jpg'
import five from '../../images/templates/5product.jpg'
import six from '../../images/templates/6product.jpg'
import seven from '../../images/templates/7product.jpg'
import eig from '../../images/templates/8product.jpg'
import nine from '../../images/templates/9product.jpg'
import ten from '../../images/templates/10product.jpg'
import el from '../../images/templates/11product.jpg'
const Products = () => {
	return (
		<section className="container__special pt-40 pb-32">
			<p className="text-center text-3xl">Продукты</p>
			<p className="text-center italic text-4xl mb-2">КАТАЛОГА</p>
			<p className="text-center">Более 500 наименований продуктов регулярного спроса. <br />
				Каждый сезон — новые трендовые средства!</p>
			<div className="flex flex-wrap mt-4">
				<div className="m-1">
					<Image className="object-cover " src={one} alt="productsPhoto" />
					<p className="text-center font-medium">ДЛЯ ЛИЦА</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={two} alt="productsPhoto" />
					<p className="text-center font-medium">ДЛЯ ТЕЛА</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={tree} alt="productsPhoto" />
					<p className="text-center font-medium">ДЛЯ ВОЛОС</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={four} alt="productsPhoto" />
					<p className="text-center font-medium">МАКИЯЖ</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={five} alt="productsPhoto" />
					<p className="text-center font-medium">ПАРФЮМ</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={six} alt="productsPhoto" />
					<p className="text-center font-medium">МУЖЧИНАМ</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={seven} alt="productsPhoto" />
					<p className="text-center font-medium">ДЛЯ ДЕТЕЙ</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={eig} alt="productsPhoto" />
					<p className="text-center font-medium">ДЛЯ ДОМА</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={nine} alt="productsPhoto" />
					<p className="text-center font-medium">ГИГИЕНА</p>
				</div>
				<div className="m-1" >
					<Image className="object-cover " src={ten} alt="productsPhoto" />
					<p className="text-center font-medium">WELLNESS</p>
				</div>
				<div className="m-1">
					<Image className="object-cover " src={el} alt="productsPhoto" />
					<p className="text-center font-medium">АКСЕССУАРЫ</p>
				</div>
				<div className="m-1 products-item flex items-center bg-gray justify-center">
					<div className="">
						<p className="text-2xl text-primary font-medium">Каталог</p>
						<p className="flex items-center text-sm mt-4 text-primary cursor-pointer">Перейти <svg className="ml-2" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.52529 0.935913L7.58469 1.70374L9.76485 3.46684L0.694824 3.47426L0.696166 4.55759L9.74134 4.5502L7.59791 6.2999L8.54292 7.06414L12.3053 3.99286L8.52529 0.935913Z" fill="#337202" />
						</svg>
						</p>
					</div>
				</div>
			</div>
		</section>

	)
}
export default Products
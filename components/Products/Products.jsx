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
		<section className="container__special relative pt-40 ..6x04:pb-0 .1x1:pb-20 .4x1:pb-12 ..5x2:pb-16 .1x1:pt-20 .4x1:pt-20 pb-32">

			<svg className="absolute ..6x2:h-36 ..6x2:mt-5 left-1/2 ability top-14 .4x1:-top-5" width="184" height="183" viewBox="0 0 184 183" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M105.01 90.4961L71.0828 73.3172" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M105.01 90.496L91.1736 116.337" stroke="#EFF5F0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			<p className="absolute left-1/2 ability text-3xl ..6x04:text-2xl z-10">Продукты</p>
			<p className="text-center italic text-4xl mb-2 mt-10 ..6x04:text-3xl z-10">КАТАЛОГА</p>
			<p className="text-center ..6x04:text-sm">Более 500 наименований продуктов регулярного спроса. <br />
				Каждый сезон — новые трендовые средства!</p>
			<div className="flex  mt-4 ..5x3:flex-wrap ..5x3:justify-center">
				<div className="m-1 ..6x04:w-44 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={one} alt="productsPhoto" />
					<p className="text-center ..6x04:pt-4 ..6x04:text-xs ..6x04:pb-5  font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">ДЛЯ ЛИЦА</p>
				</div>
				<div className="m-1 ..6x04:w-44 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={two} alt="productsPhoto" />
					<p className="text-center ..6x04:pt-7 ..6x04:text-xs ..6x04:pb-6   font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">ДЛЯ ТЕЛА</p>
				</div>
				<div className="m-1 ..6x04:w-44 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={tree} alt="productsPhoto" />
					<p className="text-center ..6x04:pt-4 ..6x04:text-xs ..6x04:pb-5  font-medium  ..5x3:pt-7 ..5x3:pb-7 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">ДЛЯ ВОЛОС</p>
				</div>
				<div className="m-1 ..6x04:w-44 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={four} alt="productsPhoto" />
					<p className="text-center ..6x04:pt-6 ..6x04:text-xs ..6x04:pb-7  font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">МАКИЯЖ</p>
				</div>
				<div className="m-1 ..6x04:w-44 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={five} alt="productsPhoto" />
					<p className="text-center ..6x04:pt-6 ..6x04:text-xs ..6x04:pb-7  font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">ПАРФЮМ</p>
				</div>
				<div className="m-1 ..6x04:w-44 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={six} alt="productsPhoto" />
					<p className="text-center ..6x04:pt-6 ..6x04:pr-3 ..6x04:pl-4 ..6x04:text-xs ..6x04:pb-7  font-medium  ..5x3:pt-9 ..5x3:pb-8 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">МУЖЧИНАМ</p>
				</div>


			</div>
			<div className="flex  mt-4 ..5x3:m-2 ..5x3:flex-wrap ..5x3:justify-center">
				<div className="m-1 ..6x04:w-44 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={seven} alt="productsPhoto" />
					<p className="text-center  ..6x04:pt-4 ..6x04:text-xs ..6x04:pb-5  font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">ДЛЯ ДЕТЕЙ</p>
				</div>
				<div className="m-1 ..6x04:w-44 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={eig} alt="productsPhoto" />
					<p className="text-center ..6x04:pt-4 ..6x04:text-xs ..6x04:pb-5  font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">ДЛЯ ДОМА</p>
				</div>
				<div className="m-1 ..6x04:w-44 ..6x1:ml-1 ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<Image className="object-cover " src={nine} alt="productsPhoto" />
					<p className="text-center ..6x04:pr-5 ..6x04:pl-4 ..6x04:pt-6 ..6x04:text-xs ..6x04:pb-7  font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-6 ..5x3:pr-6 ..5x3:text-gray-quick-silver ..5x3:w-60 ">ГИГИЕНА</p>
				</div>
				<div className="m-1 ..6x04:w-44 ..6x1:w-60  ..6x1:text-sm ..5x3:w-64  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all" >
					<Image className="object-cover " src={ten} alt="productsPhoto" />
					<p className="text-center ..6x04:pr-5 ..6x04:pl-4 ..6x04:pt-6 ..6x04:text-xs ..6x04:pb-7  ..6x1:pr-8 ..6x1:pl-6  font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-10 ..5x3:pr-7 ..5x3:text-gray-quick-silver ..5x3:w-60 ">WELLNESS</p>
				</div>
				<div className="m-1 ..6x04:w-44   ..5x3:w-60  cursor-pointer hover:scale-95   ..5x3:items-center ..5x3:flex hover:opacity-90 hover:text-primary transition-all">
					<div className="snap">
						<Image className="object-cover " src={el} alt="productsPhoto" />
					</div>

					<p className="text-center text ..6x04:pr-3 ..6x04:pl-3 ..6x04:mr-1  ..6x04:pt-6  ..6x04:text-xs ..6x04:pb-8   font-medium  ..5x3:pt-9 ..5x3:pb-10 ..5x3:border-2 ..5x3:border-gray-quick-silver ..5x3:pl-5 ..5x3:pr-5 ..5x3:text-gray-quick-silver ..5x3:w-60 ">АКСЕССУАРЫ</p>
				</div>
				<div className="m-1 mb-8 catal ..7x1:-mr-1 ..5x3:pb-5 cat ..6x04:h-20 ..6x04:pt-0 ..6x04:w-44 ..6x04:m-0 ..6x04:-mt-3 ..6x04:pb-3 ..5x3:pt-5 products-item flex items-center bg-gray justify-center cursor-pointer hover:scale-95 hover:opacity-90 hover:text-primary transition-all">
					<div className="">
						<p className="text-2xl text-primary font-medium ..6x04:text-base">Каталог</p>
						<p className="flex ..6x04:mt-0 ..6x04:text-xs ..6x04:ml-1  items-center text-sm mt-4 text-primary cursor-pointer ml-3">Перейти <svg className="ml-1" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
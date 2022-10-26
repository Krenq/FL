import Image from 'next/image';
import one from '../../images/templates/1product.jpg';
import two from '../../images/templates/2product.jpg';
import tree from '../../images/templates/3product.jpg';
import four from '../../images/templates/4product.jpg';
import five from '../../images/templates/5product.jpg';
import six from '../../images/templates/6product.jpg';
import seven from '../../images/templates/7product.jpg';
import eig from '../../images/templates/8product.jpg';
import nine from '../../images/templates/9product.jpg';
import ten from '../../images/templates/10product.jpg';
import el from '../../images/templates/11product.jpg';
import ProductItem from '../ProductItem/ProductItem';

function Products({ refL }) {
	return (
		<section ref={refL} id='sec-4' className="container__special relative pt-40 ..6x04:pb-0 .1x1:pb-20 .4x1:pb-12 ..5x2:pb-16 .1x1:pt-20 ..5x2:pt-24 .4x1:pt-20 pb-32">
			<a href="#stock" className='absolute bottom-80 -right-14 .6x3:hidden flex items-center text-13px font-medium flex-col'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11.8167 12.2L8 8.36788L4.175 12.2L3 11.0202L8 6L13 11.0202L11.8167 12.2Z" fill="#18202B" />
			</svg>
				TOP</a>

			<svg
				className="absolute  ..6x2:h-32 ..6x2:mt-5 left-1/2 ability top-14 ..5x2:-top-0 .4x1:-top-5"
				width="184"
				height="183"
				viewBox="0 0 184 183"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244"
					stroke="#EFF5F0"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74"
					stroke="#EFF5F0"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M105.01 90.4961L71.0828 73.3172"
					stroke="#EFF5F0"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M105.01 90.496L91.1736 116.337"
					stroke="#EFF5F0"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<p className="absolute font-montserrat font-medium ..7x11:text-base left-1/2 ability text-3xl ..6x04:text-2xl z-10">
				Продукты
			</p>
			<p className="font-montserrat font-medium ..7x11:text-xl ..7x11:mt-7 text-center italic text-4xl mb-2 mt-10 ..6x04:text-3xl z-10">
				КАТАЛОГА
			</p>
			<p className="text-center ..5x2:hidden  font-montserrat">
				Более 500 наименований продуктов регулярного спроса. <br /> Каждый сезон — новые трендовые средства!
			</p>
			<p className="text-center hidden ..5x2:block ..6x04:text-13px ..5x2:px-4 font-montserrat">
				Более 500 наименований продуктов регулярного спроса. Каждый сезон — новые трендовые средства!
			</p>

			<div className="flex flex-col mt-4 ..7x2:m-0 .3x1:flex-row .3x1:justify-between .3x1:max-w-5xl .3x1:mx-auto .3x1:px-2">
				<div className="flex flex-row justify-between .3x1:flex-col .3x1:w-50% .3x1:items-end">
					<ProductItem title="ДЛЯ ЛИЦА" photo={one} />
					<ProductItem title="ДЛЯ ТЕЛА" photo={two} />
					<ProductItem title="ДЛЯ ВОЛОС" photo={tree} />
					<ProductItem title="МАКИЯЖ" photo={four} />
					<ProductItem title="ПАРФЮМ" photo={five} />
					<ProductItem title="МУЖЧИНАМ" photo={six} />
				</div>

				<div className="flex flex-row justify-between mt-42px .3x1:flex-col .3x1:w-50% .3x1:items-start .3x1:mt-0">
					<ProductItem title="ДЛЯ ДЕТЕЙ" photo={seven} />
					<ProductItem title="ДЛЯ ДОМА" photo={eig} />
					<ProductItem title="ГИГИЕНА" photo={nine} />
					<ProductItem title="WELLNESS" photo={ten} />
					<ProductItem title="АКСЕССУАРЫ" photo={el} />
					<ProductItem lastItem />
				</div>
			</div>

			<div className=" hidden .3x1:flex .3x1:justify-center mt-26px mb-8 text-primary font-montserrat font-medium text-xs">
				<button className=" border border-primary px-5 py-2.5">
					В каталог
				</button>
			</div>
		</section>
	);
}
export default Products;

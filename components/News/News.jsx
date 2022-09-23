import Image from "next/image"
import Slider from "react-slick"
import twoNew from '../../images/templates/2news.jpg'
import oneNew from '../../images/templates/1news.jpg'
import treeNew from '../../images/templates/3news.jpg'

import PartnersButtonNext from "../Partners/PartnersButtonNext"
import PartnersButtonPrev from "../Partners/PartnersButtonPrev"

const News = () => {
	const settings = {
		dots: true,
		Infinity: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: < PartnersButtonPrev />,
		nextArrow: < PartnersButtonNext />,
		responsive: [

			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 470,
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
		<article className="container__special relative pb-24 ..5x1:pb-16">
			<p className="mt-36 text-center text-3xl italic mb-28 ..5x2:mt-10  .1x1:mt-20 ">НОВОСТИ</p>
			<button className="ability left-1/2 absolute top-20 text-primary border-2 boder-primary py-3 px-6 text-sm transition-all hover:text-white hover:bg-primary">Смотреть все</button>
			<Slider {...settings}>
				<div className="p-3 ..6x04:p-1 transition-all hover:text-primary cursor-pointer hover:scale-95">
					<div>
						<Image className="object-cover" src={oneNew} alt="newsImg" />

					</div>
					<div className="border-2 border-gray -mt-2 relative">

						<p className="text-center mt-6 text-gray-quick-silver underline mb-2">Онлайн-каталог Промоушен</p>
						<p className="text-center text-lg font-bold">Возвращение легенды: косметический <br /> спонж для умывания</p>
						<p className="text-center mt-2 mb-12">Все помнят тот самый косметический спонж, который под струей воды превращался из палочки в круглый диск...</p>
						<button className="absolute ability left-1/2 bottom-3 text-primary">Читать</button>
					</div>

				</div>
				<div className="p-3 ..6x04:p-1 transition-all hover:text-primary cursor-pointer hover:scale-95">
					<div>
						<Image className="object-cover" src={twoNew} alt="newsImg" />

					</div>
					<div className="border-2 border-gray -mt-2 relative">

						<p className="text-center mt-6 text-gray-quick-silver underline mb-2">Онлайн-каталог Промоушен</p>
						<p className="text-center text-lg font-bold mb-9">Алоэ - компонент многих продуктов TianDe</p>
						<p className="text-center mt-2 mb-12">Все помнят тот самый косметический спонж, который под струей воды превращался из палочки в круглый диск...</p>
						<button className="absolute ability left-1/2 bottom-3 text-primary">Читать</button>
					</div>

				</div>
				<div className="p-3 ..6x04:p-1 transition-all hover:text-primary cursor-pointer hover:scale-95">
					<div>
						<Image className="object-cover" src={treeNew} alt="newsImg" />

					</div>
					<div className="border-2 border-gray -mt-2 relative">

						<p className="text-center mt-6 text-gray-quick-silver underline mb-2">Онлайн-каталог Промоушен</p>
						<p className="text-center text-lg font-bold">Что нужно для идеального макияжа?
							Список необходимой косметики и лайфхаков</p>
						<p className="text-center mt-2 mb-12">Все помнят тот самый косметический спонж, который под струей воды превращался из палочки в круглый диск...</p>
						<button className="absolute ability left-1/2 bottom-3 text-primary">Читать</button>
					</div>

				</div>
				<div className="p-3 ..6x04:p-1 transition-all hover:text-primary cursor-pointer hover:scale-95">
					<div>
						<Image className="object-cover" src={treeNew} alt="newsImg" />

					</div>
					<div className="border-2 border-gray -mt-2 relative">

						<p className="text-center mt-6 text-gray-quick-silver underline mb-2">Онлайн-каталог Промоушен</p>
						<p className="text-center text-lg font-bold">Что нужно для идеального макияжа?
							Список необходимой косметики и лайфхаков</p>
						<p className="text-center mt-2 mb-12">Все помнят тот самый косметический спонж, который под струей воды превращался из палочки в круглый диск...</p>
						<button className="absolute ability left-1/2 bottom-3 text-primary">Читать</button>
					</div>

				</div>
			</Slider>
		</article>
	)
}
export default News
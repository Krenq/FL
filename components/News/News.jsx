import Image from 'next/image';
import Slider from 'react-slick';
import twoNew from '../../images/templates/2news.jpg';
import oneNew from '../../images/templates/1news.jpg';
import treeNew from '../../images/templates/3news.jpg';

import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../utils/useWindowSize';
import NewsPrev from './NewsPrev';
import NewsNext from './NewsNext';
import NewsDate from './NewsDate';

const News = ({ refL }) => {
	const divBlock = useRef(null),
		slider = useRef(null);

	const size = useWindowSize();

	const [kol, setKol] = useState();
	const [widthDot, setWidthDot] = useState();

	// Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку

	useEffect(() => {
		setWidthDot(divBlock?.current?.getBoundingClientRect()?.width / kol);
		if (slider.current) setKol(slider?.current.props?.children?.length);
	}, [size.width, slider?.current]);

	const settings = {
		dots: true,
		Infinity: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <NewsPrev />,
		nextArrow: <NewsNext />,
		appendDots: (dots) => {
			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						position: 'absolute',
						bottom: -30,

					}}
				>
					<div
						ref={divBlock}
						style={{
							width: 200,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ul
							style={{
								margin: '0px',
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'center',
							}}
						>
							{dots}
						</ul>
					</div>
				</div>
			);
		},
		customPaging: (i) => (
			<div
				style={{
					backgroundColor: ' rgb(218, 218, 218)',
					width: `${widthDot}px`,
					height: 4,
				}}
			/>
		),
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,

					prevArrow: false,
					nextArrow: false,
				},
			},
			{
				breakpoint: 470,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					prevArrow: false,
					nextArrow: false,
				},
			},
		],
	};
	return (
		<article ref={refL} id='sec-11' className="container__special relative pb-24 ..5x1:pb-16">
			<svg
				className="absolute ..5x5:h-36 ..5x5:mt-5 left-1/2 ability -top-5 "
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

			<p className="mt-36 absolute left-1/2 ability -top-20 text-3xl italic  mb-28   ">
				НОВОСТИ
			</p>
			<button className="ability left-1/2 absolute top-32 text-primary border-2 boder-primary py-3 px-6 text-sm transition-all hover:text-white hover:bg-primary">
				Смотреть все
			</button>
			<Slider {...settings} ref={slider} className="pt-48">
				<div className=" relative p-3 ..6x04:p-1 transition-all hover:text-primary cursor-pointer hover:scale-95">
					<NewsDate title={'ВЧЕРА'} />
					<div>
						<Image
							className="object-cover"
							width={474}
							height={330}
							src={oneNew}
							alt="newsImg"
						/>
					</div>
					<div className="border-2 border-gray -mt-2 relative">
						<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-quick-silver">
							<p className="text-center mt-6 underline mb-2">Онлайн-каталог</p>
							<p className="text-center mt-6 underline mb-2">Промоушен</p>
						</div>
						<p className="text-center text-lg font-bold">
							Возвращение легенды: косметический <br /> спонж для умывания
						</p>
						<p className="text-center mt-2 px-2 mb-5 news_text">
							Все помнят тот самый косметический спонж, который под струей воды
							превращался из палочки в круглый диск Все помнят тот самый
							косметический спонж, который под струей воды превращался
						</p>
						<button className="relative ability left-1/2 bottom-3 text-black">
							Читать
							<div className="bg-primary absolute bottom-1 opacity-40 h-9px w-full" />
						</button>
					</div>
				</div>
				<div className="relative p-3 ..6x04:p-1 transition-all hover:text-primary cursor-pointer hover:scale-95">
					<NewsDate title={'MAY 20, 2022'} />
					<div>
						<Image
							className="object-cover"
							src={twoNew}
							width={474}
							height={330}
							alt="newsImg"
						/>
					</div>
					<div className="border-2 border-gray -mt-2 relative">
						<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-quick-silver">
							<p className="text-center mt-6 underline mb-2">Онлайн-каталог</p>
							<p className="text-center mt-6 underline mb-2">Промоушен</p>
						</div>
						<p className="text-center text-lg font-bold mb-9">
							Алоэ - компонент многих продуктов TianDe
						</p>
						<p className="text-center mt-2 px-2 mb-5 news_text">
							Все помнят тот самый косметический спонж, который под струей воды
							превращался из палочки в круглый диск Все помнят тот самый
							косметический спонж, который под струей воды превращался
						</p>

						<button className="relative ability left-1/2 bottom-3 text-black">
							Читать
							<div className="bg-primary absolute bottom-1 opacity-40 h-9px w-full" />
						</button>
					</div>
				</div>
				<div className="relative p-3 ..6x04:p-1 transition-all hover:text-primary cursor-pointer hover:scale-95">
					<NewsDate title={'MAY 20, 2022'} />
					<div>
						<Image
							className="object-cover"
							src={treeNew}
							width={474}
							height={330}
							alt="newsImg"
						/>
					</div>
					<div className="border-2 border-gray -mt-2 relative">
						<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-quick-silver">
							<p className="text-center mt-6 underline mb-2">Онлайн-каталог</p>
							<p className="text-center mt-6 underline mb-2">Промоушен</p>
						</div>
						<p className="text-center text-lg font-bold">
							Что нужно для идеального макияжа? Список необходимой косметики и
							лайфхаков
						</p>
						<p className="text-center mt-2 px-2 mb-5 news_text">
							Все помнят тот самый косметический спонж, который под струей воды
							превращался из палочки в круглый диск Все помнят тот самый
							косметический спонж, который под струей воды превращался
						</p>

						<button className="relative ability left-1/2 bottom-3 text-black">
							Читать
							<div className="bg-primary absolute bottom-1 opacity-40 h-9px w-full" />
						</button>
					</div>
				</div>
				<div className="relative p-3 ..6x04:p-1 transition-all hover:text-primary cursor-pointer hover:scale-95">
					<NewsDate title={'MAY 20, 2022'} />
					<div>
						<Image
							className="object-cover"
							src={treeNew}
							width={474}
							height={330}
							alt="newsImg"
						/>
					</div>
					<div className="border-2 border-gray -mt-2 relative">
						<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-quick-silver">
							<p className="text-center mt-6 underline mb-2">Онлайн-каталог</p>
							<p className="text-center mt-6 underline mb-2">Промоушен</p>
						</div>
						<p className="text-center text-lg font-bold">
							Что нужно для идеального макияжа? Список необходимой косметики и
							лайфхаков
						</p>
						<p className="text-center mt-2 px-2 mb-5 news_text">
							Все помнят тот самый косметический спонж, который под струей воды
							превращался из палочки в круглый диск Все помнят тот самый
							косметический спонж, который под струей воды превращался
						</p>

						<button className="relative ability left-1/2 bottom-3 text-black">
							Читать
							<div className="bg-primary absolute bottom-1 opacity-40 h-9px w-full" />
						</button>
					</div>
				</div>
			</Slider>
		</article>
	);
};
export default News;

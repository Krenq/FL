import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MenuPhone from "../MenuPhone/MenuPhone";

const PhoneNavigation = () => {
	const [showMenu, setShowMenu] = useState(false),
		router = useRouter()

	const setShowMenuF = () => setShowMenu(!showMenu)
	return (
		<>

			<nav className="hidden border-t border-stroke ..5x2:block bg-white pb-7    ..5x2:fixed ..5x2:bottom-0 ..5x2:w-full z-50">
				<ul className="flex justify-center   ..6x4:justify-between">
					<Link href='/'>
						<li className="relative cursor-pointer">
							<svg
								className="h-20 w-24 ..6x5:h-20 ..6x6:w-14 ..6x6:h-10 ..6x6:mt-0.5  ..6x6:mb-2 ..6x5:w-20"
								width="54"
								height="24"
								viewBox="0 0 54 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									width="24"
									height="24"
									transform="translate(15)"
									fill="white"
								/>
								<path
									d="M15.8 12L18.3 9.49999M38.2 12L35.8 9.59999M18.3 9.49999L21.2 6.59999L26.2929 1.50709C26.6834 1.11657 27.3166 1.11657 27.7071 1.50709L31.4 5.19999L35.8 9.59999M18.3 9.49999V20.6C18.3 21.1523 18.7477 21.6 19.3 21.6H34.8C35.3523 21.6 35.8 21.1523 35.8 20.6V9.59999M35.8 9.59999V4.39999H35V8.79999"
									stroke={`${router.pathname === '/' ? '#337202' : "#949792"}`}
									strokeWidth="0.7"
								/>
								<path
									d="M20.7263 10.2579L26.6263 3.62043C26.8252 3.39667 27.1748 3.39667 27.3737 3.62043L33.2737 10.2579C33.3551 10.3495 33.4 10.4677 33.4 10.5901V19.1C33.4 19.3762 33.1761 19.6 32.9 19.6H21.1C20.8239 19.6 20.6 19.3762 20.6 19.1V10.5901C20.6 10.4677 20.6449 10.3495 20.7263 10.2579Z"
									stroke={`${router.pathname === '/' ? '#337202' : "#949792"}`}
									strokeWidth="0.7"
								/>
								<path
									d="M23.0496 10.9093L26.8496 6.57171C26.9292 6.48077 27.0708 6.48077 27.1504 6.57171L30.9504 10.9093C30.9824 10.9457 31 10.9926 31 11.0411V16.6C31 16.7105 30.9105 16.8 30.8 16.8H23.2C23.0895 16.8 23 16.7105 23 16.6V11.0411C23 10.9926 23.0176 10.9457 23.0496 10.9093Z"
									stroke={`${router.pathname === '/' ? '#337202' : "#949792"}`}
									strokeWidth="0.7"
								/>
							</svg>
							<p className="text-gray-quick-silver absolute left-1/2 ability  ..7x001:text-8px ..6x6:text-xs -mt-4">
								Главная
							</p>
						</li></Link>

					<li className="relative cursor-pointer">
						<svg
							className="h-20 w-24 ..6x5:h-20 ..6x6:w-14 ..6x6:h-10 ..6x6:mt-0.5 ..6x6:mb-2 ..6x5:w-20"
							width="54"
							height="24"
							viewBox="0 0 54 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M26.9572 4.37346V5.0407L27.3956 4.53773C27.4774 4.44396 27.5622 4.35305 27.6501 4.26508L27.4734 4.0883L27.6501 4.26508C28.3231 3.59211 29.1697 3.10114 30.1515 2.76795C31.4473 2.32821 32.7792 2.20857 33.9076 2.2618L34.0862 2.27295C34.4044 2.30187 34.656 2.55492 34.6831 2.8733L34.6892 2.96588L34.7015 3.32249C34.7198 4.38553 34.5806 5.60907 34.1685 6.80352C33.8327 7.77696 33.3417 8.61729 32.672 9.28695C31.2815 10.6775 29.3053 11.2523 27.199 11.3207L26.9572 11.3286V11.5706V14.0416V14.0513L26.9579 14.0609C26.9949 14.5386 26.9928 15.006 26.9622 15.4475L26.9582 15.4921L26.9572 15.5033V15.5145V21.0911C26.9572 21.455 26.6622 21.75 26.2983 21.75C25.9628 21.75 25.6856 21.4991 25.6446 21.1749L25.6394 21.0839V16.5741V16.3255L25.3908 16.3241C24.6373 16.3199 23.839 16.226 23.0614 15.9984C22.1782 15.74 21.4234 15.3294 20.8338 14.7406L20.6571 14.9175L20.8338 14.7406C20.2428 14.1505 19.8314 13.3943 19.5731 12.509C19.2727 11.479 19.2073 10.4131 19.2735 9.46397C19.2756 9.43496 19.2776 9.40784 19.2796 9.38267L19.297 9.20475C19.3352 8.9073 19.5694 8.67311 19.8668 8.63498L20.1262 8.6117C21.0755 8.54631 22.1427 8.61285 23.1741 8.91489C23.9696 9.14787 24.6609 9.5044 25.2209 10.0032L25.6267 10.3645L25.6371 9.82128C25.6377 9.79108 25.6384 9.76079 25.6393 9.7304L25.6394 9.7304V9.7235V2.91312C25.6394 2.54922 25.9344 2.25422 26.2983 2.25422C26.6337 2.25422 26.9109 2.5051 26.9519 2.82934L26.9572 2.92032V4.37346ZM25.3873 15.0057L25.6394 15.0078V14.7557V14.1285V14.1179L25.6385 14.1074C25.6101 13.7727 25.5594 13.433 25.4817 13.0991L25.4818 13.0991L25.4801 13.0925L25.3983 12.78L25.3984 12.78L25.3964 12.7733C25.2002 12.1013 24.8966 11.5316 24.4693 11.105C24.0427 10.679 23.4741 10.3759 22.8037 10.1796C22.1573 9.99028 21.4739 9.9117 20.837 9.90729L20.8215 9.90705L20.5607 9.90298L20.5677 10.1637L20.5765 10.4936L20.5765 10.4936L20.5767 10.4982C20.5963 10.9308 20.6515 11.3777 20.7531 11.8144L20.753 11.8144L20.7547 11.821L20.8363 12.1332L20.8362 12.1332L20.8382 12.14C21.0342 12.8119 21.3377 13.3815 21.7649 13.8081C22.1916 14.2342 22.7607 14.5374 23.4315 14.7337C24.0743 14.9217 24.7535 15.0005 25.3873 15.0057ZM33.3704 4.01755L33.3704 4.01755L33.3706 4.01335L33.3775 3.83358L33.388 3.56467L33.119 3.57406L32.9265 3.58078L32.9265 3.58074L32.9223 3.58096C32.1719 3.61992 31.3565 3.75062 30.575 4.01585C29.7839 4.28429 29.1063 4.67257 28.582 5.1969C28.0562 5.72267 27.6672 6.40367 27.3987 7.1993C27.1347 7.98162 27.0047 8.79776 26.966 9.54892L26.9659 9.54892L26.9658 9.55293L26.9591 9.74108L26.9496 10.0112L27.2196 9.9997L27.4355 9.99055L27.4355 9.99059L27.4398 9.99032C28.9921 9.89727 30.4979 9.46425 31.5483 8.53552L31.5484 8.5356L31.5539 8.53038L31.7346 8.3605L31.7347 8.36058L31.7402 8.35512C32.2629 7.83238 32.6519 7.15891 32.9228 6.37371C33.194 5.58766 33.3287 4.7685 33.3704 4.01755Z"
								fill="white"
								stroke="#949792"
								strokeWidth="0.5"
							/>
						</svg>

						<p className="   text-gray-quick-silver absolute left-1/2 ability  -mt-4 ..7x001:text-8px ..6x6:text-xs">
							Каталог
						</p>
					</li>
					<li className="relative cursor-pointer">
						<svg
							className="h-20 w-24 ..6x5:h-20 ..6x6:w-14 ..6x6:mt-0.5 ..6x6:h-10  ..6x6:mb-2 ..6x5:w-20"
							width="54"
							height="24"
							viewBox="0 0 54 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M27.1818 3.81818C25.9266 3.81818 24.9091 4.83572 24.9091 6.09091V6.54545H29.4545V6.09091C29.4545 4.83572 28.437 3.81818 27.1818 3.81818ZM31.2727 6.54545V6.09091C31.2727 3.83156 29.4412 2 27.1818 2C24.9225 2 23.0909 3.83156 23.0909 6.09091V6.54545H20.8182C19.814 6.54545 19 7.35948 19 8.36364V20.1818C19 21.186 19.814 22 20.8182 22H33.5455C34.5496 22 35.3636 21.186 35.3636 20.1818V8.36364C35.3636 7.35948 34.5496 6.54545 33.5455 6.54545H31.2727ZM29.4545 8.36364V9.27273C29.4545 9.7748 29.8616 10.1818 30.3636 10.1818C30.8657 10.1818 31.2727 9.7748 31.2727 9.27273V8.36364H33.5455V20.1818H20.8182V8.36364H23.0909V9.27273C23.0909 9.7748 23.4979 10.1818 24 10.1818C24.5021 10.1818 24.9091 9.7748 24.9091 9.27273V8.36364H29.4545Z"
								fill="white"
								stroke="#949792"
								strokeWidth="0.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className=" ..7x001:text-8px text-gray-quick-silver absolute left-1/2 ability  -mt-4 ..6x6:text-xs ">
							Корзина
						</p>
						<div className=" bg-primary absolute ..6x6:top-2 ..6x5:top-5 top-6  ..6x6:right-1.5 ..6x5:right-2 right-2.5 rounded-2xl ..6x6:px-1.5 px-10px ..6x6:py-px ..6x5:py-0.5 text-white ..6x6:text-8px ..6x5:text-11px font-montserrat font-medium number_shopB">
							12
						</div>
					</li>
					<li className="relative cursor-pointer">

						<svg className="h-12 mb-3.5 mt-5 w-24 ..6x5:h-12 ..6x6:w-14 ..6x6:mt-2.5  ..6x6:mb-3 ..6x6:h-7 ..6x5:w-20" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.531 18.3811L12.6302 18.282C15.0881 16.0564 17.1452 14.1924 18.5859 12.509C20.025 10.8274 20.8876 9.28329 20.8876 7.69482C20.8876 5.48591 19.2225 3.82084 17.0136 3.82084C15.382 3.82084 13.7897 4.83787 13.1509 6.26444H11.5576C10.9187 4.83787 9.32648 3.82084 7.69482 3.82084C5.48591 3.82084 3.82084 5.48591 3.82084 7.69482C3.82084 9.28325 4.68343 10.8274 6.12123 12.5089C7.55996 14.1916 9.6134 16.0548 12.0647 18.2791L12.0722 18.2858L12.0723 18.286L12.1861 18.3893L12.3624 18.5497L12.531 18.3811ZM12.2403 18.1008L12.2401 18.1011L12.2403 18.1008ZM12.1645 4.3165L12.3542 4.53754L12.5439 4.3165C13.6268 3.05481 15.2876 2.25 17.0136 2.25C20.065 2.25 22.4584 4.63374 22.4584 7.69482C22.4584 9.5644 21.6176 11.2851 20.0881 13.1564C18.5559 15.0309 16.3588 17.0259 13.6876 19.448L13.6873 19.4484L12.3542 20.6619L11.0212 19.4484L11.0208 19.448C8.34967 17.0259 6.15257 15.0309 4.62034 13.1564C3.09085 11.2851 2.25 9.5644 2.25 7.69482C2.25 4.63374 4.6435 2.25 7.69482 2.25C9.42088 2.25 11.0816 3.05481 12.1645 4.3165Z" fill="white" stroke="#949792" strokeWidth="0.5" />
						</svg>


						<p className=" ..7x001:text-8px text-gray-quick-silver absolute left-1/2 ..6x6:text-xs ability  -mt-4 ">
							Избранные
						</p>
					</li>
					<Link href='/Menu'>
						<li className={`relative cursor-pointer ${router.pathname === '/Menu' ? 'activeButtonPhone' : ""}`} onClick={setShowMenuF}>
							<svg
								className="h-20 w-24 ..6x5:h-20 ..6x6:w-14 ..6x6:mt-0.5 ..6x6:h-10   ..6x6:mb-2  ..6x5:w-20"
								width="54"
								height="24"
								viewBox="0 0 54 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M33.8463 13.7C32.8011 13.7 31.9925 12.9183 31.9925 12C31.9925 11.0817 32.8011 10.3 33.8463 10.3C34.8914 10.3 35.7 11.0817 35.7 12C35.7 12.9183 34.8914 13.7 33.8463 13.7ZM26.8462 13.7C25.8011 13.7 24.9925 12.9183 24.9925 12C24.9925 11.0817 25.8011 10.3 26.8462 10.3C27.8914 10.3 28.7 11.0817 28.7 12C28.7 12.9183 27.8914 13.7 26.8462 13.7ZM19.8463 13.7C18.8011 13.7 17.9925 12.9183 17.9925 12C17.9925 11.0817 18.8011 10.3 19.8463 10.3C20.8914 10.3 21.7 11.0817 21.7 12C21.7 12.9183 20.8914 13.7 19.8463 13.7Z"
									fill="white"
									stroke={`${router.pathname === '/Menu' ? '#337202' : "#949792"}`}
									strokeWidth="0.6"
								/>
							</svg>

							<p className="  ..7x001:text-8px text-gray-quick-silver absolute left-1/2 ..6x6:text-xs ability -mt-4 ">
								Меню
							</p>
						</li>
					</Link>

				</ul>
			</nav>
		</>

	);
};
export default PhoneNavigation;

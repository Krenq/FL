import React, { useState } from 'react';
import LinksHeader from '../LinksNavBar/LinksNavBar';
import Logo from '../ui/Logo/Logo';
import Search from '../Search/Search';
import InputItemSearch from '../InputItemSearch/InputItemSearch';

export default function NavBar({ scrollMenu, showSearch, setShowSearch, showBurger, setShowBurger }) {
	const [isHoverBasket, setIsHoverBasket] = useState(false)


	const setIsHover = () => setIsHoverBasket(true),
		setCloseHover = () => setIsHoverBasket(false)

	return (
		<>

			<nav className={`h-100px transition-all ${scrollMenu ? '!h-80px' : ''}   flex-nowrap  ..5x2:h-20 ..6x3:h-11   bg-white   relative flex flex-row justify-between items-center`}>
				<svg onClick={() => setShowBurger(!showBurger)}
					className="hidden   ..7x1:ml-3 ..6x6:h-6 ..6x6:w-6 ..5x2:block ml-5 cursor-pointer"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2 3.81818C2 2.81403 2.81403 2 3.81818 2H9.27273C10.2769 2 11.0909 2.81403 11.0909 3.81818V9.27273C11.0909 10.2769 10.2769 11.0909 9.27273 11.0909H3.81818C2.81403 11.0909 2 10.2769 2 9.27273V3.81818ZM9.27273 3.81818H3.81818V9.27273H9.27273V3.81818ZM12.9091 3.81818C12.9091 2.81403 13.7231 2 14.7273 2H20.1818C21.186 2 22 2.81403 22 3.81818V9.27273C22 10.2769 21.186 11.0909 20.1818 11.0909H14.7273C13.7231 11.0909 12.9091 10.2769 12.9091 9.27273V3.81818ZM20.1818 3.81818H14.7273V9.27273H20.1818V3.81818ZM2 14.7273C2 13.7231 2.81403 12.9091 3.81818 12.9091H9.27273C10.2769 12.9091 11.0909 13.7231 11.0909 14.7273V20.1818C11.0909 21.186 10.2769 22 9.27273 22H3.81818C2.81403 22 2 21.186 2 20.1818V14.7273ZM9.27273 14.7273H3.81818V20.1818H9.27273V14.7273ZM12.9091 13.8182C12.9091 13.3161 13.3161 12.9091 13.8182 12.9091H21.0909C21.593 12.9091 22 13.3161 22 13.8182C22 14.3203 21.593 14.7273 21.0909 14.7273H13.8182C13.3161 14.7273 12.9091 14.3203 12.9091 13.8182ZM16.5455 17.4545C16.5455 16.9525 16.9525 16.5455 17.4545 16.5455H21.0909C21.593 16.5455 22 16.9525 22 17.4545C22 17.9566 21.593 18.3636 21.0909 18.3636H17.4545C16.9525 18.3636 16.5455 17.9566 16.5455 17.4545ZM12.9091 21.0909C12.9091 20.5888 13.3161 20.1818 13.8182 20.1818H21.0909C21.593 20.1818 22 20.5888 22 21.0909C22 21.593 21.593 22 21.0909 22H13.8182C13.3161 22 12.9091 21.593 12.9091 21.0909Z"
						fill="#DBDCDA"
						stroke="white"
						strokeWidth="0.4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<Logo styles="top-5 ..6x3:mt-0 ..5x2:-mt-1 ..6x3:pl-0 pl-20 ..6x3:top-2 .5x01:pl-2    ..5x1:flex-1    headerAbility ..5x2:absolute " />
				{
					showSearch ? <InputItemSearch setCloseHover={setCloseHover} scrollMenu={scrollMenu} setShowSearch={setShowSearch} /> : <><LinksHeader isHoverBasket={isHoverBasket} setIsHover={setIsHover} scrollMenu={scrollMenu} />
						<Search setCloseHover={setCloseHover} isHoverBasket={isHoverBasket} setIsHover={setIsHover} scrollMenu={scrollMenu} setShowSearch={setShowSearch} /></>
				}

			</nav>
			{scrollMenu && <div className='transition-all duration-500 bg-gray h-px w-91.7% .5x01:w-full mx-auto'></div>
			}
		</>
	);
}

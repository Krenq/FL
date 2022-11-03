import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';
import SearchWindow from '../SearchWindow/SearchWIndow';

export default function Search({ scrollMenu, setIsHover, setShowSearch, setCloseHover, isHoverBasket }) {
	const show = () => setShowSearch(true)

	return (
		<article className="relative  ..5x2:mt-1 ..6x03:mt-0 cursor-pointer .5x01:pr-2  pr-86px ..5x2:flex ..5x1:pl-5">
			<div className='searchA' onClick={show}>
				<Image className='..5x2:opacity-20  '
					src={icons.ICON_SEARCH}
					height="24px"
					width="24px"
					alt="no image"
				/>
			</div>

			<svg className='hidden ..5x2:ml-4 ..5x2:block ..6x6:h-5 ..6x6:w-5' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11.8621 6.72414C12.8905 6.72414 13.7241 5.89046 13.7241 4.86207C13.7241 3.83368 12.8905 3 11.8621 3C10.8337 3 10 3.83368 10 4.86207C10 5.89046 10.8337 6.72414 11.8621 6.72414Z" fill="#DBDCDA" />
				<path d="M11.8621 14.1724C12.8905 14.1724 13.7241 13.3387 13.7241 12.3103C13.7241 11.282 12.8905 10.4483 11.8621 10.4483C10.8337 10.4483 10 11.282 10 12.3103C10 13.3387 10.8337 14.1724 11.8621 14.1724Z" fill="#DBDCDA" />
				<path d="M11.8621 21C12.8905 21 13.7241 20.1663 13.7241 19.1379C13.7241 18.1095 12.8905 17.2759 11.8621 17.2759C10.8337 17.2759 10 18.1095 10 19.1379C10 20.1663 10.8337 21 11.8621 21Z" fill="#DBDCDA" />
			</svg>
			<SearchWindow setCloseHover={setCloseHover} setIsHover={setIsHover} isHoverBasket={isHoverBasket} scrollMenu={scrollMenu} />
		</article>
	);
}

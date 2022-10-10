import React from 'react';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import LinkNavBarItem from '../LinkNavBarItem/LinkNavBarItem';


export default function LinksHeader() {
	return (
		<article className="flex  ..5x2:hidden .1x1:w-3/4 whitespace-nowrap flex-row justify-center items-center p-0 h-8 -ml-86px">
			<LinkNavBarItem title="Каталог" />
			<LinkNavBarItem title="О компании" />
			<LinkNavBarItem title="Бизнес-возможности" />
			<LinkNavBarItem title="Покупателям" />
			<LinkNavBarItem title="Программа лояльности" />

			<ShoppingBag />


		</article>
	);
}

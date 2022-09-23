import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function LinkHeaderItem({ title }) {
	return (
		<article className=" py-6px .1x1:text-xs .3x1:px-2 px-4 text-black font-montserrat font-medium text-sm">
			<Link href="/">
				<article className=" flex flex-row items-center">
					<article>{title}</article>

					<article className=" pl-2 pb-0.5">
						<Image
							src={icons.ICON_ARROW_DOWN}
							width="8px"
							height="6px"
							alt="no image"
						/>
					</article>
				</article>
			</Link>
		</article>
	);
}

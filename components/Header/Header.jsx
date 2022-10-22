import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import SectionOverNavBar from '../SectionOverNavBar/SectionOverNavBar';
import SectionWithStock from '../SectionWithStock/SectionWithStock';
import SectionWithWarnings from '../SectionWithWarnings/SectionWithWarnings';

function Header() {
	const [scrollMenu, setScrollMenu] = useState(false);
	const [showWar, setShowWar] = useState(true);

	let height1 = useRef(null);
	let height2 = useRef(null);
	let height3 = useRef(null);

	const showWarHandler = () => {
		setShowWar(false);
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			let sumH =
				height1?.current?.offsetHeight +
				height2?.current?.offsetHeight +
				height3?.current?.offsetHeight;

			if (window.scrollY >= sumH && sumH !== null) {
				setScrollMenu(true);
			} else if (window.scrollY < sumH && sumH !== null) {
				setScrollMenu(false);
			}
		});
	}

	return (
		<>
			<div ref={height1}>
				<SectionWithStock />
			</div>
			<div ref={height2}>
				{showWar && <SectionWithWarnings showWarHandler={showWarHandler} />}
			</div>
			<div ref={height3}>
				<SectionOverNavBar />
			</div>
			<header className=" max-w-screen-2xl mx-auto sticky -top-1 z-40">
				<NavBar scrollMenu={scrollMenu} />
			</header>
		</>
	);
}

export default Header;

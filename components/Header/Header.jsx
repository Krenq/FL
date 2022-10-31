import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import SectionOverNavBar from '../SectionOverNavBar/SectionOverNavBar';
import SectionWithStock from '../SectionWithStock/SectionWithStock';
import SectionWithWarnings from '../SectionWithWarnings/SectionWithWarnings';

function Header() {
	const [showWar, setShowWar] = useState(true),
		showWarHandler = () => {
			setShowWar(false);
		};
	const [scrollMenu, setScrollMenu] = useState(false)




	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.innerWidth < 1000) return
			if (window.visualViewport.pageTop > 210) setScrollMenu(true)
			else setScrollMenu(false)

		})
	}, [])

	return (
		<>

			<SectionWithStock />


			{showWar && <SectionWithWarnings showWarHandler={showWarHandler} />}


			<SectionOverNavBar />

			<header className=" max-w-screen-2xl ..5x2:static sticky ..5x2:block mx-auto -top-1 z-40">
				<NavBar scrollMenu={scrollMenu} />
			</header>
		</>
	);
}

export default Header;

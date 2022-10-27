import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import SectionOverNavBar from '../SectionOverNavBar/SectionOverNavBar';
import SectionWithStock from '../SectionWithStock/SectionWithStock';
import SectionWithWarnings from '../SectionWithWarnings/SectionWithWarnings';

function Header() {
	const [showWar, setShowWar] = useState(true);
	const showWarHandler = () => {
		setShowWar(false);
	};


	return (
		<>

			<SectionWithStock />


			{showWar && <SectionWithWarnings showWarHandler={showWarHandler} />}


			<SectionOverNavBar />

			<header className=" max-w-screen-2xl mx-auto -top-1 z-40">
				<NavBar />
			</header>
		</>
	);
}

export default Header;

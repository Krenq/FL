import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import SectionOverNavBar from '../SectionOverNavBar/SectionOverNavBar';
import SectionWithStock from '../SectionWithStock/SectionWithStock';
import SectionWithWarnings from '../SectionWithWarnings/SectionWithWarnings';

function Header({ showSearch, setShowSearch, showBurger, setShowBurger }) {
  const [showWar, setShowWar] = useState(true),
    showWarHandler = () => {
      setShowWar(false);
    };
  const [scrollMenu, setScrollMenu] = useState(false);
  const [boolLogIn, setBoolLogIn] = useState(false);

  let height1 = useRef(null);
  let height2 = useRef(null);
  let height3 = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerWidth < 1000) return setScrollMenu(false);
      // let sumH =
      // 	height1?.current?.offsetHeight +
      // 	height2?.current?.offsetHeight +
      // 	height3?.current?.offsetHeight;

      let sumH =
        height2?.current?.offsetHeight + height3?.current?.offsetHeight;

      if (window.scrollY >= sumH && sumH !== null) {
        setScrollMenu(true);
      } else if (window.scrollY < sumH && sumH !== null) {
        setScrollMenu(false);
      }
    });
  }, []);

  function logIn() {
    return setTimeout(() => {
      setBoolLogIn(true);
    }, 3000);
  }

  return (
    <>
      {/* <div ref={height1}>
				<SectionWithStock />
			</div> */}
      <div ref={height2} id="stock">
        {showWar && <SectionWithWarnings showWarHandler={showWarHandler} />}
      </div>
      <div ref={height3}>
        <SectionOverNavBar logIn={logIn} boolLogIn={boolLogIn} />
      </div>

      <header className=" max-w-screen-2xl transition-all ..5x2:static sticky ..5x2:block mx-auto -top-1 z-50">
        <NavBar
          showBurger={showBurger}
          setShowBurger={setShowBurger}
          scrollMenu={scrollMenu}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          logIn={logIn}
          boolLogIn={boolLogIn}
        />
      </header>
    </>
  );
}

export default Header;

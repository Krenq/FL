import React from 'react';
import NavBar from '../NavBar/NavBar';
import SectionOverNavBar from '../SectionOverNavBar/SectionOverNavBar';
import SectionWithStock from '../SectionWithStock/SectionWithStock';
import SectionWithWarnings from '../SectionWithWarnings/SectionWithWarnings';

function Header() {
  return (
    <>
      <SectionWithStock />
      <SectionWithWarnings />
      <SectionOverNavBar />
      <header className=" sticky top-0 z-50">
        <NavBar />
      </header>
    </>
  );
}

export default Header;

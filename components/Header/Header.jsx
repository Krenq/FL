import React from 'react';
import NavBar from '../NavBar/NavBar';
import SectionOverNavBar from '../SectionOverNavBar/SectionOverNavBar';
import SectionWithStock from '../SectionWithStock/SectionWithStock';
import SectionWithWarnings from '../SectionWithWarnings/SectionWithWarnings';

function Header() {
  return (
    <header>
      <SectionWithStock />
      <SectionWithWarnings />
      <SectionOverNavBar />
      <NavBar />
    </header>
  );
}

export default Header;

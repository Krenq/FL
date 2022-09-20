import React from 'react';
import LinksHeader from '../LinksNavBar/LinksNavBar';
import Logo from '../ui/Logo/Logo';
import Search from '../Search/Search';

export default function NavBar() {
  return (
    <nav className="container-base h-100px flex flex-row justify-between items-center ">
      <Logo styles="top-5 pl-20" />
      <LinksHeader />
      <Search />
    </nav>
  );
}

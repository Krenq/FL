import React from 'react';
import FooterMenuList from '../FooterMenuList/FooterMenuList';
import SectionFooterInfo from '../SectionFooterInfo/SectionFooterInfo';
import SectionFooterRight from '../SectionFooterRight/SectionFooterRight';

export default function SectionFooterMain() {
  return (
    <div className="flex flex-row justify-between items-center h-384px">
      <SectionFooterInfo />
      <FooterMenuList />
      <SectionFooterRight />
    </div>
  );
}

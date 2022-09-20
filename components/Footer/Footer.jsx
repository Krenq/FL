import React from 'react';
import SectionFooterStock from '../ui/SectionFooterStock/SectionFooterStock';
import SectionFooterAgreement from '../SectionFooterAgreement/SectionFooterAgreement';
import SectionFooterMain from '../SectionFooterMain/SectionFooterMain';

export default function Footer() {
  return (
    <footer className=" h-460px bg-white">
      <div className="container-base px-20 font-montserrat">
        <SectionFooterMain />
        <SectionFooterAgreement />
      </div>

      <SectionFooterStock
        text={[
          'В соответствии с законом о регистрации продаж, продавец обязан выдавать покупателю счёт-фактуру. Он также обязан зарегистрировать полученную выручку в налоговом комитете в режиме онлайн; в случае технических неполадок не позже 48 часов после получения выручки.',
          'P.H.U. Kapitał Patrycja Milic Polska ul. Wojska Polskiego 20, 41-400 Mysłowice NIP 6342286043, REGON 277563151',
        ]}
      />
    </footer>
  );
}

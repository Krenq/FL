import React from 'react';

export default function FooterMenuList() {
  return (
    <div className="flex flex-row justify-around w-7/12">
      <div className="flex flex-col justify-between h-272px">
        <div className=" font-semibold text-base">Компания</div>
        <div className=" font-normal text-sm text-black-70pe">О бренде</div>
        <div className=" font-normal text-sm text-black-70pe">Новости</div>
        <div className=" font-normal text-sm text-black-70pe">Instashop</div>
        <div className=" font-normal text-sm text-black-70pe">Контакты</div>
        <div className=" font-normal text-sm text-black-70pe">
          Сервисные центры
        </div>
      </div>
      <div className="flex flex-col justify-between h-272px">
        <div className=" font-semibold text-base">Каталог</div>
        <div className=" font-normal text-sm text-black-70pe">Акции</div>
        <div className=" font-normal text-sm text-black-70pe">Наборы</div>
        <div className=" font-normal text-sm text-black-70pe">Новинки</div>
        <div className=" font-normal text-sm text-black-70pe">Хиты продаж</div>
        <div className=" font-normal text-sm text-black-70pe">
          Программы здоровья
        </div>
      </div>
      <div className="flex flex-col justify-between h-222px">
        <div className=" font-semibold text-base">Покупателям</div>
        <div className=" font-normal text-sm text-black-70pe">
          Оплата, доставка, возврат
        </div>
        <div className=" font-normal text-sm text-black-70pe">
          Обратная связь
        </div>
        <div className=" font-normal text-sm text-black-70pe">Online-бонус</div>
        <div className=" font-normal text-sm text-black-70pe">
          Личный кабинет
        </div>
      </div>
      <div className="flex flex-col justify-between h-222px">
        <div className=" font-semibold text-base">Бизнес-возможности</div>
        <div className=" font-normal text-sm text-black-70pe">
          Успех, деньги, карьера
        </div>
        <div className=" font-normal text-sm text-black-70pe">
          Online-возможности
        </div>
        <div className=" font-normal text-sm text-black-70pe">
          Управление и развитие
        </div>
        <div className=" font-normal text-sm text-black-70pe">
          Присоединяйтесь
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import * as icons from '../../images/constsIcons';

export default function ProductItem({ title, photo, lastItem }) {
  return (
    <>
      {lastItem ? (
        <>
          <div className="flex flex-col items-center justify-center w-full max-w-228px max-h-228px bg-gray-light cursor-pointer hover:text-primary transition-all .3x1:hidden">
            <p className="text-2xl text-primary font-medium">Каталог</p>
            <p className="flex justify-center items-center text-sm text-primary cursor-pointer">
              Перейти{' '}
              <svg
                className="ml-1"
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52529 0.935913L7.58469 1.70374L9.76485 3.46684L0.694824 3.47426L0.696166 4.55759L9.74134 4.5502L7.59791 6.2999L8.54292 7.06414L12.3053 3.99286L8.52529 0.935913Z"
                  fill="#337202"
                />
              </svg>
            </p>
          </div>

          <div className="hidden max-w-228px max-h-262px cursor-pointer hover:opacity-90 hover:text-primary transition-all .3x1:flex .3x1:flex-row-reverse .3x1:border .3x1:border-gray-light2 .3x1:m-1 ..6x3:h-16">
            <div className="cartinka .3x1:w-35% ..6x5:h-full">
              <Image
                className="object-cover "
                src={icons.ICON_DE_CATALOG}
                alt="productsPhoto"
                width={228}
                height={228}
              />
            </div>
            <div className=".3x1:flex .3x1:items-center .3x1:w-65% .3x1:h-full .3x1:p-2">
              <p className="text-center font-semibold text-13px font-montserrat .3x1:flex .3x1:justify-center .3x1:items-center .3x1:whitespace-nowrap .3x1:text-black-70pe .3x1:font-normal ..7x1:text-10px">
                DE-КАТАЛОГ
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className=" max-w-228px max-h-262px cursor-pointer hover:opacity-90 hover:text-primary transition-all .3x1:flex .3x1:flex-row-reverse .3x1:border .3x1:border-gray-light2 .3x1:m-1 ..6x3:h-16">
          <div className="cartinka .3x1:w-35% ..6x5:h-full">
            <Image
              className="object-cover "
              src={photo}
              alt="productsPhoto"
              width={228}
              height={228}
            />
          </div>
          <div className=".3x1:flex .3x1:items-center .3x1:w-65% .3x1:h-full .3x1:pl-2">
            <p className="text-center font-semibold text-13px font-montserrat .3x1:flex .3x1:justify-center .3x1:items-center .3x1:whitespace-nowrap .3x1:text-black-70pe .3x1:font-normal ..7x1:text-10px">
              {title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

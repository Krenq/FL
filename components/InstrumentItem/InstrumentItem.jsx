import Image from 'next/image';
import SectionImgs from './sectionImgs';

export default function InstrumentItem({
  icon,
  text,
  title,
  btnText,
  bottomImg1,
  bottomImg2,
  country,
  underCountry,
  variant,
  textImg,
}) {
  return (
    <div className=" mx-2 py-26px ..5x1:px-1 px-5 mt-20 ..5x1:w-auto w-475px max-w-475px min-w-180px h-250px ..5x1:h-305px flex flex-col items-center justify-between ..5x1:bg-gray-light bg-gray-100 rounded-lg">
      <div className="flex-shrink-0">
        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <Image src={icon} width={64} height={64} />
        </div>

        <h3 className=" text-26px leading-140% text-center ..5x1:text-sm text-black font-medium font-montserrat pt-4">
          {title}
        </h3>

        {country ? (
          <>

            <p className="hidden ..5x1:block text-center text-gray-quick-silver mt-1 mb-4 text-xs ..6x3:text-sm">
              {title === 'Доставка от 1000 ₽' && `${country}, `}
              {underCountry}
            </p>

            <div className="w-full flex justify-between">
              <small className=" ..5x1:hidden flex items-center mr-5 font-medium border-b border-dashed border-gray-quick-silver">
                {country}{' '}
                <svg
                  className="ml-1"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2282_697496)">
                    <path
                      d="M7.38542 9.625L5 12.0201L2.60937 9.625L1.875 10.3623L5 13.5L8.125 10.3623L7.38542 9.625Z"
                      fill="#337202"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2282_697496">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(0 6)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </small>
              <SectionImgs variant={variant} textImg={textImg} />
            </div>

            <p className="..5x1:hidden text-left text-gray-quick-silver mt-1 mb-4 text-xs ..6x3:text-sm">
              {underCountry}
            </p>
          </>
        ) : (
          <p className=" text-center ..5x1:text-11px leading-140% font-montserrat font-medium text-base text-black-70pe py-4">
            {text}
          </p>
        )}
      </div>

      {bottomImg1 ? (
        <div className="flex ..5x1:flex-col flex-row justify-center ">
          <div className="mx-1">
            <Image
              className="object-fill"
              width={135}
              height={44}
              src={bottomImg1}
            />
          </div>
          <div className="mx-1">
            <Image
              className="object-fill"
              width={135}
              height={44}
              src={bottomImg2}
            />
          </div>
        </div>
      ) : (
        <p className="flex flex-row justify-center font-montserrat font-medium text-13px leading-100% items-center">
          {btnText ? btnText : 'Подробнее'}
          <svg
            className="ml-2"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z"
              fill="black"
            />
          </svg>
        </p>
      )}
    </div>
  );
}

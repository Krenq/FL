import Image from 'next/image';
import Slider from 'react-slick';
import one from '../../images/templates/1forBuyers.jpg';
import two from '../../images/templates/2forBuyres.jpg';
import three from '../../images/templates/3forBuyers.jpg';
import groups from '../../images/templates/groups.png';
import twoglos from '../../images/templates/2glos.jpg';

function Buyers() {
  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          className: 'center',
          centerMode: true,
          centerPadding: '75px',
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          className: 'center',
          centerMode: true,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          className: 'center',
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="absolute left-0 bottom-0 ..6x2:w-40 ..6x2:h-40 .4x1:-bottom-32">
        <Image className="object-cover " src={twoglos} alt="specialOffersImg" />
      </div>

      <section className="container__special relative pt-10 .4x1:pt-10 ..5x2:pt-32">
        <svg
          className="absolute ..6x2:h-36 ..6x2:mt-5 left-1/2 ability ..5x2:top-10 -top-8"
          width="184"
          height="183"
          viewBox="0 0 184 183"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M151.013 93.73C151.013 93.73 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.058 15.8079 123.058C15.8079 123.058 39.851 57.2523 64.9368 42.373C90.0226 27.4936 133.618 51.8244 133.618 51.8244"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M168.192 59.8028C168.192 59.8028 132.964 80.5241 105.01 90.4961C77.0561 100.468 53.4366 100.74 53.4366 100.74"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.01 90.4961L71.0828 73.3172"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.01 90.496L91.1736 116.337"
            stroke="#EFF5F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-center text-4xl italic mb-16 ..6x04:text-3xl z-10 ..6x04:mb-10 relative">
          ПОКУПАТЕЛЯМ
        </p>

        <Slider {...settings}>
          <div className=" px-2">
            <Image
              className="object-cover"
              src={one}
              alt="specialOffersImg"
              height={768}
              width={710}
            />
          </div>

          <div className="px-2">
            <Image
              className="object-cover"
              src={one}
              alt="specialOffersImg"
              height={768}
              width={710}
            />
          </div>

          <div className="flex flex-col justify-between px-2 h-full ">
            {/* <div className="mb-3 ..5x1:mb-2 ..5x03:mb-3 ..6x1:mb-2 ..6x03:mb-1 ..7x01:mb-0">
             */}
            <div className="relative cartinka">
              <Image
                className=" object-cover"
                src={two}
                alt="specialOffersImg"
                width={710}
                height={380}
              />

              <p className="..7x2:text-xl ..6x2:text-lg ..6x4:text-2xl ..6x1:top-3 text-4xl z-10 .2x1:text-3xl text-black absolute top-10 left-5 ..5x1:text-2xl">
                Кешбэк-марафон + <br /> розыгрыш бьюти-гаджетов
              </p>
              <p className="..7x2:text-base  ..6x2:text-base ..6x4:top-20 ..6x4:text-lg ..6x2:top-16  ..6x1:top-20 text-3xl z-10 .2x1:text-2xl absolute  left-5 top-32 text-primary ..5x1:text-xl ..5x1:top-28">
                6%, 7%, 8%
              </p>

              <div className="absolute top-24 ..6x3:pt-0 left-44">
                <Image
                  className="object-cover"
                  src={groups}
                  alt="specialOffersImg"
                />
              </div>
              <button className="buttons ..7x2:h-11 ..7x2:pt-3 absolute ..6x2:top-24 ..6x4:top-32 ..6x2:text-xs ..6x1:top-28 top-48 .2x1:text-base ..5x1:text-sm ..5x1:h-12 ..5x1:top-36 transition-all hover:opacity-80  h-14 w-42 bg-primary left-5 text-white px-8 py-4">
                Подробнее
              </button>
            </div>

            <div className="relative cartinka">
              <Image
                className="object-cover"
                src={three}
                alt="specialOffersImg"
                width={710}
                height={380}
              />

              <p className="..7x2:text-xl ..6x2:text-lg ..6x4:text-2xl ..6x1:top-4 ..6x2:top-5 ..6x1:top-3..6x1:top-3  text-4xl z-10 .2x1:text-3xl text-black absolute top-10  left-4 w-full ..5x1:text-2xl">
                Бесплатная доставка <br /> от 1500 ₽
              </p>
              <p className="..7x2:text-base   ..6x2:text-base ..6x4:top-20 ..6x4:text-lg ..6x2:top-16  ..6x1:top-20 text-3xl z-10 .2x1:text-2xl  text-primary absolute news top-32 left-4  w-full ..5x1:text-xl ..5x1:top-28">
                новичкам июня
              </p>
              <button className="buttons  ..7x2:h-11 ..7x2:pt-3 ..6x4:top-32 ..6x1:top-28 ..6x2:top-24 ..6x2:text-xs ..5x1:text-sm ..5x1:h-12 ..5x1:top-36 transition-all .2x1:h-14 .2x1:w-36  hover:opacity-80 bg-primary absolute w-52 top-52 h-16 see text-white px-8 py-4 left-4">
                Подробнее
              </button>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
}
export default Buyers;

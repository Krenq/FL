import Image from 'next/image';
import Slider from 'react-slick';
import oneHealth from '../../images/templates/1health.png';
import twoHealth from '../../images/templates/2health.jpg';
import treeHealth from '../../images/templates/3health.jpg';
const Health = () => {
  const settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 100000,
        settings: 'unslick',
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <svg
        className="ability ..6x2:h-36 ..6x2:mt-5 absolute left-1/2 -top-6 "
        width="184"
        height="183"
        viewBox="0 0 184 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M151.013 93.7301C151.013 93.7301 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.059 15.8079 123.059C15.8079 123.059 39.851 57.2524 64.9368 42.3731C90.0226 27.4937 133.618 51.8245 133.618 51.8245"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M168.192 59.8027C168.192 59.8027 132.964 80.524 105.01 90.496C77.0561 100.468 53.4366 100.739 53.4366 100.739"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M105.01 90.4961L71.0828 73.3172"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M105.01 90.496L91.1736 116.337"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <section className="bg-gray-light pb-28 .1x1:pb-10 ..5x1:pb-0">
        <div className="container__special">
          <p className="absolute ability left-1/2  text-black  text-2xl pt-20 font-medium ..6x04:text-xl">
            Программы
          </p>
          <p className="text-center text-black pt-28 italic text-3xl font-medium ..6x04:text-2xl">
            КРАСОТЫ И ЗДОРОВЬЯ
          </p>
          <p className="text-center mt-2 mb-12 text-sm">
            Есть проблемы? У нас есть решения!
          </p>

          <Slider {...settings} className="flex">
            <div>
              <div className=" ..7x11:px-1 bg-white relative  pb-96 mx-3 ..7x2:pb-96 mb-3 cursor-pointer transition-all hover:text-white hover:bg-primary sale">
                <p className="..6x04:text-6xl text-7xl ability transition-all leading-140% text-gray-platinum absolute z- font-montserrat font-bold left-1/2 procent">
                  -30%
                </p>
                <p className=" ability ..6x04:text-xl text-2xl transition-all text-primary  absolute top-12 z-10 left-1/2 title_sale">
                  «АНТИСТРЕСС»
                </p>
                <p className=" ability ..7x11:w-56 ..6x04:text-xl text-2xl text-center  absolute top-20 z-10 left-1/2 ">
                  Смотри на мир здоровыми глазами!
                </p>
                <div className="absolute  bottom-0 ..5x2:bottom-10 ..6x6:bottom-16 ..7x1:bottom-24  left-1/2 ability">
                  <p className="absolute ..6x2:font-medium ..6x2:text-lg ..7x001:left-4 ..6x5:left-22%  flex items-center text-sm top-50% left-30% z-10">
                    Подробнее{' '}
                    <svg
                      className="ml-2 sale_btn transition-all"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
					  className=' transition-all'
                        d="M8.02523 0.935913L7.08463 1.70374L9.26479 3.46684L0.194763 3.47426L0.196105 4.55759L9.24128 4.5502L7.09785 6.2999L8.04286 7.06414L11.8053 3.99286L8.02523 0.935913Z"
                        fill="black"
                      />
                    </svg>
                  </p>
                  <Image
                    className="object-cover"
                    src={oneHealth}
                    width={300}
                    height={300}
					quality={100}
                    alt="discountImg"
                  />
                </div>
              </div>
              <div className="relative mt-3.5 mx-3 cursor-pointer transition-all hover:text-primary hover:opacity-90">
                <p className="absolute ..7x1:left-2 ..6x4:top-5 ..6x4:left-5 ..6x3:top-10 ..6x04:text-xl z-10 top-20 text-2xl text-primary left-10 ..7x2:left-2">
                  «ЗДОРОВЫЙ СОН»
                </p>
                <p className="absolute ..7x1:text-xl ..7x1:top-14 ..7x1:left-2 ..6x4:top-16 ..6x4:left-5 ..6x3:top-20 ..6x04:text-2xl z-10 top-32 text-3xl   left-10 ..7x2:text-lg ..7x2:left-2">
                  Чтобы каждое утро было <br /> добрым
                </p>
                <Image
                  className="object-cover"
                  src={twoHealth}
                  width={720}
                  height={900}
                  alt="discountImg"
                />
                <p className="absolute ..6x2:text-lg  ..6x2:font-medium ..7x1:left-2 ..7x1:top-32 ..6x4:top-40 ..6x4:left-5 ..6x3:top-44 top-52 cursor-pointer z-10 left-10 flex items-center text-sm ..7x2:left-2">
                  Подробнее{' '}
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
              </div>
            </div>
            <div>
              <div className="relative mx-3 transition-all hover:text-primary hover:opacity-90 cursor-pointer">
                <p className="absolute ..6x04:text-xl z-10 top-20 text-2xl left-10 ..7x2:left-2">
                  «ЧИСТАЯ КОЖА»
                </p>
                <p className="absolute ..6x04:text-2xl z-10 top-32 text-3xl text-primary left-10 ..7x2:text-lg ..7x2:left-2">
                  Фитокоррекция <br /> проблемной кожи
                </p>
                <p className="absolute ..6x2:text-lg  ..6x2:font-medium top-52 cursor-pointer z-10 left-10 flex items-center text-sm  ..7x2:left-2">
                  Подробнее{' '}
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
                <Image
                  className="object-cover"
                  src={treeHealth}
                  width={720}
                  height={900}
                  alt="discountImg"
                />
              </div>
              <div className="mx-3 px-3 h-380px bg-primary pb-2 ..5x03:pb-8 .1x1:pb-5  mt-3 relative">
                <h1 className="text-32px text-center mb-5 pt-11 ..5x4:pt-10 ..5x3:pt-12 text-w text-white">
                  50+ программ
                </h1>
                <p className="text-center ..5x03:font-normal ..5x4:pb-24 text-2xl text-white pb-40 .1x1:text-xl ..5x3:pb-32 ..7x2:text-base ..7x2:pb-32">
                  «Мужское здоровье», «антипаразитарная <br /> программа»,
                  «бодрость и энергия», «активное <br /> долголетие» и др.
                </p>
                <button className="ability border-2 border-gray absolute bottom-20 ..5x4:bottom-16 text-gray py-2 px-4  left-1/2 hover:text-white transition-all ..7x2:text-sm">
                  Все программы
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};
export default Health;

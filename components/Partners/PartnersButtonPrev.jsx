import useWindowSize from '../utils/useWindowSize';

const PartnersButtonPrev = ({ onClick, kolichestvo }) => {
  let size = useWindowSize();
  let perc = '46%';

  if (size.width <= 1600 && size.width > 1350) {
    perc = '46%';
  } else if (size.width <= 1350 && size.width > 1100) {
    perc = '45.5%';
  } else if (size.width <= 1100 && size.width > 990) {
    perc = '44%';
  } else if (size.width <= 990 && size.width > 780) {
    perc = '43%';
  } else if (size.width <= 780 && size.width > 650) {
    perc = '42%';
  } else if (size.width <= 650 && size.width > 500) {
    perc = '39%';
  } else if (size.width <= 500 && size.width > 400) {
    perc = '38%';
  } else if (size.width <= 400) {
    perc = '33%';
  } else if (size.width > 1600) {
    perc = '46%';
  }

  let styleL = {
    left: `calc(${perc} - 12.5px * ${kolichestvo})`,
  };

  return (
    <button
      className="prevPartner absolute transition-all hover:bg-gray bg-white py-3 px-4"
      onClick={onClick}
      style={styleL}
    >
      <svg
        width="10"
        className="fill-black transition-all"
        height="16"
        viewBox="0 0 10 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.33 8L1.03 16L0 15L4 9L4.7 8L4 7L0 1L1.03 0L9.33 8Z"
          fill="black"
        />
      </svg>
    </button>
  );
};
export default PartnersButtonPrev;

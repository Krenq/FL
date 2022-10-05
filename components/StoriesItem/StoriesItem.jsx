import Image from 'next/image';

export default function ({ photo, text }) {
  return (
    <div className=" px-1">
      <div className="relative p-1 flex items-center justify-center transition-all hover:opacity-80 cursor-pointer stories">
        <Image className="object-cover" src={photo} alt="newsImg" />
        <p className="absolute bottom-5 left-5 font-montserrat font-medium text-xl text-white ..6x4:text-base">{text}</p>
      </div>
    </div>
  );
}

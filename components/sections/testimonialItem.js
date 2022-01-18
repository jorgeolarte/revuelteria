import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

export default function TestimonialItem({ id, name, image, children }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <blockquote
      id={`testimonialItem_${id}`}
      className='flex flex-col space-y-2 bg-gradient-to-b from-gray-100 to-transparent p-10'
    >
      <div className='flex flex-inline mx-auto justify-center items-center space-x-1 pt-2'>
        {stars.map((value) => (
          <StarIcon
            key={value.toString()}
            className={`w-5 h-5 text-yellow-300 transition duration-200 ease-in transform hover:scale-125`}
          />
        ))}
      </div>
      <div className='text-center'>
        <p className='text-xl font-medium'>"{children}"</p>
      </div>
      <div className='flex flex-inline mx-auto justify-center items-center space-x-1'>
        <Image
          src={`/images/${image}`}
          alt={name}
          width='25'
          height='25'
          className='flex-shrink rounded-full '
        />
        <h2 className='text-md'>{name}</h2>
      </div>
    </blockquote>
  );
}

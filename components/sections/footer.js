import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className='max-w-full mx-auto px-4 py-10 flex justify-between items-center bg-gray-100'>
      <div className='text-sm leading-none'>
        La Revuelteria &copy; 2021 <br />
        <span className='text-xs'>Cartago, Valle del Cauca</span>
      </div>
      <div className='flex flex-row space-x-3'>
        <a
          href='https://facebook.com/revuelteria'
          target='_blank'
          className='text-primary hover:text-opacity-80 transition duration-500 ease-in-out transform hover:scale-110'
          title='Facebook'
        >
          <FontAwesomeIcon icon={faFacebook} className='w-7 h-7 ' />
        </a>

        <a
          href='https://instagram.com/larevuelteria.co'
          target='_blank'
          className='text-primary hover:text-opacity-80 transition duration-500 ease-in-out transform hover:scale-110'
          title='Instagram'
        >
          <FontAwesomeIcon icon={faInstagram} className='w-7 h-7' />
        </a>

        <a
          href='https://bit.ly/3svWG1R'
          target='_blank'
          className='text-primary hover:text-opacity-80 transition duration-500 ease-in-out transform hover:scale-110'
          title='Whatsapp'
        >
          <FontAwesomeIcon icon={faWhatsapp} className='w-7 h-7' />
        </a>
      </div>
    </footer>
  );
}

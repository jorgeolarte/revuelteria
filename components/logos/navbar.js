import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <Link href='/'>
        <a className='block lg:hidden w-auto'>
          <Image
            src='/images/logo-la-revuelteria.png'
            width={212}
            height={40}
            alt='La Revuelteria'
          />
        </a>
      </Link>
      <Link href='/'>
        <a className='hidden lg:block w-7 h-7'>
          <Image
            src='/images/iso-la-revuelteria-green.png'
            width={40}
            height={40}
            alt='La Revuelteria'
          />
        </a>
      </Link>
    </>
  );
}

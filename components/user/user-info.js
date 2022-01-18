import { useContext } from "react";
import { AuthContext } from "@/lib/auth";
import Image from "next/image";

export default function UserInfo() {
  const { user } = useContext(AuthContext);

  return (
    <div className='flex-none md:w-full md:order-1'>
      <section className='shadow-lg backdrop-filter backdrop-blur-md flex flex-col justify-center items-center p-5 rounded-lg space-y-4 md:space-x-4 text-white'>
        <div className='flex-none rounded-full w-20 h-20'>
          <Image
            src='/images/profile.svg'
            width='400'
            height='400'
            className='rounded-full'
          />
        </div>
        <header className='flex-grow'>
          <h2 className='text-xl font-semibold'>Bienvenido</h2>
          <p>{user.email}</p>
        </header>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/outline";

export default function NoOrders() {
  return (
    <section className='space-y-2 md:text-center'>
      <header>
        <h2 className='text-xl font-semibold'>No tienes pedidos</h2>
        <p>Realiza tu primer pedido</p>
      </header>
      <div className='flex justify-center items-center w-auto h-auto'>
        <div className='absolute  bg-gradient-to-b from-gray-200 via-white to-transparent bg-opacity-80 origin-center transform -rotate-2 w-64 h-64'></div>
        <div className='w-auto h-auto'>
          <Image
            src='/images/emptyCart.svg'
            width='400'
            height='400'
            alt='No tienes pedidos'
          />
        </div>
      </div>
      <Link href='app/shopping'>
        <a className='btn-primary btn-md'>
          <ShoppingCartIcon className='w-5 h-5' />
          <span>Pedir mercado</span>
        </a>
      </Link>
    </section>
  );
}

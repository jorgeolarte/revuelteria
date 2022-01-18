import Link from "next/link";
import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Button } from "@/components/buttons";
import { logout } from "@/lib/firebaseClient";

export default function IsLogin() {
  return (
    <>
      <Button
        href='/shopping'
        className='navbar-link'
        iconName='ShoppingCartIcon'
        iconSize='w-6 h-6'
      >
        Mercar
      </Button>
      <Button
        href='#'
        className='navbar-link'
        iconName='ShoppingBagIcon'
        iconSize='w-6 h-6'
        srOnly='false'
      >
        Historial de pedidos
      </Button>
      <div className='ml-3 relative'>
        <a href='#' className='text-white' onClick={() => logout()}>
          <span className='sr-only'>Salir</span>
          <UserCircleIcon className='w-7 h-7 bg-primary rounded-full' />
        </a>
      </div>
    </>
  );
}

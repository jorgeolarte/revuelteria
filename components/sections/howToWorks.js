import {
  ClockIcon,
  MailOpenIcon,
  UserIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Button } from "@/components/buttons";

export default function HowToWorks() {
  return (
    <section className='bg-gray-50 max-w-full mx-auto px-4 py-10 flex flex-col justify-center space-y-3 items-center '>
      <div className='text-center'>
        <h1 className='font-display text-5xl font-semibold pb-2'>
          ¿Qué hago para tener mi plan?
        </h1>
        <p>Es muy fácil, sólo debes seguir los pasos</p>
      </div>
      <div className='flex flex-row md:flex-col justify-center items-start md:items-stretch text-center'>
        <div className='flex-1'>
          <div className='flex flex-col md:flex-row justify-start items-center p-5'>
            <UserIcon className='text-warning text-opacity-80 w-16 h-16 m-5' />
            <div className='md:text-left'>
              <h2 className='text-xl font-medium'>Regístrate</h2>
              <p>Ingresas tus datos en nuestra plataforma</p>
            </div>
          </div>
        </div>
        <div className='flex-none md:hidden pt-16'>
          <ChevronRightIcon className='w-16 h-16 text-primary text-opacity-20 ' />
        </div>
        <div className='flex-1'>
          <div className='flex flex-col md:flex-row justify-start items-center p-5'>
            <MailOpenIcon className='text-warning text-opacity-80 w-16 h-16 m-5' />
            <div className='md:text-left'>
              <h2 className='text-xl font-medium'>Una receta por día</h2>
              <p>Recibe cada día una receta fácil y saludable</p>
            </div>
          </div>
        </div>
        <div className='flex-none md:hidden pt-16'>
          <ChevronRightIcon className='w-16 h-16 text-primary text-opacity-20 ' />
        </div>
        <div className='flex-1'>
          <div className='flex flex-col md:flex-row  justify-start items-center p-5'>
            <ClockIcon className='text-warning text-opacity-80 w-16 h-16 m-5' />
            <div className='md:text-left'>
              <h2 className='text-xl font-medium'>En 15 minutos</h2>
              <p>Solo necesitas 15 minutos para preparar tu comida</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          href='/shopping'
          className='btn-warning-outline btn-md'
          iconName='ClipboardCheckIcon'
          iconSize='w-5 h-5'
        >
          Quiero mi plan
        </Button>
      </div>
    </section>
  );
}

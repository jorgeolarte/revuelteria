import { Button } from "@/components/buttons";

export default function Free() {
  return (
    <main className='max-w-full mx-auto bg-landing-page bg-center bg-cover bg-no-repeat'>
      <div className='bg-dark bg-opacity-25'>
        <div className='flex flex-col justify-center items-center space-y-4 text-white text-center h-screen pt-10'>
          <h1 className='filter drop-shadow-md font-display text-6xl font-semibold leading-none'>
            Plan{" "}
            <span className='bg-warning bg-opacity-60 pb-2 animate-pulse'>
              gratis
            </span>{" "}
            de
            <br />
            alimentación semanal
          </h1>
          <p className='filter drop-shadow-md text-xl font-medium'>
            Cocina saludable,
            <br />
            barato y en poco tiempo
          </p>
          <Button
            href='/shopping'
            className='btn-primary btn-xl'
            iconName='BadgeCheckIcon'
            iconSize='w-5 h-5'
          >
            Empecemos
          </Button>
        </div>
      </div>
    </main>
  );
}

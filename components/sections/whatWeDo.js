import WhatWeDoItem from "./whatWeDoItem";
import { Button } from "@/components/buttons";

export default function WhatWeDo() {
  const objToDo = [
    {
      id: 1,
      text: "Entregamos en la puerta de tu casa las frutas y verduras.",
    },
    {
      id: 2,
      text: "Lavamos y limpiamos todas las frutas y verduras como Dios manda.",
    },
    {
      id: 3,
      text: "Pelamos y almacenamos aquellas frutas y verduras que se dañan con solo mirarlas, las cortamos y almacenamos para maximizar su duración.",
    },
    {
      id: 4,
      text: "Te prestamos los táperes, los regresas cuando te entreguemos tu siguiente pedido.",
    },
  ];

  return (
    <section className='max-w-full mx-auto px-4 bg-what-we-do bg-center bg-cover bg-no-repeat '>
      <div className='flex flex-row justify-end md:justify-center items-center'>
        <div className='flex flex-col space-y-3 bg-white w-3/5 md:w-3/4 sm:min-w-full px-10 md:px-6 py-10'>
          <div>
            <h1 className='font-display text-5xl font-semibold text-center pb-4'>
              ¿Qué hacemos por ti?
            </h1>
          </div>
          <div className='flex flex-col space-y-2'>
            {objToDo.map((todo) => (
              <WhatWeDoItem key={todo.id} id={todo.id}>
                {todo.text}
              </WhatWeDoItem>
            ))}
          </div>
          <div className='flex justify-center'>
            <Button
              href='/shopping'
              className='btn-warning-outline btn-md'
              iconName='ShoppingCartIcon'
              iconSize='w-5 h-5'
            >
              Pedir mi mercado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

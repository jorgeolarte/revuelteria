import Link from "next/link";
import { ClipboardCheckIcon } from "@heroicons/react/solid";
import { Button } from "@/components/buttons";

export default function Final() {
  return (
    <section className='max-w-full mx-auto px-4 py-10 flex flex-col justify-center space-y-3 items-center'>
      <h1 className='text-xl text-dark font-medium text-center'>
        ¿Quieres tu plan de alimentación?
      </h1>
      <Button
        href='/shopping'
        className='btn-primary btn-xl'
        iconName='ClipboardCheckIcon'
        iconSize='w-5 h-5'
      >
        Oprime aquí para pedir el tuyo
      </Button>
    </section>
  );
}

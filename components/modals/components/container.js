import { Dialog } from "@headlessui/react";
import CloseButton from "@/components/modals/components/close-button";
import { ModalLogo } from "@/components/logos";

export default function ModalContainer({ title, description, children }) {
  return (
    <>
      <div className='flex flex-col justify-center items-center space-y-5'>
        <Dialog.Title className='hidden'>{title}</Dialog.Title>
        <Dialog.Description className='hidden'>
          {description}
        </Dialog.Description>
        <ModalLogo />
        {children}
      </div>
      {/* <CloseButton /> */}
    </>
  );
}

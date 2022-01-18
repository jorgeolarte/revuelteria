import { useState } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

export default function FaqItem({ id, question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const questionClicked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id={`faqItem_${id}`} className='shadow-md'>
      <div
        className='flex flex-row justify-between items-center bg-gradient-to-r from-gray-100  to-gray-50 hover:from-gray-200 py-4 px-6 cursor-pointer text-dark text-opacity-80'
        onClick={questionClicked}
      >
        <div className='flex-grow'>
          <h2 className='text-lg font-medium'>{question}</h2>
        </div>
        <div>
          {isOpen ? (
            <MinusIcon className='w-7 h-7 ' />
          ) : (
            <PlusIcon className='w-7 h-7' />
          )}
        </div>
      </div>
      <Transition
        show={isOpen}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <p className={isOpen ? "py-4 px-6 italic" : "hidden"}>{children}</p>
      </Transition>
    </div>
  );
}

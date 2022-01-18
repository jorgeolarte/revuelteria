import { useContext, Fragment } from "react";
import { UIContext } from "@/lib/UI";
import { Dialog, Transition } from "@headlessui/react";
import SignIn from "@/components/signin/sign-in";
import { ModalContainer } from "@/components/modals/components";
import { close } from "@/reducers/modal";

export default function SignInModal() {
  const { state, dispatch } = useContext(UIContext);
  const { modalDispatch } = dispatch;

  return (
    <Transition show={state.isOpen} as={Fragment}>
      <Dialog
        onClose={() => modalDispatch(close())}
        className='fixed z-20 inset-0 overflow-y-auto'
      >
        <div className='flex items-center justify-center min-h-screen'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 backdrop-filter backdrop-blur-sm bg-gray-300 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-1/4 md:w-1/2'>
              <div className='bg-primary text-white px-5 pt-6 pb-5'>
                <ModalContainer
                  title='Iniciar sesión'
                  description='Bienvenido a La Revuelteria'
                >
                  <SignIn />
                </ModalContainer>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

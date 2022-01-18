import { useContext, useState, useEffect } from "react";
import { UIContext } from "@/lib/UI";
import { Transition } from "@headlessui/react";
import { XIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { hide } from "@/reducers/notification";

export default function Notification() {
  const { state, dispatch } = useContext(UIContext);

  const { hasNotification, message, type } = state;
  const { notificationDispatch } = dispatch;

  const [typeConfig, setTypeConfig] = useState({
    bgColor: "bg-danger",
    textColor: "text-white",
    icon: "ExclamationCircleIcon",
  });

  useEffect(() => {
    hasNotification && handleConfig();
  }, [hasNotification]);

  useEffect(() => {
    let timer = setTimeout(() => {
      hasNotification && hideNotification();
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasNotification]);

  const hideNotification = () => {
    notificationDispatch(hide());
  };

  const handleConfig = () => {
    switch (type) {
      case "error":
        setTypeConfig({
          bgColor: "bg-danger",
          textColor: "text-white",
          icon: "ExclamationCircleIcon",
        });
        break;
      case "warning":
        setTypeConfig({
          bgColor: "bg-warning",
          textColor: "text-white",
          icon: "ExclamationCircleIcon",
        });
        break;
      case "success":
        setTypeConfig({
          bgColor: "bg-success",
          textColor: "text-white",
          icon: "ExclamationCircleIcon",
        });
        break;
      default:
        setTypeConfig({
          bgColor: "bg-secondary",
          textColor: "text-white",
          icon: "ExclamationCircleIcon",
        });
        break;
    }
  };

  return (
    <Transition
      show={hasNotification}
      enter='transition-opacity ease-in-out duration-150'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity ease-in-out duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='absolute  bottom-0 z-40'>
        <div className='fixed bottom-0 w-full min-w-screen'>
          <div
            className={`${typeConfig.bgColor} flex w-1/2 md:w-11/12 mx-auto justify-between items-center p-2 ${typeConfig.textColor} text-xs space-x-1`}
          >
            <ExclamationCircleIcon className='w-5 h-5' />
            <div className='flex-grow'>{message}</div>
            <a
              className='cursor-pointer transition duration-150 transform hover:scale-110 hover:text-opacity-80'
              onClick={hideNotification}
            >
              <XIcon className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  );
}

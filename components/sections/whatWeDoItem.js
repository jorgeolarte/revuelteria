import { CheckIcon } from "@heroicons/react/solid";

export default function whatWeDoItem({ id, children }) {
  return (
    <div
      id={`whatWeDoItem_${id}`}
      className='flex flex-row items-start space-x-1'
    >
      <CheckIcon className='flex-none w-7 h-7 text-primary' />
      <p className='flex-grow'>{children}</p>
    </div>
  );
}

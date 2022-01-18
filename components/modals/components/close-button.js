import { useContext } from "react";
import { UIContext } from "@/lib/UI";
import Icons from "@/components/icons";
import { close } from "@/reducers/modal";

export default function CloseButton() {
  const { dispatch } = useContext(UIContext);
  const { modalDispatch } = dispatch;

  return (
    <button
      onClick={() => modalDispatch(close())}
      className='absolute top-2 right-2'
    >
      <Icons
        name='XIcon'
        className='w-6 h-6 transition-colors duration-150 hover:text-gray-300'
      />
    </button>
  );
}

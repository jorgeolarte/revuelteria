import { useContext, Fragment } from "react";
import { UIContext } from "@/lib/UI";

export default function Prueba() {
  const { state, dispatch, open } = useContext(UIContext);
  const { isOpen } = state;
  const { modalDispatch } = dispatch;

  console.log("state: ", state);
  //   console.log("isOpen: ", isOpen);
  console.log("open: ", open);
  console.log("dispatch: ", dispatch);

  open();

  return <div>Hola mundo</div>;
}

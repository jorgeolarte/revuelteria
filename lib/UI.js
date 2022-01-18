import { useReducer, createContext } from "react";
// import { notification, modal } from "@/reducers";
import notificationReducer from "@/reducers/notification";
import modalReducer from "@/reducers/modal";
import { push, hide } from "@/reducers/notification";
import { toggle, open, close } from "@/reducers/modal";
import { initialState as initialNotification } from "@/reducers/notification";
import { initialState as initialModal } from "@/reducers/modal";

export const UIContext = createContext();
// export default NotificationContext;

const UIState = (props) => {
  const [notificationState, notificationDispatch] = useReducer(
    notificationReducer,
    initialNotification
  );

  const [modalState, modalDispatch] = useReducer(modalReducer, initialModal);

  return (
    <UIContext.Provider
      value={{
        state: { ...notificationState, ...modalState },
        dispatch: { notificationDispatch, modalDispatch },
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIState;

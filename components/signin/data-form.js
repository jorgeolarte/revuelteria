import { useEffect, useContext } from "react";
import { AuthContext } from "@/lib/auth";
import { UIContext } from "@/lib/UI";
import { NewUser } from "@/components/signin";
import { push } from "@/reducers/notification";
import { close } from "@/reducers/modal";

export default function DataForm() {
  const { user } = useContext(AuthContext);

  const { dispatch } = useContext(UIContext);
  const { modalDispatch, notificationDispatch } = dispatch;

  useEffect(() => {
    return ifUserExist();
  }, []);

  const ifUserExist = () => {
    if (user.exist) {
      modalDispatch(close());
      notificationDispatch(
        push({
          hasNotification: true,
          message: "Siempre eres bienvenido",
          type: "success",
        })
      );
    }
  };

  return !user.exist && <NewUser />;
}

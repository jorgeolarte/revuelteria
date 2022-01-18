// import NotificationState from "@/lib/notification";
// import ModalState from "@/lib/modal";
import { AuthProvider } from "@/lib/auth";
import UIState from "@/lib/UI";
import "../styles/globals.css";
// import { Notification } from "@/components/notifications";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      {/* <NotificationState> */}
      {/* <ModalState> */}
      <UIState>
        <Component {...pageProps} />
      </UIState>
      {/* <Notification /> */}
      {/* </ModalState> */}
      {/* </NotificationState> */}
    </AuthProvider>
  );
}

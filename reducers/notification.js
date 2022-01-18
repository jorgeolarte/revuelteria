import { makeType, mac } from "@/reducers/utils";

export const initialState = {
  hasNotification: false,
  message: "",
  type: "error",
};

const t = makeType("NOTIFICATIONS");

// Actions
const PUSH = t("PUSH");
const HIDE = t("HIDE");

// actionsCreators
export const push = mac(PUSH, "payload");
export const hide = mac(HIDE);

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH:
      return {
        ...state,
        hasNotification: true,
        message: action.payload.message,
        type: action.payload.type,
      };

    case HIDE:
      return {
        ...state,
        hasNotification: false,
        message: "",
        type: "error",
      };

    default:
      return {
        ...state,
      };
  }
}

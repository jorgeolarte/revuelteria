import { makeType, mac } from "@/reducers/utils";

export const initialState = {
  isOpen: false,
};

const t = makeType("MODAL");

// Actions
const TOGGLE = t("TOGGLE");
const OPEN = t("OPEN");
const CLOSE = t("CLOSE");

// actionsCreators
export const toggle = mac(TOGGLE, "payload");
export const open = mac(OPEN);
export const close = mac(CLOSE);

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        isOpen: !action.payload,
      };
    case OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return {
        ...state,
      };
  }
}

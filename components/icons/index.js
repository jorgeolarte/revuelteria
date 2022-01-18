import {
  ClipboardCheckIcon,
  BadgeCheckIcon,
  ShoppingCartIcon,
  XIcon,
  ChevronLeftIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

export default function Icons({ name, className }) {
  switch (name) {
    case "ClipboardCheckIcon":
      return <ClipboardCheckIcon className={className} />;

    case "BadgeCheckIcon":
      return <BadgeCheckIcon className={className} />;

    case "ShoppingCartIcon":
      return <ShoppingCartIcon className={className} />;

    case "ChevronLeftIcon":
      return <ChevronLeftIcon className={className} />;

    case "XIcon":
      return <XIcon className={className} />;

    case "ShoppingBagIcon":
      return <ShoppingBagIcon className={className} />;

    default:
      return <></>;
  }
}

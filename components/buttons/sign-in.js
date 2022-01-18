import Link from "next/link";
import { useContext } from "react";
import { UIContext } from "@/lib/UI";
import Icons from "@/components/icons";
import { open } from "@/reducers/modal";

export default function SignIn({
  href = "#",
  className,
  iconName,
  iconSize,
  srOnly = false,
  children,
}) {
  const { dispatch } = useContext(UIContext);
  const { modalDispatch } = dispatch;

  return (
    <Link href={href}>
      <a className={`${className}`} onClick={() => modalDispatch(open())}>
        <Icons name={iconName} className={iconSize} />
        <span className={`${srOnly ? "sr-only" : ""}`}>{children}</span>
      </a>
    </Link>
  );
}

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/lib/auth";
import Link from "next/link";
import SignIn from "./sign-in";
import Icons from "@/components/icons";
import { ButtonSkeleton } from "@/components/skeleton";

export default function Button({
  href,
  className,
  iconName,
  iconSize,
  srOnly = false,
  children,
}) {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [user.loggedIn]);

  return loading ? (
    <ButtonSkeleton />
  ) : user.loggedIn && user.exist ? (
    <Link href={href}>
      <a className={className}>
        <Icons name={iconName} className={iconSize} />
        <span className={`${srOnly ? "sr-only" : ""}`}>{children}</span>
      </a>
    </Link>
  ) : (
    <SignIn
      href='#'
      className={className}
      iconName={iconName}
      iconSize={iconSize}
      srOnly={srOnly}
    >
      {children}
    </SignIn>
  );
}

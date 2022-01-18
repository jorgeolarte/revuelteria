import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/lib/auth";
import { Navbar } from "@/components/navbars";
import { Layout } from "@/components/layouts/";
import { TypeForm } from "@/components/sections/";
import { TypeFormSkeleton } from "@/components/skeleton/";

export default function Shopping() {
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      checkIfUserIsLoggedIn();
    }, 2000);

    return () => clearTimeout(timer);
  }, [user.loggedIn]);

  const checkIfUserIsLoggedIn = () => {
    user.loggedIn && setLoading(false);
    !user.loggedIn && router.replace("/") && setLoading(true);
  };

  return (
    <Layout>
      <Navbar />
      {loading ? <TypeFormSkeleton /> : <TypeForm />}
    </Layout>
  );
}

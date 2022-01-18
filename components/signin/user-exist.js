import { useEffect } from "react";
import { useRouter } from "next/router";

export default function UserExist() {
  const router = useRouter();

  useEffect(() => {
    // return router.replace("/shopping");
  }, []);

  return <div>Cargando...</div>;
}

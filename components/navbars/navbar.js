import { useContext } from "react";
import { AuthContext } from "@/lib/auth";
import { NavbarLogo } from "@/components/logos";
import { IsLogin, IsNotLogin } from "./login";

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className='bg-white shadow-md fixed left-0 right-0 z-10'>
      <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2.5'>
        <div className='relative flex justify-between items-center'>
          <div className='flex-shrink-0 flex items-center '>
            <NavbarLogo />
          </div>

          <div className='absolute inset-y-0 right-0 flex items-center justify-center space-x-5'>
            {user.loggedIn ? <IsLogin /> : <IsNotLogin />}
          </div>
        </div>
      </div>
    </nav>
  );
}

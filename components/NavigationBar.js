import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./Login";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavigationBar = (props) => {
  const { user, error, isLoading } = useUser();

  return (
    <nav className="flex justify-between bg-teal-500 p-4">
      <div className="flex items-center text-white mr-6">
        <Link className="font-semibold text-xl tracking-tight ml-2" href="/">
          InstaCats
        </Link>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          className="text-slate-600 text-6xl pr-2 "
          icon={faCat}
        />
      </div>

      <div className="flex lg:flex items-center lg:w-auto">
        {user && (
          <div className="text-sm lg:flex-grow">
            <Link href="/upload">Upload Photo</Link>
          </div>
        )}
        <Login></Login>
      </div>
    </nav>
  );
};

export default NavigationBar;

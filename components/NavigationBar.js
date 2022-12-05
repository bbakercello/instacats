import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();
  const isCurrentPath = (path) => router.pathname === path;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src="/cat-logo.png" alt="InstaCats logo" className="h-8 w-8" />
        <Link href="/">
          <a className="font-semibold text-xl tracking-tight ml-2">InstaCats</a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/upload">
            <a
              className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
                isCurrentPath("/upload") ? "text-white font-bold" : ""
              }`}
            >
              Upload Photo
            </a>
          </Link>
          <Link href="/login">
            <a
              className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
                isCurrentPath("/login") ? "text-white font-bold" : ""
              }`}
            >
              Login
            </a>
          </Link>
          <Link href="/register">
            <a
              className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ${
                isCurrentPath("/register") ? "text-white font-bold" : ""
              }`}
            >
              Register
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

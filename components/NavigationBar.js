import React from "react";
import Link from "next/link";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./Login";
import { useUser } from "@auth0/nextjs-auth0/client";
import { motion } from "framer-motion";

const NavigationBar = (props) => {
  const { user, error, isLoading } = useUser();

  return (
    <nav className="flex justify-between bg-teal-500 p-4 sticky top-0">
      <div className="flex items-center text-white mr-6">
        <Link className="font-semibold text-xl tracking-tight ml-2" href="/">
          InstaCats
        </Link>
      </div>
      <div className="flex items-center">
        <Link className="font-semibold text-xl tracking-tight ml-2" href="/">
          <motion.div
            animate={{ rotate: [-5, 5, -5, 5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut", repeatDelay: 1 }}
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <FontAwesomeIcon
              className="text-slate-600 text-6xl pr-2 "
              icon={faCat}
            />
          </motion.div>
        </Link>
      </div>

      <div className="flex lg:flex items-center lg:w-auto">
        {user && (
          <div className="text-sm lg:flex-grow">
            <Link href="/Upload">Upload Photo</Link>
          </div>
        )}
        <Login></Login>
      </div>
    </nav>
  );
};

export default NavigationBar;

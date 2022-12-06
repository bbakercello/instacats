import React, { use } from 'react'
import NavigationBar from '../components/NavigationBar'
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from 'next/image';
const Profile = () => {
    const { user, isLoading } = useUser();
    console.log(user)
  return (
    <div className="">
      <NavigationBar />
      <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 pb-8 h-screen">
        <Image
          src={user.picture}
          alt="Profile"
          className="nav-user-profile rounded-full shadow-lg"
          width="50"
          height="50"
          decode="async"
          data-testid="navbar-picture-desktop"
        ></Image>
      </div>
    </div>
  );
}

export default Profile
import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatBubbleBottomCenterIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  MicrophoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm items-center">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://chamilo.org/wp-content/uploads/2018/09/foro_global.png"
            layout="fill"
          />
        </Link>
      </div>
      <div className="flex items-center mx-2 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center bg-gray-100 px-3 py-1 space-x-2 border border-gray-200 rounded-sm">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="outline-none flex-1 bg-transparent"
          type="text"
          placeholder="Search the forum..."
        />
        <button type="submit" hidden />
      </form>
      <div
        className="flex text-gray-500 items-center space-x-2 mx-5
      hidden lg:inline-flex"
      >
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border-gray-100" />
        <ChatBubbleBottomCenterIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MicrophoneIcon className="icon" />
      </div>

      <div className="mx-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              layout="fill"
              alt=""
            />
          </div>
          <p className="text-gray-600">Sign Out</p>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              layout="fill"
              alt=""
            />
          </div>
          <p className="text-gray-600">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;

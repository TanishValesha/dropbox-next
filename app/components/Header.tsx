import React from "react";
import Image from "next/image";
import { UserButton, SignInButton, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center bg-[#020817] h-12 px-4 sticky z-10">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Dropbox Logo" width={60} height={60} />
          <h1 className="font-bold text-white text-2xl">Dropbox</h1>
        </div>
        <div className="flex items-center gap-2 text-white font-bold">
          <UserButton />

          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;

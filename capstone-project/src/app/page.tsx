'use client';


import React from "react";
import { RiveDemo } from "./components/RiveAnimations/RiveDemo/RiveDemo"; // Adjust path if RiveDemo is not in the same directory
import { RedirectToSignIn, RedirectToUserProfile, SignedIn, SignedOut } from "@clerk/nextjs";
import SignIn from "./pages/Sign-in/page";
import HomePage from "./components/HomePage";

import Link from "next/link";
import { RedirectType } from "next/navigation";

const Page: React.FC = () => {
  return (
    <div>
      <SignedIn>
        <HomePage />
      </SignedIn>
    </div>
  );
};

export default Page;
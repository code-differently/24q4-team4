'use client';


import React from "react";
import { RiveDemo } from "./components/RiveAnimations/RiveDemo/RiveDemo"; // Adjust path if RiveDemo is not in the same directory
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import HomePage from "./components/HomePage";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div>
      <SignedIn>
        <HomePage />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl={"https://localhost:3000/pages/sign-in"}/> {/**  NAVIGATE TO SIGN-IN PAGE IF USER IS SIGNED OUT. RESEARCH HOW TO DO IT USING LINK */}
      </SignedOut>
    </div>
  );
};

export default Page;
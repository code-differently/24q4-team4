"use client";

import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import HomePage from "./components/HomePage";

const Page: React.FC = () => {
  return (
    <div>
      <SignedIn>
        <HomePage />
      </SignedIn>
      <SignedOut>
        <h1>LOL DIE</h1>
      </SignedOut>
    </div>
  );
};

export default Page;

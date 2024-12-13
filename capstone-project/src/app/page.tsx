"use client";

import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import HomePage from "./pages/HomePage";

const Page: React.FC = () => {
  return (
    <div>
      <SignedOut>
        <SignedIn>
          <HomePage />
        </SignedIn>
      </SignedOut>
    </div>
  );
};

export default Page;

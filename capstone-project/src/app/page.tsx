"use client";

import React from "react";
import { SignedIn } from "@clerk/nextjs";
import HomePage from "./components/HomePage";

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

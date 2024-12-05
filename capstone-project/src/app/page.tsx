'use client';

import React from "react";
import { RiveDemo } from "./components/RiveDemo/RiveDemo"; // Adjust path if RiveDemo is not in the same directory

const Page: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Rive Animation Page</h1>
      <RiveDemo />
    </div>
  );
};

export default Page;
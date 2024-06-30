import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="p-4 z-20 sticky top-0 shadow-sm border-b-2 flex justify-between items-center bg-white">
      <div className=" gap-2 items-center flex p-2 border rounded-md max-w-lg ">
        {/* <Search />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full"
        /> */}
      </div>
      <div className="rounded-full text-xs text-white mx-2 flex justify-center items-center h-max">
        <UserButton />
      </div>
    </div>
  );
}

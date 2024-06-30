import { Search } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="p-3 shadow-sm border-b-2 flex justify-between items-center bg-white">
      <div className=" gap-2 items-center flex p-2 border rounded-md max-w-lg ">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full"
        />
      </div>
      <div className=" bg-primary p-1 rounded-full text-xs text-white px-2 h-fit">
        <h2>🔥Join Membersip just for 4.99$</h2>
      </div>
    </div>
  );
}

'use client'
import { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TempletListSection from "./_components/TempletListSection";
import { on } from "events";

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState("");

  function onSearchInput(e:string){
    setSearchInput(e);
  }

  return (
    <div>
      <SearchSection onSearchInput={onSearchInput} />
      <TempletListSection searchInput={searchInput} />
    </div>
  );
}

"use client";
import { FileClock, HomeIcon, Settings, Wallet2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: HomeIcon,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    // {
    //   name: "Billing",
    //   icon: Wallet2Icon,
    //   path: "/dashboard/billing",
    // },
    {
      name: "Setthing",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();
  return (
    <div className="h-screen border bg-white p-5 shadow-sm">
      <Link href="/dashboard">
        <div className="flex h-6 justify-center">
          <Image src={"/icons/logo.png"} alt="logo" width={120} height={120} />
        </div>
      </Link>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              className={`mb-2 flex items-center gap-2 rounded-lg p-3 hover:cursor-pointer hover:bg-primary hover:text-white ${path == menu.path && "bg-primary text-white"}`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { TEMPLATE } from "./TempletListSection";
import Link from "next/link";

export default function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className="mb-2 flex h-60 max-w-72 flex-col gap-2 rounded-lg bg-white p-6 shadow-lg transition-all hover:scale-105 hover:cursor-pointer">
        <Image src={item.icon} alt={"icon"} width={80} height={80} />
        <h2 className="font-semibold">{item.name}</h2>
        <p className="line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
}

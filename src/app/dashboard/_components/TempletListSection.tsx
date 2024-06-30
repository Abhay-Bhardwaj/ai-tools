"use client";
import { Templates } from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export default function TempletListSection({searchInput}: {searchInput: string;}) {
  const [filteredTemplates, setFilteredTemplates] = useState(Templates);
  useEffect(() => {
    if (searchInput) {
      setFilteredTemplates(
        Templates.filter((item:TEMPLATE) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()),
        ),
      );
    } else {
      setFilteredTemplates(Templates);
    }
  }, [searchInput]);
  return (
    <div className="grid grid-cols-2 justify-items-center gap-4 p-5 lg:grid-cols-3 xl:grid-cols-4">
      {filteredTemplates.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  );
}

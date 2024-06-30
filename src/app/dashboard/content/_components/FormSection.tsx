'use client'
import { TEMPLATE } from "../../_components/TempletListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  useFormInput:any;
  loading:boolean;
}

export default function FormSection({ selectedTemplate, useFormInput, loading }: PROPS) {

    const [formData, setFormData] = useState({});
    const handleInputChange=(e:any)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const onSubmit=(e:any)=>{
        e.preventDefault();
        useFormInput(formData);
    } 
  return (
    <div className="rounded-md border bg-white p-5 shadow-md">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt={selectedTemplate?.slug} width={80} height={80} />
      <h2 className="mb-2 text-2xl font-bold text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-sm text-gray-500">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((field, index) => (
          <div key={index} className="mb-8 flex flex-col gap-2">
            <label>{field.label}</label>
            {field.field == "input" ? (
              <Input name={field.name} required={field?.required} onChange={handleInputChange} />
            ) : field.field == "textarea" ? (
              <Textarea name={field.name} required={field?.required} onChange={handleInputChange}/>
            ) : null}
          </div>
        ))}
        <Button 
          className="py-6 w-full"
          disabled={loading}
          >{loading ? <Loader2Icon className="animate-spin"/> : 'Generate Content'}</Button>
      </form>

    </div>
  );
}

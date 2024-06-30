'use client'
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Templates } from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TempletListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { useState } from "react";
import SaveData from "@/utils/saveDataToDB";

interface PROPS {
  params: {
    "template-slug": string;
  };
}


export default function CreateNewContent(props: PROPS) {
  const selectedTemplate:TEMPLATE|undefined = Templates?.find(
    (template) => template.slug == props.params["template-slug"],
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const generateAIContent= async(formData:any)=>{
    setLoading(true);
    const selectedPrompt=selectedTemplate?.aiPrompt;
    const finalPrompt=JSON.stringify(formData)+ ", "+ selectedPrompt;
    const respone=await chatSession.sendMessage(finalPrompt);
    setAiOutput(respone?.response.text());
    await SaveData(formData, selectedTemplate?.slug, respone?.response.text());
    setLoading(false);
  }
  return (
    <div className="p-5">
      <Link href="/dashboard"><Button className="py-4 mb-2"><ArrowLeft className="w-4 h-4"/>Back</Button> </Link>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <FormSection selectedTemplate={selectedTemplate} useFormInput={(v:any)=>generateAIContent(v)} loading={loading} />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>

  );
}

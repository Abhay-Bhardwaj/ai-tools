
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { useEffect, useRef } from 'react';



interface PROPS {
  aiOutput:string;
}



export default function OutputSection({aiOutput}:PROPS) {
  const editorRef:any = useRef<Editor>(null);
  const { toast } = useToast()


  useEffect(() => {
    const editorInstance=editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput]);


  const copyElement=(text:string)=>{
    try {
      navigator.clipboard.writeText(text)
        .then(() => {
          toast({ variant:'success', description: "Text copied successfully!" });
        })
        .catch(err => {
          console.error("Failed to copy text: ", err);
          toast({
            variant: "default",
             description: "Failed to copy text." });
        });
    } catch (error) {
      console.error("Clipboard API not available.", error);
      toast({ description: "Clipboard API not available." });
    }

  }
  
  return (
    <div className='bg-white rounded-md shadow-lg'>
      <div className='flex flex-row justify-between items-center p-3'>
        <h2 className='font-bold text-lg'>Your Result</h2>
        <Button onClick={() => {copyElement(aiOutput!)}}><Copy className='h-4 w-4'/>Copy</Button>
      </div>
      
       <Editor
          ref={editorRef}
          initialValue="Click on Generate Content to see the result"
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          usageStatistics={false}
        />

    </div>
  )
}

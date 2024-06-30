'use client'
import { Templates } from '@/app/(data)/Templates';
import fetchUserHistory from '@/utils/fetchUserHistory';
import { useToast } from '@/components/ui/use-toast';
import React, { useEffect, useState } from 'react'
import { currentUser } from '@clerk/nextjs/server';

export default function History() {
    const [userHistory, setUserHistory] = useState([]);
    const { toast } = useToast();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response:any = await fetchUserHistory();
                if(response.length!==0){
                const FullData:any = response.map((item:any) => {
                    const temp:any = Templates.filter((template) =>
                        template.slug === item.templateSlug
                    );
                    return {
                        ...item, name: temp[0].name, icon: temp[0].icon
                    };
                });
                console.log('Data', FullData);
                setUserHistory(FullData);
                }
                else{
                    toast({variant:"destructive", description: "No history found Refresh the page" });
                }
            } catch (error) {
                toast({ description: "Failed to fetch user history. Refresh the Page" });
                return null;
            }
        };
        fetchData();
       
    }, []);

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
    <div className='w-full h-full p-2'>
        <div className='m-2 p-2 rounded-md w- bg-white overflow-x-scroll'>
            <table className='w-full table text-xs sm:text-base'>
                <thead className='bg-gray-50 items-center'>
                    <tr className=''>
                        <td className='p-2 w-1/6'>Template</td>
                        <td className='p-2 w-1/6'>Form Data</td>
                        <td className='p-2 w-2/6'>Ai Response</td>
                        <td className='p-2 w-1/6'>Date</td>
                        <td className='p-2 w-1/6'>Copy</td>
                        
                    </tr>
                </thead>
                <tbody>
                        {userHistory.map((item:any,index)=>(
                            <tr key={index} className='h-10 border border-gray-200'>
                                <td className='p-2 w-1/6'>
                                    <div className='flex items-center gap-2 flex-col lg:flex-row'>
                                        <img src={item.icon} alt={item.name} className='h-6 w-6 hidden sm:block'/>
                                        <p>{item.name}</p>
                                    </div>
                                </td>
                                <td className='p-2 w-3/6'><p className='h-20 overflow-y-scroll'></p></td>
                                <td className='p-2 w-3/6'><p className='h-20 overflow-y-scroll'>{item.aiResponse}</p></td>
                                <td className='p-2 w-1/6'>{`${item.createdAt.getDate()}/${item.createdAt.getMonth()}/${item.createdAt.getFullYear()}`}</td>
                                <td className='p-2 w-1/6 hover:cursor-pointer' onClick={() => {copyElement(item.aiResponse!)}}>Copy</td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

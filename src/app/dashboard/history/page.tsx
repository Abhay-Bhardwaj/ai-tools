'use client'
import { Templates } from '@/app/(data)/Templates';
import fetchUserHistory from '@/utils/fetchUserHistory';
import { useToast } from '@/components/ui/use-toast';
import React, { useEffect, useState } from 'react';
import { Loader2Icon } from 'lucide-react';

export default function History() {
    const [userHistory, setUserHistory] = useState([]);
    const { toast } = useToast();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response:any = await fetchUserHistory();
                if(response.length !== 0) {
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
                    setLoading(false);
                } else {
                    toast({ variant: "destructive", description: "No history found. Refresh the page." });
                    setLoading(false);
                }
            } catch (error) {
                toast({ description: "Failed to fetch user history. Refresh the Page." });
                setLoading(false);
                return null;
            }
        };
        fetchData();
    }, []);

    const copyElement = (text:string) => {
        try {
            navigator.clipboard.writeText(text)
                .then(() => {
                    toast({ variant: 'success', description: "Text copied successfully!" });
                })
                .catch(err => {
                    console.error("Failed to copy text: ", err);
                    toast({ variant: "default", description: "Failed to copy text." });
                });
        } catch (error) {
            console.error("Clipboard API not available.", error);
            toast({ description: "Clipboard API not available." });
        }
    };

    return (
        <div className='w-full h-full p-4'>
            <div className='m-2 p-2 rounded-md w-full bg-white'>
                <div className='my-2 p-2'>
                    <h2 className='text-4xl font-bold'>History</h2>
                    <p>Here is the list of all the templates you have generated so far.</p>
                </div>
                <div className='content-center overflow-x-auto'>
                    <table className='min-w-full table-fixed text-xs sm:text-base'>
                        <thead className='bg-gray-50 items-center'>
                            <tr className='w-full'>
                                <td className='p-2 w-1/6'>Template</td>
                                <td className='p-2 w-1/6'>Form Data</td>
                                <td className='p-2 w-2/6'>AI Response</td>
                                <td className='p-2 w-1/6'>Date</td>
                                <td className='p-2 w-1/6'>Copy</td>
                            </tr>
                        </thead>
                        {loading ? (
                            <tbody>
                                <tr className='h-30'>
                                    <td colSpan={5}>
                                        <div className='h-[120px] flex flex-col justify-center items-center '>
                                            <Loader2Icon className=' w-20 animate-spin h-auto mx-auto' />
                                        </div>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                {userHistory.map((item:any, index) => (
                                    <tr key={index} className='h-10 border border-gray-200'>
                                        <td className='p-2 w-1/6'>
                                            <div className='flex items-center gap-2 flex-col lg:flex-row'>
                                                <img src={item.icon} alt={item.name} className='h-6 w-6' />
                                                <p>{item.name}</p>
                                            </div>
                                        </td>
                                        <td className='p-2 w-1/6'>
                                            <p className='h-20 overflow-y-scroll scroll-smooth'>{JSON.stringify(item.formData)}</p>
                                        </td>
                                        <td className='p-2 w-2/6'>
                                            <p className='h-20 overflow-y-scroll scroll-smooth'>{item.aiResponse}</p>
                                        </td>
                                        <td className='p-2 w-1/6'>
                                            {`${item.createdAt.getDate()}/${item.createdAt.getMonth() + 1}/${item.createdAt.getFullYear()}`}
                                        </td>
                                        <td className='p-2 w-1/6 '>
                                            <p className='text-blue-400 hover:cursor-pointer' onClick={() => { copyElement(item.aiResponse) }}>Copy</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
}

import { Skeleton } from "@/components/ui/skeleton"
import { Loader2Icon } from "lucide-react";
export default function Loading() {
    return (
    <div className="flex flex-col justify-center items-center h-screen">
        <Loader2Icon color="blue" className="animate-spin h-20 w-20 "/>
    </div>
    );
}
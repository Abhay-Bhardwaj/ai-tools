import { Search } from "lucide-react"
import React from "react"

export default function SearchSection({onSearchInput}:any){

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-purple-800 to-blue-600 p-10 text-white">
            <h2 className="text-3x font-bold">Browse All Templates</h2>
            <p>What would you like to create today?</p>
            <div className="flex w-full justify-center">
                <div className="my-4 flex w-full max-w-md items-center gap-2 rounded-md border bg-white p-2">
                    <Search className="text-primary" />
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => {onSearchInput(e.target.value)}}
                        className="w-full bg-transparent text-black outline-none"
                    />
                </div>
            </div>
        </div>
    )
}

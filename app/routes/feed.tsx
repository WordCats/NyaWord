import {useState} from "react";
import Card from "~/components/Card/card";

export default function feed(){
    return (
        <div className="bg-zinc-200">
            <div className="flex flex-col space-y-4 items-center justify-center">
            <Card />
            <Card />
            <Card />
            </div>
            
        </div>
    )
}
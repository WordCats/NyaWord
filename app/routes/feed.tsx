import { useState } from "react";
import Card from "~/components/Card/card";
import Nav from "~/components/Nav/nav";
import Carousel from "~/components/Carousel/carousel";

export default function feed() {
    return (
        <div className="w-full h-full bg-gray-700">
            <div>
                <Nav />
            </div>
            <div className="m-0 sm:m-20">
                <div>
                    <Carousel />
                </div>
                <div className="w-full h-9 border-b-2 text-white text-3xl">
                    <h1 className="pl-2">Relevantes</h1>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-y-2 gap-x-4">
                    <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
                </div>
            </div>
            <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
        </div>
    )
}

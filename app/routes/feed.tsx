import { useState } from "react"
import Card from "~/components/Card/card"
import Nav from "~/components/Nav/nav"
import Cover from "~/components/Cover/cover"

export default function feed() {
    return (
        <div className="w-full h-full bg-white">
            <div>
                <Nav />
            </div>
            <div className="m-0 sm:m-20">
                <div>
                    <div className="w-full h-9 border-b-2 text-black text-3xl mb-5">
                        <h1 className="pl-2 flex">
                            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Recentes
                        </h1>
                    </div>
                    <div className="mt-8 mx-3 w-full h-auto md:h-screen">
                        <div className=" items-center justify-items-center scale-90 grid gap-y-8 gap-x-4 grid-cols-2 md:grid md:gap-y-5 md:grid-cols-5">
                            <Cover /> <Cover /> <Cover /> <Cover />
                            <Cover /><Cover /> <Cover /> <Cover /> <Cover />
                            <Cover />
                            
                        </div>
                    </div>

                </div>
                <div>
                    <div className="mt-3 w-full h-9 border-b-2 text-black text-3xl">
                        <h1 className="pl-2 flex">
                            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Doadores
                        </h1>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-y-1 gap-x-4">
                        <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default function Commentbox() {
    return (
        <div>
            <div className="w-full sm:w-4/6">
                <div>
                    <form>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-xl" placeholder="Essa historia é incrivel!"></textarea>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2">Comentar</button>
                    </form>
                </div>
                <div>
                    <div className="shadow-xl p-4">
                        <article>
                            <div className="flex items-center mb-4 space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://i.imgur.com/gi6OrCe.jpg" alt="" />
                                <div className="space-y-1 font-medium">
                                    <p>Morte</p>
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-light text-gray-500">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.
                                    It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                            </div>
                            <aside>
                                <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200">
                                    <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline">Report abuse</a>
                                </div>
                            </aside>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}
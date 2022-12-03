export default function Cover() {
    return (
        <div className="bg-white rounded-lg shadow-lg w-56">
            <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" className="rounded-t-lg" />
            <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-purple-800">A lenda do Heroi
                </h2>
                <p className="text-purple-700 mb-2">Pelo amor de Deus, tenha algo que possa fazer com arroz e fejão, batata parece muito delicioso</p>
                <a href="#" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
            </div>
        </div>
    )
}
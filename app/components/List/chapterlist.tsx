export default function Chapterlist() {
    return (
        <div className="shadow-md">
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Capítulo
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Número
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Data
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                <a href="#">A morte da lenda</a>
                            </th>
                            <td className="py-4 px-6">
                                07
                            </td>
                            <td className="py-4 px-6">
                                09/12/2022                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
import { Link } from "react-router-dom";

export default function GoBack(){
    return(
        <>
            <div className="flex justify-start w-full px-12">
                <Link to="/" className="bg-orange-500 p-3 rounded-full
                font-bold text-white shadow cursor-pointer">← Return</Link>
            </div>
        </>
    )
}
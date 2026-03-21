import { Link } from "react-router-dom";

export default function GoBack(props){
return(
<>
<div className={`${props.className} flex justify-start w-full`}>
<Link to="/" className="bg-orange-500 p-3 rounded-full
font-bold text-white shadow cursor-pointer">← Return</Link>
</div>
</>
)
}
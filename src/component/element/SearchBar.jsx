import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {GlobalComponent} from "context/componentContext";

export default function SearchBar () {
    const { BsSearch } = GlobalComponent()
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');

    // 검색기능
    const searchVideo = (e) => {
        e.preventDefault()
        navigate(`/videos/${text}`)
        setText('')
    }
    
    //화면 이동시 input값 세팅
    useEffect(() => setText(keyword || ''), [keyword])

    return (
        <form onSubmit={searchVideo} className="w-full flex justify-center">
            <input className="w-7/12 p-2 outline-none bg-black text-gray-50" type="text" placeholder="Search..." value={text} onChange={(e)=>setText(e.target.value)} />
            <button className="bg-zinc-600 px-4 transition hover:bg-primary" type="submit">
                <BsSearch className="text-2xl"/>
            </button>
        </form>
    )
}
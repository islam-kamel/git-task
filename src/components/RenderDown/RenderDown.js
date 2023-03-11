import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";

export default function RenderDown() {
    let [input, setInput] = useState("");

    useEffect(() => {

    }, [input])

    function handleInput(event) {
        setInput(event.target.value)
    }

    return (
        <div className="container mt-5">
            <div className="fw-bold fs-1 text-center p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
               Render Down 🎊
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label mt-3 fw-bold">Live Editor</label>
                <textarea onChange={(event) => handleInput(event)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <ReactMarkdown children={input}></ReactMarkdown>
        </div>
    )
}
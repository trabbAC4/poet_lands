import { useState, useEffect } from "react";
import { useParams } from "react-router";


export default function PoemPage() {
    const [poemInfo, setPoemInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:4000/poem/${id}`)
            .then(response => {
                response.json().then(poemInfo => {
                    setPoemInfo(poemInfo);
                });
            });
    }, []);
    if (!poemInfo) return '';
    return (
        <div id = "poem_display"> 
            <h1> {poemInfo.title} </h1>
            <h1> {poemInfo.author.username} </h1>
            <div dangerouslySetInnerHTML = {{__html:poemInfo.content}} />

        </div>

    );
}
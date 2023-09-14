import Poem from "../Poem";
import {useEffect, useState} from "react";


 export default function HomePage() {
     const [poems, setpoems] = useState([]);
     useEffect(() => {
         fetch('http://localhost:4000/poem').then(response => {
             response.json().then(poems => {
                 console.log(poems);
             });
         });
     }, []);

    return (
        <>
        {poems.length > 0 && poems.map(poem => (
            <Poem {...poem} />
        ))}

        </>
    )
}

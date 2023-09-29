import Poem from "../Poem";
import {useEffect, useState} from "react";


 export default function HomePage() {
     const [poems, setPoems] = useState([]);

     useEffect(() => {
         fetch('http://localhost:4000/poem').then(response => {
             response.json().then((poems) => {
                 setPoems(poems);
                 });
            });
        
     },[]);  

    return (
        <>
           <h1 id = "homepage_title">  Here are your poems </h1> 
           {poems.map(poem => (
            <Poem  {...poem} />
        ))}
        </>
    );
}

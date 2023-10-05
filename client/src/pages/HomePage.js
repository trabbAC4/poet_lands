import Poem from "../Poem";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


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
           <h1 id = "homepage_title">  Here are your poems. Click on the Title to get a larger view! </h1> 
           {poems.length == 0 ? (
               <h1> No poems yet. Write one!</h1>
           ): (
            poems.map(poem => (
            <Poem  {...poem} />
        ))
           )}
        </>
    );
}

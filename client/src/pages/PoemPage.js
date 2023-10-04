import { useState, useEffect, useRef} from "react";
import { useParams } from "react-router";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";


export default function PoemPage() {
    const divRef = useRef(null);
    const generatePDF = () => {
        const divToCapture = divRef.current;

        if (!divToCapture) return;

        html2canvas(divToCapture).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const xPos = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
            const yPos = (pdf.internal.pageSize.getHeight() - imgHeight) / 4;

            pdf.addImage(imgData, 'PNG', xPos, yPos, imgWidth, imgHeight);
            pdf.save(`Yourpoem.pdf`);
        });
    }
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
            <div ref= {divRef}>
                <h1> {poemInfo.title} </h1>
                <h2> By {poemInfo.author.username} </h2>
                <div id = "pattern">
                    <div id = "content"> 
                        <div dangerouslySetInnerHTML = {{__html:poemInfo.content}} />
                    </div>
                </div>
            </div>
            <button onClick = {generatePDF}> Download! </button>
        </div>

    );
}
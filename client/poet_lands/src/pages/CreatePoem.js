import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {useState} from "react";


const modules= {
    toolbar: [
        [{'header': [1,2,false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}],
        ['link', 'image'],
        ['clean']
    ]
};
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

export default function CreatePoem() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function createNewPoem(ev) {
        const data = new FormData();
        data.set('title', title)
        data.set('content', content);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/poem', {
            method: 'POST',
            body: data,

        });
        console.log(await response.json());
    }

    return( 
        <div>
            Create a new Poem 
            <form onSubmit = {createNewPoem}>
                <input type= "title" 
                    placeholder= {"Title"} 
                    value= {title} onChange = {ev => setTitle(ev.target.value)}/>
                <ReactQuill 
                    value = {content} 
                    onChange = {newValue => setContent(newValue)}
                    modules = {modules} 
                    formats = {formats} />
                <button style= {{marginTop: '5px'}}> Create Poem </button>
            </form>
        </div>
    );
}
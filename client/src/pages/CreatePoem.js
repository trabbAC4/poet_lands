import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";

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
    const [content, setContent] = useState({ops: []}); 
    const [redirect, setRedirect] = useState(false);

    async function createNewPoem(ev) {
        // const data = new FormData();
        // data.set('title', title)
        // data.set('content', content);
        // console.log(data);
        // console.log(title);
        // console.log(content);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/poem', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',

        });
        if (response.ok) {
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }

    return( 
        <div className="poem_form"> 
            <div id = "Title"> Create a new poem </div>
            <form onSubmit = {createNewPoem}>
                <input type= "title" 
                    placeholder= {'Title'} 
                    value= {title} 
                    onChange={ev => setTitle(ev.target.value)}/>
                <ReactQuill 
                    value = {content} 
                    onChange={newValue => setContent(newValue)}
                    modules = {modules} 
                    formats = {formats}
                />
                <button style= {{marginTop: '5px'}}> Create Poem </button>
            </form>
        </div>
    );
}
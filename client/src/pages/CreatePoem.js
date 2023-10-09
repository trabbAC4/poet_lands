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
        const data = new FormData();
        data.set('title', title)
        data.set('content', content);
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
        return <Navigate to={'/profile'} />
    }

    return( 
        <main id = "home">
        <h1 id = "Create_Title"> Create a new poem </h1>
        <div className="poem_form"> 
            <form onSubmit = {createNewPoem}>
                <input type= "title" 
                    class = "title_input"
                    placeholder= {'Title'} 
                    value= {title} 
                    onChange={ev => setTitle(ev.target.value)}/>
                <ReactQuill 
                    value = {content} 
                    onChange={newValue => setContent(newValue)}
                    modules = {modules} 
                    formats = {formats}
                />
                <div id = "button"> 
                <button class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" required > Create Poem ✍️  </button>
                </div>
            </form>
        </div>
        </main>
    );
}
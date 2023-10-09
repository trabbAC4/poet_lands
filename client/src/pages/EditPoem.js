import {useState} from "react";
import {Navigate} from "react-router-dom";
import ReactQuill from "react-quill";

export default function EditPoem() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState({ops: []}); 
    const [redirect, setRedirect] = useState(false);

    function updatePoem(ev) {
        ev.preventDefault(); 
    }

    if (redirect) {
        return <Navigate to = {'/'} /> 

    }

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

    return(
       <div className="poem_form"> 
            <form onSubmit = {updatePoem}>
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
    )
}
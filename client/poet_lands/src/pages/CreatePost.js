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

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content, setContent] = useState('');

    return( 
        <div>
            Create a new Poem 
            <form> 
                <input type= "title" placeholder= {"Title"} />
                <input type= "summary" placeholder = {"Summary"} />
                <ReactQuill value = {content} modules = {modules} formats = {formats} />
                <button style= {{marginTop: '5px'}}> Create Poem </button>
            </form>
        </div>
    );
}
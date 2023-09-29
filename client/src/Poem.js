import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";


export default function Poem({_id, title, content, createdAt, author}) {
    return(
      <div className="poem">
        <h1> {author.username} </h1>
        <time> {formatISO9075(new Date(createdAt))} </time>
        <Link to= {`/poem/${_id}`}> 
        <h1> {title} </h1> 
        </Link> 
        <h2> {content} </h2>
      </div>

    )
}
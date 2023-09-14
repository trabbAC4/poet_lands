import {formatISO9075} from "date-fns";

export default function Poem(title, content, createdAt, author ) {
    return(
        <div className = "poem">
        <h2> {title} </h2>
        <p className="info">
          <a className= "author"> {author.username} </a>
          <time> {formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className= "summary"> {content} </p>
      </div>

    )
}
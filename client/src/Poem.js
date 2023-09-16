import {format} from "date-fns";

export default function Poem(title, content, createdAt, author) {
    return(
        <div className = "poem">
        <h2> {title} </h2>
        <p className="info">
          {author && author.username && <a className= "author"> {author.username} </a>}
          <time> {format(new Date(createdAt), 'MM')}</time>
        </p>
        <p className= "summary"> {content} </p>

      </div>

    )
}
import {formatISO9075} from "date-fns";

export default function Poem({title, content, author}) {
    return(
      <div className="poem">
        <h2> {title} </h2> 
        <h2> {content} </h2>
      </div>

    )
}
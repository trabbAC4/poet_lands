import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";



export default function Poem({_id, title, createdAt, author}) {
  // const delete_user = (id) => {
  //   if (window.confirm("Are you sure you want to delete this?")) {
  //     alert("poem is deleted");
  //   }
  //   else {
  //     console.log("Deleted");
  //   }
  // }

    return(
      <div className = "display"> 
        <div className="poem">

          <Link to= {`/poem/${_id}`}>  
          <h1 id = "poem_title"> {title} </h1>
         </Link>
          <h1 id = "author"> {author.username} </h1>
          <time> Created: {formatISO9075(new Date(createdAt))} </time>
          
          {/* <h1 id = "delete" onClick={delete_user}> 🗑️  </h1> */}

         </div>
      </div>
    )
}
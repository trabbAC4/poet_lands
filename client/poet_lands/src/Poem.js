export default function Poem(title, content) {
    return(
        <div className = "poem">
        <h2> {title} </h2>
        <p className="info">
          <a className= "author"> Tahmidur Rabb</a>
          <time> 2023-09-05 08:50</time>
        </p>
        <p className= "summary"> {content} </p>
      </div>

    )
}
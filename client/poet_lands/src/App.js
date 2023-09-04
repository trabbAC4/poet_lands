
import './App.css';

function App() {
  return (
    <main>
      <header> 
        <a href= "" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className = "poem">
        <img src=""></img>
        <h2> Poet title </h2>
        <p className="info">
          <a className= "author"> Tahmidur Rabb</a>
          <time> 2023-09-05 08:50</time>
        </p>
        <p className= "summary"> This is the poem</p>
      </div>
      <div className = "poem">
        <img src=""></img>
        <h2> Poet title </h2>
        <p className="info">
          <a className= "author"> Tahmidur Rabb</a>
          <time> 2023-09-05 08:50</time>
        </p>
        <p className= "summary"> This is the poem</p>
      </div>
      <div className = "poem">
        <img src=""></img>
        <h2> Poet title </h2>
        <p className="info">
          <a className= "author"> Tahmidur Rabb</a>
          <time> 2023-09-05 08:50</time>
        </p>
        <p className= "summary"> This is the poem</p>
      </div>
    </main>
  );
}

export default App;

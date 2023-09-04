
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
      <div className = "entry">
        <img src=""></img>
        <h2> Poet title </h2>
        <p className="info">
          <a className= "author"> Tahmidur Rabb</a>
          <time> 2023-09-05 08:50</time>
        </p>
        <p> This is the poem</p>
      </div>
      <div className = "entry">
        <img src=""></img>
        <h2> Poet title </h2>
        <p> This is the poem</p>
      </div>
      <div className = "entry">
        <img src=""></img>
        <h2> Poet title </h2>
        <p> This is the poem</p>
      </div>
    </main>
  );
}

export default App;

import './App.css';
import Poem from "./Poem";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element= {
        <main>
          <Header />
          <Poem />
          <Poem />
          <Poem />
        </main>

      } />
      <Route path= {'/login'} element= {
        <div> Login Page </div>
      } />
      <Route path = {'/register'} element = {
        <div> Register </div> 
      }
      />
    </Routes>

  );
}

export default App;

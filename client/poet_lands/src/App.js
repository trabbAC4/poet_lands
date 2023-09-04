import './App.css';
import Poem from "./Poem";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register"

function App() {
  return (
    <Routes>
      <Route path= "/" element = { <Layout />}>
        <Route index element= {<HomePage /> } />
        <Route path= {'/login'} element= {<LoginPage />} />
        <Route path = {'/register'} element = { <Register />} />
      </Route> 
    </Routes>

  );
}

export default App;

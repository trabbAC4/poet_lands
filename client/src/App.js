import './App.css';
import Poem from "./Poem";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register"
import {UserContextProvider} from "./UserContext";
import CreatePoem from "./pages/CreatePoem";
import PoemPage from "./pages/PoemPage";

function App() {
  return (
    <UserContextProvider> 
      <Header />
      <Routes>
          <Route path= {"/"} element = {<Layout />}/>
          <Route index element= {<HomePage /> } /> 
          <Route path= {'/login'} element= {<LoginPage />} />
          <Route path = {'/register'} element = { <Register />} />
          <Route path = {'/poem'} element = {<CreatePoem />} />
          <Route path ='/poem/:id' element = {<PoemPage/>} >
          </Route> 
      </Routes>
    </UserContextProvider>

  );
}

export default App;

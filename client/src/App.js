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
import MainPage from "./Mainpage";
import PoemPage from "./pages/PoemPage";
import PoemType from "./pages/PoemType";
import InitialHeader from "./pages/InitialHeader"
import EditPoem from "./pages/EditPoem"

function App() {
  return (
    <UserContextProvider> 
      <Header />
      <Routes>
          <Route path = {"/"} element = {<MainPage />} />
          <Route path= {"/home"} element = {<Layout />}/>
          <Route path = {"/profile"} index element= {<HomePage /> } /> 
          <Route path= {'/login'} element= {<LoginPage />} />
          <Route path= {'/poemtype'} element = {<PoemType />} />
          <Route path = {'/register'} element = { <Register />} />
          <Route path = {'/poem'} element = {<CreatePoem />} />
          <Route path ='/poem/:id' element = {<PoemPage/>} />
          <Route path = '/edit/:id' element = {<EditPoem />} >
          </Route> 
      </Routes>
    </UserContextProvider>

  );
}

export default App;

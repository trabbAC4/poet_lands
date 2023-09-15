import Header from "./Header";
import{Outlet} from "react-router-dom";


export default function Layout() {
    return(
        <main>
            <Header />
            <div id = "Title"> 
            <h1> Welcome to Poet Lands </h1> 
            </div>
            <Outlet />

        </main>
    )
}
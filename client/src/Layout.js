import Header from "./Header";
import{Outlet} from "react-router-dom";
import MainPage from "./Mainpage"


export default function Layout() {
    return(
        <main>
            <MainPage />
            <Outlet />

        </main>
    )
}
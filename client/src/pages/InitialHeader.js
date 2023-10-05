import {Link} from "react-router-dom";


export default function InitialHeader() {
    return(
        <header class = "bg-white border-gray-200 dark:bg-gray-900">
        <Link to= "/" className="logo">📝 Poet Lands</Link>
        <nav class =  "bg-white border-gray-200 dark:bg-gray-900">
        <Link to ="/poem"> Create new poem </Link>
        <Link to = "/login"> Login </Link>
        <Link to = "/register"> Register </Link>
        </nav>
        </header>
    )
}
import { Link } from "react-router"
export default function Navbar(){
    return(
    
    <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/posts">Posts</Link>
    </nav>
    
    )
}
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavLink } from 'react-router-dom';

let header = () => {
    return (
        <div>
             <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="./header.js">
                    <img src="seminar.gif" alt="Bootstrap" width="50" height="50"/>
                        User Report
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <NavLink  to={"/"} style={{textDecoration:"none"}}><div class="nav-link">Home</div></NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink  to={"/profile"} style={{textDecoration:"none"}}><div class="nav-link">profile</div></NavLink>
                        </li>
                        <li class="nav-item">
                                <NavLink  to={"/error"} style={{textDecoration:"none"}}><div class="nav-link">Error</div></NavLink>
                            </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        </div>
    )
}
export default header;
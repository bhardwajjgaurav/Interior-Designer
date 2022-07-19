import React,{Component} from "react";
import './header.css'
import logo from '../../logo.png'

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className="nav-bar">
                <div class="container flex-container">
                    <a href="#"><img src={logo} alt="logo" class="logo" /></a>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Packages</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                </div>
            </div> 
        );
    }
}
 
export default Header;
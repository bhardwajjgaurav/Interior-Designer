import React,{Component} from "react";
import './footer.css'

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer class="footer bg-dark py-5">
            <div class="container grid-container grid-container-3">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                <div>
                    <h1>Interior Design</h1>
                    <p>copyright &copy; 2022</p>
                </div>
               
                <div class="social">
                    <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                    <a href="#"><i class="fab fa-youtube fa-2x"></i></a>
                </div>
               
            </div>
        </footer> 
        );
    }
}
 
export default Footer;
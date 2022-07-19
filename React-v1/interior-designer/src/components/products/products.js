import React,{Component} from "react";
import './products.css'
import project1 from './images/project1.jpeg'
import project2 from './images/project2.jpeg'
import project3 from './images/project3.jpeg'
import project4 from './images/project4.jpeg'
import project5 from './images/project5.jpeg'
import project6 from './images/project6.jpeg'

class Products extends Component {
    state = {  } 
    render() { 
        return (
            <section class="products">
        <h2 class="md text-center my-2">OUR INTERIOR DESIGN PROJECTS</h2>
        <div class="container flex-container">
            <div class="card">
                <img src={project1} alt="" />
                <a href="#" class="btn btn-dark">Show More</a>
            </div>
            <div class="card">
                <img src={project2} alt="" />
                <a href="#" class="btn btn-dark">Show More</a>
            </div>
            <div class="card">
                <img src={project3} alt="" />
                <a href="#" class="btn btn-dark">Show More</a>
            </div>
            <div class="card">
                <img src={project4} alt="" />
                <a href="#" class="btn btn-dark">Show More</a>
            </div>
            <div class="card">
                <img src={project5} alt="" />
                <a href="#" class="btn btn-dark">Show More</a>
            </div>
            <div class="card">
                <img src={project6} alt="" />
                <a href="#" class="btn btn-dark">Show More</a>
            </div>
        </div>
    </section>
        );
    }
}
 
export default Products;
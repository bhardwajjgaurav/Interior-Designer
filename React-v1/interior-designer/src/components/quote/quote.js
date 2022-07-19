import React,{Component} from "react";
import './quote.css'

class Quote extends Component {
    render(){
        return(
            <section class="quote bg-primary my-2 py-2">
            <div class="container grid-container">
                <div class="text-center">
                    <h2 class="lg">Best Interior Designer in Banglore</h2>
                    <p class="lead my-1">Interior Designing like you've never seen.
                         Fast, efficient and affordable
                    </p>
                    <a href="#" class="btn btn-dark">Get a Quote</a>
                </div>
            </div>
        </section>
        );
    }
}

export default Quote;
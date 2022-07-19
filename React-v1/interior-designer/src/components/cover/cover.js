import React,{Component} from "react";
import './cover.css'

class Cover extends Component {
    render(){
        return(
            <section class="cover">
            <div class="container grid-container">
                <div class="cover-text">
                    <h1>Best Interior Designer in Banglore</h1>
                    <p>We offer everything that makes your home beautiful,
                        comfortable and uniquely you, including end-to-end interior services including design,
                        execution and personalized solutions
                    </p>
                    <a href="#" class="btn btn-outline">Get a Quote</a>
                </div>
                <div class="cover-form card">
                    <h2>Get an Estimate</h2>
                    <form>
                        <div class="form-control">
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div class="form-control">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div class="form-control">
                            <input type="tel" name="phone" placeholder="Phone Number" required />
                        </div>
                        <div class="form-control">
                            <input type="text" name="property" placeholder="Property Name" />
                        </div>
                        <div class="form-control">
                            <input type="text" name="budget" placeholder="Estimated Budget" />
                        </div>
                        <input type="submit" value="Book Consultation" class="btn btn-primary" />
                    </form>
                </div>
            </div>
        </section>
        );
    }

}

export default Cover;
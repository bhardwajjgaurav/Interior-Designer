import React,{Component} from "react";
import './services.css'
import livingroom from './images/livingroom.jpeg'; 
import diningroom from './images/diningroom.jpeg'
import kitchen from './images/kitchen.jpeg'; 
import bedroom from './images/bedroom.jpeg'

class Services extends Component {
    render(){
        return(
            <section class="services">
        <div class="container">
            <h2 class="services-heading text-center my-1">
                Designing home with desire
            </h2>
            <h3 class="services-heading text-center my-1">
                With stunning designs and professional on-site services, we make dream homes come alive.
            </h3>
            <div class="grid-container text-center my-4">
                <div>
                    <img src={livingroom} alt="Living Room" />
                    <p class="text-secondary">Living Room</p>
                </div>
                <div>
                    <img src={diningroom} alt="Dining Room" />
                    <p class="text-secondary">Dining Room</p>
                </div>
                <div>
                    <img src={kitchen} alt="Kitchen" />
                    <p class="text-secondary">Kitchen</p>
                </div>
                <div>
                    <img src={bedroom} alt="Bedroom" />
                    <p class="text-secondary">Bedroom</p>
                </div>
                
            </div>
        </div>
    </section>
        );
    }
}

export default Services;
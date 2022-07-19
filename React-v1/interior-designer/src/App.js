import React from 'react';
import Header from './components/header/header';
import Cover from './components/cover/cover';
import Services from './components/services/services';
import Quote from './components/quote/quote';
import Products from './components/products/products';
import Footer from './components/footer/footer';


class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Cover />
                <Services />
                <Quote />
                <Products />
                <Footer />
            </div>
        )
    }
}

export default App;
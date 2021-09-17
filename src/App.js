
import './App.css';
 //import  Body from './Component/Body/Body';
 import Navbar from './Component/Navbar/Navbar'
import About from './Component/About/About'
import Qualifications from './Component/Qualifications/Qualifications'
import Home from './Component/Home'
import ScrollToTop from './Component/ScrollToTop';
import Footer from './Component/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolio from './Component/Portfolio/PortfolioPage'


function App() {
  return (

<div className="App">
      <Router>
       
        <Navbar/>
<ScrollToTop/>
       <Switch>
          <Route path="/about"component={About}/>
                   
          <Route path="/qualifications" component={Qualifications}/>
          <Route path="/portfolio" component={Portfolio}/>
             

          <Route path="/"  exact component={Home}/>
           
       </Switch>
       <Footer/>

      </Router>
      </div>


  );
}

export default App;

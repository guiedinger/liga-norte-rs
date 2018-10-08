import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Card from './components/card/Card'
import news from './services/notices'
import ratings from './services/rating';
import NavBar from './components/navbar/Navbar'
import Events from './components/events/Events'
import Rating from './components/table/table'
import './style.css'


const App = () =>(
      <div id="App" className="window">
        <Header/>
        <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} width={ '200px' }/>
        <div id="page-wrap" className="container">
          <Card data={news} />
          <Events/>
          <Rating data={ratings}/>
        </div>
      </div>
)
render(<App />, document.getElementById('root'));

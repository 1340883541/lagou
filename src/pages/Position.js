import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import ContentList from '../components/ContentList';
import "../pages/Position.css";
import '../App.css';

class Position extends Component {
  render() {
    return (

        <div className="App">
             
              <div className="header"><Link to="/" activeClassName="top">拉勾网</Link></div> 
              <ContentList/>

        </div>             
                    
    );
  }
}

export default Position;

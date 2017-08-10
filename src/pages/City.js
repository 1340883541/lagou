import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import 'City.css';


class City extends Component {
   constructor(){
            super();
            this.state={
                
            }
        }
  render() {
    return (
        <div className="App">
             {this.props.children}
                <div className="cityies">热门城市</div>
            </div>           
        </div>   
    );
  }
}

export default City;

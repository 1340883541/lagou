import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './Send.css';


class Send extends Component {
   constructor(){
            super();
            this.state={
                
            }
        }
  render() {
    return (
        <div className="App">
             {this.props.children}
                <div className="send">投递记录</div>
                      
        </div>   
    );
  }
}

export default Send;

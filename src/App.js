import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
             {this.props.children}
            <ul className="nav">
              <li><IndexLink to="/" activeClassName="active"><i className="iconfont icon-home"></i>职位</IndexLink></li>
              <li><Link to="seach" activeClassName="active"><i className="iconfont icon-search"></i>搜索</Link></li>
              <li><Link to="mein" activeClassName="active"><i className="iconfont icon-wode"></i>我的</Link></li>
            </ul>
        </div>


        
      
    );
  }
}

export default App;

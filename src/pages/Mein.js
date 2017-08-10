import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './Mein.css';
import $ from 'jquery';



class Mein extends Component {
  constructor(){
    super();
    this.state={
      name:localStorage.getItem("phone"),
      user:"block",
      user1:"none"
    }
    this.handel = this.handel.bind(this);
  }
  componentWillMount(){
      if(localStorage.getItem("phone")!=null){
        this.setState({
          user:"none",
           user1:"block"
        })
      }
  }
  render() {
    return (
        <div className="App">
             {this.props.children}
           <div className="header"><a href="#" className="top">拉勾网</a></div>

              <div style={{display:this.state.user}}>
                   <div className="Deng" >
                      <a href="login" className="log">登陆/注册</a>
                   </div>
            
                    <p className="btn1">
                        <a href="#" className="logo">投递</a>
                        <a href="#" className="logo">面试</a>
                    </p>
                    <p className="btn1">
                        <a href="#" className="logo">邀约</a>        
                        <a href="#" className="logo">收藏</a>
                    </p>
              </div>


                <div className="den" style={{display:this.state.user1}}>
                    <div className="photo">
                        <img src="http://www.lgstatic.com/images/myresume/default_headpic.png"/>
                    </div>
                    <div className="name">{this.state.name}</div>
                     <p className="btn1">
                    <a href="#" className="logo">投递</a>
                    <a href="#" className="logo">面试</a>
                </p>{}
                <p className="btn1">
                    <a href="#" className="logo">邀约</a>        
                    <a href="#" className="logo">收藏</a>
                </p>
                  <a className="out" href="#"onClick={this.handel}>退出登录</a>
              </div>

                
               

         </div> 
    );
  }
    handel(){
      this.setState({
        user1:"none",
        user:"block"
      })
  }
}



export default Mein;

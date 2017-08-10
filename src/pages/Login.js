import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Login.css";
import PropTypes from 'prop-types';
import $ from 'jquery';


class Login extends Component {
  constructor(){
    super();
    this.state={
      username:"",
      user:[],
      display:"none",
      bool:1,
      type2:"text",
      link:"#"
    };
    this.handleChange=this.handleChange.bind(this);
    this.handel=this.handel.bind(this);
    this.handelPhone=this.handelPhone.bind(this);
    this.changeClick=this.changeClick.bind(this);
  }
  componentWillMount(){

  }
  render(){
    var style={
      display:"none",
     


    }
    return (
      <div className="container">
            <div className="new_register">
                <div className="_info">
                    <input type="text"  value={this.state.value} className="phone _email" id="ggg"  placeholder="已验证手机/邮箱" 
                     onChange={this.handleChange} onClick={this.handelPhone} required autofocus data-ipu="username"/>
                    <span className="Notpassword" style={{display:this.state.display}}>请输入常用账号</span>
                </div>
                <div className="pdw">
                   <input type={this.state.type2?"password":"text"} placeholder="密码" className="psw btm" 
                   maxlength="16"  id="aaa" onChange={this.handleChange} Password required/>
                   <i className={this.state.bool?"iconfont icon-biyan":"iconfont icon-eye"}
                    onClick={this.changeClick}></i>
                   <span className="Notpassword" style={{display:this.state.display}}>请输入密码</span>
                </div>
           </div>               
                <a href={this.state.link}><div className="btn_green" onClick={this.handel}>登录</div></a>
                <div className="register_text">还没帐号？</div>
                <a href="register"><div className="btn_reg">注册</div></a>
      </div>
    );
  }

  handleChange(e){
     if(!this.state.username){
      this.setState({
        display:"none",

    })    
       return 
    }
  }
  handelPhone(e){
     
    }

    changeClick(){
      this.setState({
        bool:!this.state.bool,
        type2:!this.state.type2
      })
  }
    handel(e){ 
    var phone=document.querySelector(".phone").value;
    var psw=document.querySelector(".psw").value;
    if(phone===""){
      document.querySelector(".Notpassword").style.display="inline-block";
    }
    if(psw===""){
      document.querySelector(".Notpassword").style.display="inline-block";
    }
      if(!this.state.username){
        this.setState({
          display:"block"
        })    
    }   
      var aa=document.getElementById("ggg").value;
      localStorage.setItem("phone",(aa));

       var qq = e.target.value;
      this.setState({
          phone:qq
        })
     var regex = /^1[3|4|5|8][0-9]\d{8}$/;
        if (regex.test(qq)){ 
          this.setState({
            display:"none"
        })    
      }   
    if(document.querySelector(".phone").value&&document.querySelector(".psw").value){
        this.setState({
          link:"mein",
          display:"none"
        })

    }    
  }
  componentDidMount() {   
      $(".phone").focus(function () {
      $('.Notpassword').hide();
    });
     $(".psw").focus(function () {
      $('.Notpassword').hide();
    });
    }

  
    


}

export default Login;

    
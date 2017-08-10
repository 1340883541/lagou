import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Register.css";


class Register extends Component {
  constructor(){
    super();
    this.state={
      username:"",
      user:"",
      display:"none",
      _phone:"",
      asd:"",
      link:"#"
    }
    this.handel=this.handel.bind(this);
    this.handelPhone=this.handelPhone.bind(this);
    this.handelPsd=this.handelPsd.bind(this);
  }
  render(){
 var style={
  display:"none"
 }
    return (
      <div className="cont">
            <div className="_register">
                <div className="info">
                    <input type="text" className="_phone _email"  placeholder="手机号" data-propertyname="username" onChange
                    ={this.handelPhone}/>
                    <span className="Notpassword" style={{display:this.state.display}}>请填写手机号</span>
                </div>
                <div className="_pdw">
                   <input type="password" placeholder="请证明你不是机器人" className="psw _btm" maxlength="16"/>
                   <span className="Notpassword" style={{display:this.state.display}}>请输入验证码</span>
                </div>
                <div className="yan">
                  <img className="yzm" src="https://passport.lagou.com/vcode/create?from=register&amp;refresh=1500346279815"/>
                  <a className="huan">看不清楚，<em>换一张</em></a>
                </div>
                <div className="phoneY">
                   <input type="text" placeholder="短信验证码" className="xin"/>
                   <span className="Notpassword" style={{display:this.state.display}}>请输入验证码</span>
                   <b className="qu">获取</b>
                </div>
                <div className="psd">
                   <input type="password" placeholder="设置6-16位密码" className="asd" onChange={this.handelPsd} maxlength="16"/>
                   <span className="Notpassword"  style={{display:this.state.display}}>6-16位密码</span>
                   <i className="iconfont icon-biyan"></i>
                   <b className="iconfont icon-eye" style={style}></b>
                </div>
                <a href={this.state.link}><div className="btn-green" onClick={this.handel}>注册</div></a>
                <div className="register-text">还没帐号？</div>
                <a href="#"><div className="btn-reg">登陆</div></a>
                <div className="register-text">
                      点击注册，即代表您同意
                     <a href="http://www.lagou.com/privacy.html">《拉勾用户协议</a>
               < /div>
           </div>                        
      </div>
    );
  }
  handel(){
      if(!this.state.username.trim()){
      this.setState({
        display:"block"
      })
      if(document.querySelector("._phone").value&&document.querySelector(".asd") .value){
        this.setState({
          link:"login"
          })
      }
      var q = document.querySelector("._phone").value;
      this.setState({
        _phone:q
        })
      var regex = /^1[3|4|5|8][0-9]\d{8}$/;
          if (regex.test(q)){ 
            this.setState({
              display:"none"
          })   
    } 

    localStorage.setItem("user",JSON.stringify({"phone":this.state._phone,"asd":this.state.asd})); //只能存字符串 
  }
}
handelPhone(){
  
}

    
  handelPsd(){
      var a = document.querySelector(".asd") .value;
      this.setState({
        _phone:a
        })
      var reg=/^[a-zA-Z0-9_]{6-16}*$/;
      if (reg.test(a)){ 
            this.setState({
            display:"none"
         })   
    }
  }
}

export default Register;

    
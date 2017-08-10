import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './Seach.css';
import ContentItem from '../components/ContentItem';
import $ from 'jquery';




class Seach extends Component {
   constructor(){
            super();
            this.state={
                display:"none",
                user:"none",
                joblist:[],
            }
            
            this.handel=this.handel.bind(this);
            this.handleClick=this.handleClick.bind(this);
            this.handelChange=this.handelChange.bind(this);
            this.handelSearch=this.handelSearch.bind(this);
            this.handelMore=this.handelMore.bind(this)
    
        }
  render() {
    var style={
      display:"none"
    }
    var list = this.state.joblist.map(function(elem,index){
        return <ContentItem job={elem} key={elem.index}/>
      })
    var arr=[
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州",
          "北京","上海", "广州","深圳"," 成都","杭州"
            
    ]
    return (
        <div className="App">
             {this.props.children}
             <div className="header"><a href="#" className="top" id="top">拉勾网</a></div>
             <div className="con">
                <div className="lbutton" onClick={this.handel}>
                    <span className="city" onClick={this.handel}>全国<i className="iconfont icon-down-trangle"></i></span>         
                </div>               
                <div className="rinput">
                    <input className="inputer" type="text" placeholder="搜索职位或公司"/>
                    <span className="iconfont icon-search" onClick={this.handelSearch}></span>

                </div>
            </div>
            <ul className="history">      
              <li className="activeable history-item">
                <span className="text" data-name="html" onClick={this.handelChange}>html</span>
                <span className="delicon" onClick={this.handleClick} >X</span>               
              </li>
            </ul>
            
            <form className="cityicon">
               <div className="cityies" >热门城市</div>
                  <ul className="cities-list">
                  {
                      arr.map(function(name,index){
                        return <li onClick={()=>{document.querySelector(".city").innerHTML=name;
                        document.querySelector(".cityicon").style.display="none";}}>{name}</li>
                      })
                     } 
    
                  </ul>
            </form>
            <ul className="hid">
            {list}
            {/*<p className="more" onClick={this.handelMore} >加载更多</p>*/}
            </ul>
        </div>   
    );
  }
  

  handel(){
    document.querySelector(".cityicon").style.display="block";
  }
  handleClick(pageNum,pageSize){
     document.querySelector(".history").style.display="none";
  }
  handelChange(pageNum,pageSize){
     document.querySelector(".inputer").value=document.querySelector(".text").innerHTML;
     document.querySelector(".history").style.display="none";
        var _this =this;
        var list = this.state.joblist;
      $.get("/api/list",{
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize
      },function(data){
         // console.log(list) 
        list = [...list,...data.joblist];
          _this.setState({
             joblist:list
          });
         _this.setState((prevState) => ({ //更新pageNum
              pageNum: prevState.pageNum + 1
        })) 
       })
     } 
      handelMore(pageNum,pageSize){
      //   var _this =this;
      //   var list = this.state.joblist;
      // $.get("/api/list",{
      //   pageNum:this.state.pageNum,
      //   pageSize:this.state.pageSize
      // },function(data){
      //    // console.log(list)
  
      //   list = [...list,...data.joblist];
      //     _this.setState({
      //        joblist:list
      //     });
      //    _this.setState((prevState) => ({ //更新pageNum
      //         pageNum: prevState.pageNum + 1
      //   })) 
      //  })
     } 



   handelSearch(pageNum,pageSize){
      localStorage.setItem("search",JSON.stringify(document.querySelector(".inputer").value));
      var _this =this;
      var list = this.state.joblist; 

      $.get("/api/list",{
        pageNum:this.state.pageNum,
        pageSize:this.state.pageSize
      },function(data){
         // console.log(list)
       var arr=[];

        var search = JSON.parse(localStorage.getItem('search'))
        data.joblist.forEach(function(elem){
          if(elem.positionName.indexOf(search)!==-1){
             arr.push(elem);
             _this.setState({
                joblist:arr
              })
                  
          }
          })     
       
       })
       document.querySelector(".history").style.display="none"

   }
}


export default Seach;

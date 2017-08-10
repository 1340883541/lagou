import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import ContentItem from './ContentItem';
import "./ContentList.css";
import $ from 'jquery';

class ContentList extends Component {
    constructor(){
      super();
      this.state = {
       joblist:[],
        pageNum:0,
        pageSize:15
      }
      this.handelMore=this.handelMore.bind(this);
    }
    componentWillMount(){
   
        this.handelMore(this.state.pageNum,this.state.pageSize);
    }
    componentDidMount(){

    }
    render(){
      var list = this.state.joblist.map(function(elem,index){
        return <ContentItem job={elem} key={elem.index}/>
      })
      return(
        <ul>
          <div>
          <div className="deng">
          <span className="De">10秒钟定制职位</span>
          <a link="#"><span className="lu">去登陆</span></a>
          </div>
          {list}
              <p className="more" onClick={this.handelMore} >加载更多</p>
              <div id="copyright"><p>©2015 lagou.com, all right reserved 
                </p><div className="copyright-item"><span className="phone active">
                移动版&nbsp;·&nbsp;</span><span className="computer">电脑版&nbsp;·&nbsp;
                </span><a href="header">回顶部</a></div></div>
          </div>
        </ul>
      )
    }
     handelMore(pageNum,pageSize){
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
   }
 
export default ContentList;

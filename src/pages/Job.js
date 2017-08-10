import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Job.css';



class Job extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div className="App">
             {this.props.children}
             <div className="header"><a href="#" className="top">职位详情</a><i className="iconfont icon"></i></div>   
            <div className="content">
                 <div className="postitle">
                 <a href="seach"><h2 className="title">Web前端Leader</h2></a>
		            <div className="collicon activeable">
		                <span className="icon notcoll"></span>
		                <span className="text">
		                   未收藏
		                </span>
		            </div>
		        </div>
		        <div className="detail">
                    <div className="items">
                        <span className="item salary">
                            <em className="icon"></em>
                            <span className="text">18k-20k</span>
                        </span>
                        <span className="item workaddress">
                            <em className="icon"></em>
                            <span className="text">成都</span>
                        </span>
                        <span className="item jobnature">
                            <em className="icon"></em>
                            <span className="text">全职</span>
                       </span>
                       <span className="item workyear">
                            <em className="icon"></em>
                            <span className="text">5-10年</span>
                       </span>
                       <span className="item education">
		                    <em className="icon"></em>
		                    <span className="text">本科及以上</span>
                       </span>
                    </div>
			        <div className="temptation">
			            职位诱惑：年终奖金,带薪年假,健康体检,优惠机票
			        </div>
                </div>
                <div className="company activeable">
                     <img src="http://www.lgstatic.com/image1/M00/00/43/CgYXBlTUXNOAB9zQAACiK-dB8kg706.jpg" alt="" className="logo" />
                     <div className="desc">
                        <div className="dleft">
                          <h2 className="title">
                              海南航空
                          </h2>
                          <p className="info">企业服务/ 上市公司/ 2000人以上</p>
                         </div>
                        <span className="dright"></span>
                     </div>
               </div>

          <div className="positiondesc">
            <header className="header">
                职位描述
            </header>
            <div className="content">
                <p className="MsoListParagraph"><strong><span className="">岗位职责：</span></strong></p>
                <p className="MsoListParagraph"><span className="">1、</span><span className="">协助副总进行对互联网媒体的大客户开发及维护工作；</span></p>
                <p className="MsoListParagraph"><span className="">2、</span><span className="">进行客户资料整理、项目情况汇总等；</span></p>
                <p className="MsoListParagraph"><span className="">3、</span><span className="">协助副总拜访和谈判客户，跟进项目进程；</span></p>
                <p className="MsoListParagraph">4<span className="">、</span><span className="">完成副总交代的其他工作事宜。</span></p>
                <p className="MsoListParagraph"><span className="">5、</span><span className="">协助副总进行对互联网媒体的大客户开发及维护工作；</span></p>
                <p className="MsoListParagraph"><span className="">6、</span><span className="">进行客户资料整理、项目情况汇总等；</span></p>
                <p className="MsoListParagraph"><span className="">7、</span><span className="">协助副总拜访和谈判客户，跟进项目进程；</span></p>
                <p className="MsoListParagraph">8<span className="">、</span><span className="">完成副总交代的其他工作事宜。</span></p>
                
                <p><br /></p>
            </div>
        </div>
          <div className="deliver">
              投个简历
          </div>
            </div>
      </div>
    );
  }
}

export default Job;
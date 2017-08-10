import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './ContentItem.css';




class ContenntItem extends Component {
  render(){
      let {job} = this.props 
      return(
        <Link to="job">
      <li className="activeable list-item" data-positionid="2815360" data-companyid="7535">
               <img src={job.companyLogo} className="item-logo" />
              <div className="item-desc">
                  <h2 className="item-title">{job.companyName}</h2>
                  <p className="item-info">
                      <span className="item-pos">
                         {job.positionName}[{job.city}]
                      </span>
                      <span className="item-salary">{job.salary}</span>
                  </p>
                  <p className="item-time">{job.createTime}</p>
              </div>
          </li>
          </Link>
      )
    }
}

export default ContenntItem;

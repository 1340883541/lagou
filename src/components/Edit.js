import React, { Component } from 'react';
import './Edit.css';


class Edit extends Component {
	constructor(){
        super()
	}
	
	render(){
         return (
	         <div className="custom-info" style={{display: "block"}}>
	            <span className="info">web前端/成都/15k-25k/没有要求</span>
	            <a className="go">
	                <em className="icon"></em>
	                <em className="text">编辑</em>
	            </a>
	         </div>
         	)
          
	}
}


export default Edit;
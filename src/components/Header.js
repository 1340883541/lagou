import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import PropTypes from 'prop-types';
import './Header.css'

class Header extends Component {
    constructor(props){
         super(props)
    }
    render(){
    	var isShowBack = this.props.isShowBack;
    	var isShowHome = this.props.isShowHome;
    	var {history} =  this.props;
        return (
               <header id="header">
                 {this.props.title}
                 <div className={isShowBack?"left":"hidden"} onClick={() => history.goBack()}>
                    <span className="corner"></span>
                 </div>
                 <IndexLink to="/">
                   <div className={isShowHome?"right":"hidden"}>
                   <span className="corner"></span></div>
                 </IndexLink>
               </header>   
        	)
    }
}

Header.propTypes = {
  isShowBack: PropTypes.bool,
  isShowHome: PropTypes.bool,
  title: PropTypes.string
};

export default Header;
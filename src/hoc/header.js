import React, { useState , Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./header.css";



class Header extends Component {

  render(){
    let numberOfOrders;
    if(this.props.orders.orders){
      numberOfOrders = this.props.orders.orders.length;
    }

    return (
      <div className="header">
        <Link to="/" className="logo">Order SandWitch</Link>
        <div className="header-right">
          <Link className="active" to="/">Home</Link>
         <Link to="/orders">Orders {numberOfOrders} </Link>
        </div>
      </div>
    );
  }  
}

function mapStateToProps(state){
  return{
      orders: state.order
  }
}

export default connect(mapStateToProps )(Header);
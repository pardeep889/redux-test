import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux"
import { getInventory, addOrder } from "../../Actions/index";

class Index extends Component {
    componentDidMount(){
        this.props.dispatch(getInventory());
    }

    orderSandwitch(item){
        this.props.dispatch(addOrder(item));
    }

    renderRows = (menu) => {         
      return menu.map((item, i) => {
          item.complete= false;
          item.status= "pending"
        return (  
            <tr key ={i}>
                <th scope="row">{i+1}</th>
                 <td>{item.name}</td>
                <td>${item.price}</td>
                <td> <Button onClick={() => this.orderSandwitch(item)} color="success">Add</Button></td>
            </tr>)
      })
    }

    render() {
        const {inventory} = this.props;
        if(!inventory.data){
            return null;
        }
        return (
            <>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderRows(inventory.data.menu)}
                </tbody>
          </Table>
          </>
        );
    }
}


function mapStateToProps(state){
    return{
        inventory: state.inventory,
    }
}
export default connect(mapStateToProps)(Index);
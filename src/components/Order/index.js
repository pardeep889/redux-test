import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { getInventory, makeComplete, makePickup } from "../../Actions/index";

class Index extends Component {
  componentDidMount() {
    this.props.dispatch(getInventory());
  }

  makeComplete(index) {
      console.log(index);
    //   return;
    this.props.dispatch(makeComplete(this.props.orders.order.orders, index))
  }

  makePickup (index){
    this.props.dispatch(makePickup(this.props.orders.order.orders, index))

  }

  renderRows = (menu) => {
    return menu.map((item, i) => {
      return (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td>{item.status}</td>
          <td>{item.complete ? "yes" : "no"}</td>
          <td>
            {!item.complete ? (
              <Button onClick={() => this.makeComplete(i)} color="success">
                Complete
              </Button>
            ) : null}
            &nbsp; {item.status === "pending" && (<Button onClick={() => this.makePickup(i)} color="danger">
                Pickup
            </Button>) }
          </td>
        </tr>
      );
    });
  };

  render() {
    const { orders } = this.props;
    if (!orders.order.orders) {
      return null;
    }
   

    var total = orders.order.orders
      .map((order) => order.price)
      .reduce((acc, order) => order + acc);


    return (
      <>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>isCompleted</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderRows(orders.order.orders)}</tbody>
        </Table>

        <h2>Total Price : ${total.toFixed(2)}</h2>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state,
  };
}
export default connect(mapStateToProps)(Index);

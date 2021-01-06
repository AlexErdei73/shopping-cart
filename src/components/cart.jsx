import { Table, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { tableLine, payable } from "../helper";

const Cart = (props) => {
  const { items } = props;

  const [show, setShow] = useState(false);

  return (
    <div className="pt-5 mt-5 row">
      <div className="col-1"></div>
      <div className="col-10">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Unit Price</th>
              <th>Ordered Number</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              if (!item.numberPurchased) return <tr></tr>;
              return tableLine(item);
            })}
            <tr>
              <tr></tr>
              <th></th>
              <th></th>
              <th></th>
              <th>{payable(items)}</th>
            </tr>
          </tbody>
        </Table>
        <div className="col-1"></div>
      </div>
      <div className="col-6"></div>
      <div className="col-6">
        <Button variant="primary" onClick={() => setShow(true)}>
          Pay Now
        </Button>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Title className="bg-info text-light">
          Thank you for shopping!
        </Modal.Title>
        <Modal.Body>
          This function has not been implemented yet, because the app is only
          for demonstration purposes.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;

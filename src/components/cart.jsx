import { Table, Button } from "react-bootstrap";

function tableLine(book) {
  const { author, title, unitPrice, numberPurchased } = book;
  return (
    <tr>
      <th>{author}</th>
      <th>{title}</th>
      <th>{unitPrice}</th>
      <th>{numberPurchased}</th>
      <th>{totalPrice(book)}</th>
    </tr>
  );
}

function totalPrice(item) {
  return item.unitPrice * item.numberPurchased;
}

function payable(items) {
  let payable = 0;
  items.forEach((item) => {
    payable += totalPrice(item);
  });
  return payable;
}

const Cart = (props) => {
  const { items } = props;

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
        <Button variant="primary">Pay Now</Button>
      </div>
    </div>
  );
};

export default Cart;

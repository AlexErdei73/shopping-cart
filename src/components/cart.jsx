import { Table } from "react-bootstrap";

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
    <div className="pt-5">
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
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;

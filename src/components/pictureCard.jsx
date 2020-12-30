import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PictureCard = (props) => {
  const { content, id, onButtonClick } = props;
  const { unitPrice, image } = content;

  let numberPurchased = 1;

  const handleChange = (event) => {
    const value = event.target.value;
    numberPurchased = Number(value);
  };

  return (
    <div className="col-md-3 col-sm-6 col-xs-12 pt-5">
      <Card className="w-75 m-4">
        <Card.Img variant="top" src={image} width="248" height="308" />
        <Card.Body>
          <Card.Title>£{unitPrice}</Card.Title>
          <div className="row">
            <input
              type="number"
              min="1"
              defaultValue={numberPurchased}
              className="w-25 m-3"
              onChange={handleChange}
            />
            <Button
              className="btn-sm ml-5 mt-3 mb-3"
              variant="primary"
              onClick={() => onButtonClick(id, numberPurchased)}
            >
              Buy Me!
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PictureCard;

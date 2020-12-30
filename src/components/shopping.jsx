import PictureCard from "./pictureCard";

const Shopping = (props) => {
  const { items, onButtonClick, buttonText } = props;
  return (
    <div className="pt-5 bg-secondary">
      <div className="row">
        {items.map((item, index) => {
          return (
            <PictureCard
              content={item}
              key={index}
              id={index}
              onButtonClick={(id, numberPurchased) =>
                onButtonClick(id, numberPurchased)
              }
              buttonText={(id) => buttonText(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shopping;

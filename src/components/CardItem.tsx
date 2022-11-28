import { Button, Card } from "react-bootstrap";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CardItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const CardItem = ({ id, name, price, imgUrl }: CardItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCartContext();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={`./public/${imgUrl}`}
        alt={name}
        height="200"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center pb-3">
          <Card.Title className="fs-3">{name}</Card.Title>
          <Card.Text className="text-muted">{formatCurrency(price)}</Card.Text>
        </div>
        {quantity === 0 ? (
          <Button
            className="w-100 mt-auto"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to cart
          </Button>
        ) : (
          <div className="gap-3 d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{getItemQuantity(id)}</span> in Cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>

            <Button
              variant="danger"
              className="mx-auto"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardItem;

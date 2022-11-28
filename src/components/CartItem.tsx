import { Button, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCartContext();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <div className="d-flex gap-3 align-items-center justify-content-between">
      <img
        src={item.imgUrl}
        alt={item.name}
        width="125px"
        height="75px"
        style={{ objectFit: "cover" }}
      />
      <div className="info me-auto">
        <span className="name fs-5">{item.name}</span>
        <span className="text-muted ms-1" style={{ fontSize: "12px" }}>
          x{quantity}
        </span>
        <span className="text-muted d-block" style={{ fontSize: "15px" }}>
          {formatCurrency(item.price)}
        </span>
      </div>

      <div className="ms-auto d-flex align-items-center justify-content-flex-end">
        <span className="me-1"> {formatCurrency(item.price * quantity)}</span>
        <Button variant="outline-danger" onClick={() => removeFromCart(id)}>
          &times;
        </Button>
      </div>
    </div>
  );
};

export default CartItem;

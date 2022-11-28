import { Col, Container, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import CardItem from "../components/CardItem";

const Store = () => {
  return (
    <Container>
      <h2>Store</h2>
      <Row className="g-4">
        {storeItems.map((item) => (
          <Col key={item.id} md={6} lg={4}>
            <CardItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;

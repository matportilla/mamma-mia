import { Container } from "react-bootstrap";
import Card from "../cards/Card";
import "../menu/Menu.css"

function Menu({ data }) {
  return (
    <Container>
      <div>
        <h1>La nostra cucina</h1>
      </div>
      <div className="grilla-carta">
        {data.map((p, index) => (
          <Card key={index} product={p}
          />
        ))}
      </div>
    </Container>
  );
}

export default Menu;
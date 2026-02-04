import './App.css';
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./price";
import Description from "./description";
import Image from "./image";

const firstName = "abidi";

function App() {
  return (
    <div className="container mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Body>

          <Image />

          <Card.Title>
            <Name />
          </Card.Title>

          <Price />
          <Description />

        </Card.Body>
      </Card>

      <div className="mt-3">
        {firstName ? (
          <>
            <h4>Hello, {firstName}!</h4>
            <img
              src="https://picsum.photos/200"
              alt="hello"
              className="mt-2"
            />
          </>
        ) : (
          <h4>Hello, there!</h4>
        )}
      </div>
    </div>
  );
}

export default App;

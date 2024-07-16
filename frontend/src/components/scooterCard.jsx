import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import scooter_logo from "../assets/scooter.png";

function BasicExample() {
  return (
    <div className=" row pt-40">
      <div className=" col-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={scooter_logo} />
          <Card.Body>
            <Card.Title>Scooter A</Card.Title>
            <Card.Text></Card.Text>
            <Link to="/Bookings/scheduler_1">
              <Button variant="primary">Let's go</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className=" col-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={scooter_logo} />
          <Card.Body>
            <Card.Title>Scooter B</Card.Title>
            <Card.Text></Card.Text>
            <Link to="/Bookings/scheduler_2">
              <Button variant="primary">Let's go</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className=" col-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={scooter_logo} />
          <Card.Body>
            <Card.Title>Scooter C</Card.Title>
            <Card.Text></Card.Text>
            <Link to="/Bookings/scheduler_3">
              <Button variant="primary">Let's go</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="row pt-5 m-0.5 col-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={scooter_logo} />
          <Card.Body>
            <Card.Title>Scooter C</Card.Title>
            <Card.Text></Card.Text>
            <Link to="/Bookings/scheduler_4">
              <Button variant="primary">Let's go</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;

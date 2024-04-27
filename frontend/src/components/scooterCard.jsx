import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Scheduler_sc1_Page from "../pages/scheduler_sc1_Page";
import Scheduler_sc2_Page from "../pages/scheduler_sc2_Page";

function BasicExample() {
  return (
    <div className=" row pt-40">
      <div className=" col-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>V3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/Bookings/scheduler_1">
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className=" col-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>v6</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/Bookings/scheduler_2">
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className=" col-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;

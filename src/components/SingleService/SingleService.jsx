import { Card, Col } from "react-bootstrap";
import "./SingleService.css";

const SingleService = (props) => {
  const { catagory, img, cost } = props.service;
  return (
    <div>
      <Col>
        <Card className="single-card">
          <Card.Img
            className="card-img-top img-fluid"
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title className="card-title">{catagory}</Card.Title>
            <Card.Text>
              <h5>Course Fees: ${cost}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleService;

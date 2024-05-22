import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
  // Loading Data form internal JSON file.

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="section-header">OUR SPECIAL SERVICES</h1>
      <br />
      <hr />
      <br />
      <Row xs={1} md={2} lg={4} className="g-3 px-5">
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </Row>
    </div>
  );
};

export default Services;

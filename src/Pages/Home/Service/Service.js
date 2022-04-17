import React from "react";
import { Card,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
//   console.log(service);
  const { id, img, review, price, name } = service;
  const navigate =useNavigate();

  const handelToserviceDetail = (id) =>{
    navigate (`/service/${id}`);
  } 
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h3>${price}</h3>
          <Card.Text>
            {review}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() =>handelToserviceDetail(id)} className="text-body w-100 ">Book Now</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;

import React from "react";
import { Card,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Service.css'

const Service = ({service}) => {
//   console.log(service);
  const { id, img, review, price, name } = service;
  const navigate =useNavigate();

  const handelToserviceDetail = (id) =>{
    navigate (`/service/${id}`);
  } 
  return (
    
     <div className=" gx-5 col-sm-12 col-md-6 col-lg-4 box-style">
         
     <Card>
        <Card.Img variant="top" className="w-100" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h3>${price}</h3>
          <Card.Text>
            {review.slice(0,150)}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() =>handelToserviceDetail(id)} className=" w-100 btn btn-dark">Book Now</Button>
        </Card.Footer>
      </Card>
     </div>
    
  );
};

export default Service;

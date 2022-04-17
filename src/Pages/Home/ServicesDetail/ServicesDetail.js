import React from "react";
import { Link, useParams } from "react-router-dom";

const ServicesDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="mt-5">
      {/* <h2>ServicesDetail{serviceId}</h2> */}
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesDetail;

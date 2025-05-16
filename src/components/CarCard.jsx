import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { formatAddress } from "@/utils/formatAddress";
import { formatMileage } from "@/utils/formatMileage";

const CarCard = ({ car }) => {
  const {
    id,
    img,
    brand,
    model,
    year,
    type,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const formattedAddress = formatAddress(address);
  const formattedMileage = formatMileage(mileage);

  return (
    <Card className="w-full max-w-min rounded-none border-0 shadow-none gap-4">
      <Link to={`/catalog/${id}`}>
        <div className="relative h-[268px] rounded-2xl overflow-hidden">
          <img
            src={img}
            alt={`${brand} ${model}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,20,23,0.5)_2.5%,rgba(18,20,23,0)_41.07%)] pointer-events-none rounded-2xl" />
        </div>
      </Link>
      <CardContent className="p-0 mb-4">
        <Link to={`/catalog/${id}`}>
          <div className="flex justify-between text-xl font-semibold mb-2">
            <span>
              {brand} <span className="text-blue-500">{model}</span>, {year}
            </span>
            <span>${rentalPrice}</span>
          </div>
        </Link>
        <div className="text-xs text-muted-foreground">
          {formattedAddress} | {rentalCompany} | <br /> {type} |{" "}
          {formattedMileage}
        </div>
        {/* <div className="flex flex-wrap gap-2 mt-2">
          {accessories.slice(0, 3).map((item, index) => (
            <Badge key={index} variant="outline">
              {item}
            </Badge>
          ))}
        </div> */}
      </CardContent>
      <CardFooter className="p-0">
        <Button asChild size="lg">
          <Link to={`/catalog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;

import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { formatAddress } from "@/utils/formatAddress";
import { formatMileage } from "@/utils/formatMileage";
import FavoriteButton from "./FavoriteButton";

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
    <Card className="flex flex-col gap-4 h-full shadow-none p-0 border-0">
      <div className="relative h-[268px] rounded-2xl overflow-hidden">
        <FavoriteButton carId={id} />
        <img
          src={img}
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,20,23,0.5)_2.5%,rgba(18,20,23,0)_41.07%)] pointer-events-none rounded-2xl" />
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <CardContent className="p-0 mb-8 flex flex-col gap-2 flex-grow">
          <Link to={`/catalog/${id}`}>
            <div className="flex justify-between text-base font-semibold">
              <span>
                {brand} <span className="text-blue-500">{model}</span>, {year}
              </span>
              <span>${rentalPrice}</span>
            </div>
          </Link>
          <div className="text-xs text-muted-foreground">
            {formattedAddress} | {rentalCompany} <br />
            {type} | {formattedMileage}
          </div>
        </CardContent>

        <CardFooter className="p-0 mt-auto">
          <Button asChild size="lg" className="w-full">
            <Link to={`/catalog/${id}`}>Read More</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CarCard;

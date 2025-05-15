import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

import homeBg from "@/assets/home-bg.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main
        className="flex-1 bg-cover bg-center flex items-end justify-center text-center text-white"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="mb-44 rounded">
          <h2 className="text-6xl  font-bold mb-4">
            Find your perfect rental car
          </h2>
          <p className="text-2xl mb-10">
            Reliable and budget-friendly rentals for any journey
          </p>
          <Button asChild size='lg'>
            <Link
              to="/catalog"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View Catalog
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

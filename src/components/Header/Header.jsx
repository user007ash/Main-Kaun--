import React from "react";
import { Card } from "../ui/card";
import { Link } from "react-router-dom";
  

const Header = () => {
  return (
    <header className="container mx-auto my-6">
      <Card className="p-4 shadow-md">
        <div className="flex justify-center items-center">
          <Link to ="/" className="text-3xl font-bold tracking-wide text-blue-600 rounded-2xl border-2 border-blue-700 px-2 py-1">MK?</Link>
        </div>
      </Card>
    </header>
  );
};

export default Header;
  
import React from "react";
import { Card } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";


const Header = () => {
  return (
    <header className="container mx-auto my-6">
      <Card className="p-4 shadow-md">
        <div className="flex justify-center items-center">
          <Link to ="/">
          <Button className="text-3xl" variant="noShadow" size="lg">MK?</Button></Link>
        </div>
      </Card>
    </header>
  );
};

export default Header;
  
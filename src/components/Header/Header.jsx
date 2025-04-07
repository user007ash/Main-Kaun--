import React from "react";
import { Card } from "../ui/card";

const Header = () => {
  return (
    <div className="container mx-auto">
      <Card className="p-4">
        <div className="flex justify-center items-center">
            <h1>Main Kaun?</h1>
        </div>
      </Card>
    </div>
  );
};

export default Header;

import React from "react";
import { Card } from "../ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container mx-auto my-6 ">
      <Card className="p-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-blue-600">Main Kaun?</h1>
          <div className="flex gap-4">
            <a
              href="https://github.com/user007ash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh-pratap-singh-18b3b7146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/ashu098p?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;

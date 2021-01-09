import React from "react";
import { Link } from "react-router-dom";

const HomeButton: React.FC = () => {
  return (
    <Link to="/">
      <button>View All Blog Posts</button>
    </Link>
  );
};

export default HomeButton;

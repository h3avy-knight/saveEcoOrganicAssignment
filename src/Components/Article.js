import React from "react";
import { Link } from "react-router-dom";

const Article = ({ name, images, id, attacks, abilities }) => {
  return (
    <Link to={`${id}`}>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={images?.large}
          className="md:h-700 w-full object-cover"
          alt=""
        />
        <h2 className="font-bold text-lg text-gray-900 mb-2 p-4 text-center">
          {name}
        </h2>
      </article>
    </Link>
  );
};

export default Article;

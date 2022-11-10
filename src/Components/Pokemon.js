import React, { useEffect, useLayoutEffect, useState } from "react";
import Article from "./Article";

const Pokemon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await fetch(
          "https://api.pokemontcg.io/v2/cards?page=1&pageSize=100"
        );
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllData();
  }, []);

  return (
    <>
      {!data ? (
        <h1 className="text-dark font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl">
          Loading...
        </h1>
      ) : (
        <section className="container mx-auto p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {data?.map((item) => (
              <Article key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Pokemon;

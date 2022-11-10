import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCard = () => {
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSingleCardData = async () => {
      try {
        const res = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`);
        const data = await res.json();
        setSingleData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCardData();
  }, []);

  return (
    <>
      <section className="p-8 md:py-0 max-w-7xl mx-auto p-8 md:py-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen">
          <article>
            <img src={singleData?.images?.large} alt="" />
          </article>
          <article>
            <h2 className="text-3xl">Name: {singleData?.name}</h2>
            <h2 className="text-2xl my-5">HP: {singleData?.hp}</h2>
            {/* Attack */}
            {singleData.attacks && (
              <>
                <ul className="flex flex-wrap items-start items-center justify-start gap-2">
                  <h3>Attacks: </h3>
                  {singleData.attacks.map((attack) => (
                    <li
                      key={attack.name}
                      className="bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 text-gray-200"
                    >
                      {attack.name}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {/* Abilities */}
            {singleData.abilities && (
              <>
                <ul className="flex flex-wrap items-start items-center justify-start gap-2 my-5">
                  <h3>Abilities: </h3>
                  {singleData.abilities.map((ability) => (
                    <li
                      key={ability.name}
                      className="bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 text-gray-200"
                    >
                      {ability.name}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link
              to="/"
              className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
            >
              &larr; Back
            </Link>
          </article>
        </div>
      </section>
    </>
  );
};

export default SingleCard;

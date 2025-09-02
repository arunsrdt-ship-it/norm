import React, { useState } from "react";
import CardDetails from "../CardDetails.js";

const ReviewCards = () => {
  const [cards, setCards] = useState(CardDetails);

  return (
    <div className=" flex flex-wrap">
      {cards?.map((item) => (
        <div className="wrapper shadow-md border-1 border-gray-300 mt-2  ml-30 mb-5 rounded-xl p-5  grid grid-col-4 w-[40vw] " key={item.id}>
          <div className="font-bold text-xl">{item.name}</div>
          <div className="font-bold text-gray-500">{item.designation}</div>
          <div className="mt-5">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCards;

import React from "react";

const Card = (propos) => {
    console.log(propos.country)
  return (
    <li className="card">
      <div className="infos">
        <h2>Nom du pays</h2>
      </div>
    </li>
  );
};

export default Card;

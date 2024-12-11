import React from "react";

const PreviousMatches = () => {
  const previousMatches = JSON.parse(localStorage.getItem("previousMatches")) || [];

  return (
    <div>
      <h2>Your Previous Matches</h2>
      <ul>
        {previousMatches.map((match, index) => (
          <li key={index}>{match}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousMatches;

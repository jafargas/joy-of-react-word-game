import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const statuses = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        return (
          <span
            key={index}
            className={
              guess && guess.length > index
                ? `cell ${statuses[index].status}`
                : "cell"
            }
          >
            {guess && guess.length > index ? guess[index] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

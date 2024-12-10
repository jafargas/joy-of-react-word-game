import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ results, answer }) {
  return (
    // <div className="guess-results">
    //   {results.map((item) => {
    //     return (
    //       <p key={item.id} className="guess">
    //         {item.guess}
    //       </p>
    //     );
    //   })}
    // </div>

    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => {
        return (
          <Guess
            key={row}
            guess={results.length > row ? results[row].guess : ""}
            answer={answer}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;

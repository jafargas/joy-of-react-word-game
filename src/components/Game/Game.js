import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";
import { checkGuess, mergeStatuses } from "../../game-helpers";

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [keyStatuses, setKeyStatuses] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });

  const handleNewGuess = (guess) => {
    console.log(guess);
    const newGuessResults = [...guessResults];
    newGuessResults.push({ guess, id: crypto.randomUUID() });
    setGuessResults(newGuessResults);
    const newStatuses = mergeStatuses(keyStatuses, checkGuess(guess, answer));
    setKeyStatuses(newStatuses);
  };

  const handleClick = (e) => {
    setGuessResults([]);
    setKeyStatuses([]);
    setAnswer(sample(WORDS));
  };

  const gameFinished =
    guessResults.length == NUM_OF_GUESSES_ALLOWED ||
    (guessResults.length > 0 &&
      guessResults[guessResults.length - 1].guess === answer);
  const gameOutcome =
    guessResults.length > 0 &&
    guessResults[guessResults.length - 1].guess === answer
      ? "happy"
      : "sad";

  return (
    <>
      <GuessResults results={guessResults} answer={answer} />

      {!gameFinished ? (
        <>
          <GuessInput onSubmit={handleNewGuess} />
          <Keyboard keyStatuses={keyStatuses} />
        </>
      ) : gameOutcome === "happy" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessResults.length} guesses</strong>.
          </p>
          <button className="button" onClick={handleClick}>
            Restart
          </button>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button className="button" onClick={handleClick}>
            Restart
          </button>
        </div>
      )}
    </>
  );
}

export default Game;

import React from "react";

function GuessInput({ onSubmit }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
        autoFocus
        value={guess}
        onChange={(e) => setGuess(e.target.value.slice(0, 5).toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

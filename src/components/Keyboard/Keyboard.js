import React from "react";

const kbRows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function checkStatus(key, keyStatuses) {
  const item = keyStatuses.find((e) => e.letter === key);
  return item ? item.status : "";
}

function Keyboard({ keyStatuses }) {
  return (
    <div className="keyboard">
      {kbRows.map((row, index) => {
        return (
          <div key={row} className="keyboard-row">
            {row.split("").map((char) => {
              const classes = `key ${checkStatus(char, keyStatuses)}`;
              return (
                <span key={char} className={classes}>
                  {char}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;

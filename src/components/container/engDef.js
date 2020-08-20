import React, { useEffect, useState } from "react";

import Definition from "../presentation/definition";

export default function EngDef({ word }) {
  let [definition, setDefinition] = useState([]);

  const fetchDefinition = (value) => {
    fetch(
      `https://dictionaryapi.com/api/v3/references/sd4/json/${value}?key=5718a61a-2c4a-4afe-b4d7-535445f8da45`
    )
      .then((res) => res.json())
      .then((res) => {
        return res.length > 0
          ? typeof res[0] === "string"
            ? res
            : res[0].shortdef
          : ["Sorry. Invalid or misspelled word."];
      })
      .then((res) => setDefinition(res));
  };

  useEffect(() => {
    fetchDefinition(word);
  }, [word]);

  return <Definition value={definition} />;
}

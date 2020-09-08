import React, { useEffect, useState } from "react";
import axios from "axios";

import EngUi from "./engUi";

export default function EngDict({ word }) {
  let [def, setDef] = useState([]);

  function filterPoSpeech(defArr) {
    let arr = [];
    defArr.forEach((e) => {
      arr.indexOf(e.partOfSpeech) === -1 &&
        (e.partOfSpeech !== null
          ? arr.push(e.partOfSpeech)
          : console.log(
              `null part of speech found. def: ${e.definition.toUpperCase()}`
            ));
    });
    let splitObject = {};
    for (let ele of arr) {
      splitObject[ele] = defArr.filter((e) => e.partOfSpeech === ele);
    }
    return splitObject;
  }

  useEffect(() => {
    word !== "" &&
      axios({
        headers: {
          "x-rapidapi-key":
            "faab4b4011mshf0e7bc0307e81aap1f8b81jsn8e7e870114ee",
        },
        method: "GET",
        url: `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,
      }).then((res) => {
        const temp = filterPoSpeech(res.data.definitions);
        setDef(temp);
      });
  }, [word]);

  return <EngUi data={def} />;
}

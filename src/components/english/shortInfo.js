import React from "react";
import Axios from "axios";

export default ({ word }) => {
  let [wordInfo, setWordInfo] = React.useState({ name: "", sound: "" });

  let options = {
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}/pronunciation`,
    headers: {
      "x-rapidapi-key": "faab4b4011mshf0e7bc0307e81aap1f8b81jsn8e7e870114ee",
    },
  };

  React.useEffect(() => {
    word !== "" &&
      Axios(options).then((res) => {
        setWordInfo({ name: word, sound: `| ${res.data.pronunciation.all} |` });
      });
  }, [word]);

  return (
    <div>
      <span
        style={{
          textTransform: "capitalize",
          fontWeight: "bold",
          fontFamily: "lucida Sans, sans-serif",
          marginRight: 20,
        }}
      >
        {wordInfo.name}
      </span>
      <span>{wordInfo.sound}</span>
    </div>
  );
};

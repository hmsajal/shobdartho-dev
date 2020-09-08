import React, { useState } from "react";

import Menu from "./menu";
import EngDict from "../english/engDict";
import DataInput from "./dataInput";

export default function Dictionary() {
  let [word, setWord] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Menu />
      <DataInput getVal={(val) => setWord(val)} />
      <EngDict word={word} />
    </div>
  );
}

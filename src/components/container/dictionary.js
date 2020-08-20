import React, { useState } from "react";

import Menu from "../presentation/menu";
import EngDef from "./engDef";
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
      <EngDef word={word} />
    </div>
  );
}

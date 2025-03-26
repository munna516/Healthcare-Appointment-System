import React from "react";
import Counting from "./Counting";

export default function CountPart() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      <Counting
        start={20}
        end={355}
        sign={"K+"}
        title={"Recovered Patients"}
      ></Counting>
      <Counting start={10} end={98} sign={"%"} title={"Good Review"}></Counting>
      <Counting
        start={1}
        end={120}
        sign={"+"}
        title={"Popular Doctors"}
      ></Counting>
    </div>
  );
}

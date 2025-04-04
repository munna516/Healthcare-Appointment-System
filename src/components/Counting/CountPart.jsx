import React from "react";
import Counting from "./Counting";

export default function CountPart() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Counting
        start={20}
        end={550}
        sign={"+"}
        title={"Recovered Patients"}
      ></Counting>
      <Counting start={10} end={98} sign={"%"} title={"Good Review"}></Counting>
      <Counting
        start={1}
        end={57}
        sign={"+"}
        title={"Popular Doctors"}
      ></Counting>
    </div>
  );
}

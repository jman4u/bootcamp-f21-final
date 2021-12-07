import { getCats } from "../../../server/mongodb/actions/Adopt";
import React from "react";

export default function Adopt() {
  //   const getCatData = async () => {
  //     const res = await getCats();
  //     const data = await res.json();

  //     return data;
  //   };

  const data = getCats().then((r) => console.log(r));

  return (
    <div>
      <h1>Adopt page</h1>
    </div>
  );
}

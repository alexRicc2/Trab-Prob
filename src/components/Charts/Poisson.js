import React, { useState } from "react";
import { Pform } from "../Forms/Pform";
import Chart from "../Chart";
function factor(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * factor(num - 1);
  }
}

const poisson = (media, x) => {
  return (Math.pow(media, x) * Math.exp(-media)) / factor(x);
};

export default function Poisson() {
  const [dados, setDados] = useState([]);

  const handleSubmit = (media) => {
    var aux = [];
    for (var i = 0; i < 3 * media; i++) {
      aux.push([i, poisson(media, i)]);
    }
    setDados([{ label: "asdasd", data: aux }]);
  };

  return (
    <div>
      <Chart data={dados} type="bar" />
      <Pform onSubmit={handleSubmit}></Pform>
    </div>
  );
}

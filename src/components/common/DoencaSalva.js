import React, { useContext } from "react";
import "./DoencaSalva.scss";
import { DoencaContext } from "./Doenca";
import Card from "./Card";
export default function DoencaSalva({className, data, nome, doenca, click }) {
  const { doencaSalva } = useContext(DoencaContext);

  return (
    <Card className={className}  onClick={() => doencaSalva(doenca)} click={click}>
        <p>{data}</p>
        <h1>{nome}</h1>
    </Card>
  );
}

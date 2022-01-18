import React from "react";
import "./Footer.scss"
export default function Footer(props) {
  return (
    <section className={"footer "+props.className}>
      <p>Copyright © 2021 Plague Chart</p>
    </section>
  );
}
